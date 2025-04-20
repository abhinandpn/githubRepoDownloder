package repository

import (
	"archive/zip"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/abhinandpn/githubRepoDownloder/internal/domain"
)

type githubRepoImpl struct{}

func NewGitHubRepo() domain.GitHubRepository {
	return &githubRepoImpl{}
}

func (g *githubRepoImpl) GetRepos(username string) ([]domain.GitHubRepo, error) {
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", username))
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("GitHub user not found")
	}

	var repos []domain.GitHubRepo
	err = json.NewDecoder(resp.Body).Decode(&repos)
	return repos, err
}

func (g *githubRepoImpl) DownloadRepos(username string, repos []domain.GitHubRepo) (string, error) {
	dir := fmt.Sprintf("downloads/%s", username)
	os.MkdirAll(dir, os.ModePerm)

	for _, repo := range repos {
		cmd := exec.Command("git", "clone", repo.CloneURL)
		cmd.Dir = dir
		err := cmd.Run()
		if err != nil {
			return "", err
		}
	}

	zipPath := fmt.Sprintf("%s.zip", dir)
	err := zipDirectory(dir, zipPath)
	return zipPath, err
}

func zipDirectory(sourceDir, zipPath string) error {
	zipFile, err := os.Create(zipPath)
	if err != nil {
		return err
	}
	defer zipFile.Close()

	writer := zip.NewWriter(zipFile)
	defer writer.Close()

	return filepath.Walk(sourceDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return err
		}

		header.Name, _ = filepath.Rel(filepath.Dir(sourceDir), path)
		if info.IsDir() {
			header.Name += "/"
		}

		writerPart, err := writer.CreateHeader(header)
		if err != nil {
			return err
		}

		if !info.IsDir() {
			file, err := os.Open(path)
			if err != nil {
				return err
			}
			defer file.Close()
			_, err = io.Copy(writerPart, file)
		}
		return err
	})
}
