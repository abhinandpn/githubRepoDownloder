package usecase

import (
	"github.com/abhinandpn/githubRepoDownloder/internal/domain"
)

type GitHubUsecase struct {
	repo domain.GitHubRepository
}

func NewGitHubUsecase(r domain.GitHubRepository) *GitHubUsecase {
	return &GitHubUsecase{repo: r}
}

func (u *GitHubUsecase) GetRepos(username string) ([]domain.GitHubRepo, error) {
	return u.repo.GetRepos(username)
}

func (u *GitHubUsecase) DownloadRepos(username string, repos []domain.GitHubRepo) (string, error) {
	return u.repo.DownloadRepos(username, repos)
}
