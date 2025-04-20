package cli

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"

	"github.com/abhinandpn/githubRepoDownloder/internal/domain"
	"github.com/abhinandpn/githubRepoDownloder/internal/usecase"
)

type Handler struct {
	usecase *usecase.GitHubUsecase
}

func NewHandler(u *usecase.GitHubUsecase) *Handler {
	return &Handler{usecase: u}
}

func (h *Handler) Start() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Enter GitHub username: ")
	username, _ := reader.ReadString('\n')
	username = strings.TrimSpace(username)

	fmt.Println("🔍 Verifying username...")
	repos, err := h.usecase.GetRepos(username)
	if err != nil {
		fmt.Println("❌ Error:", err)
		return
	}

	if len(repos) == 0 {
		fmt.Println("⚠️ No repositories found.")
		return
	}

	fmt.Println("✅ Repositories found:")
	for i, repo := range repos {
		fmt.Printf("[%d] %s\n", i+1, repo.Name)
	}

	fmt.Println("\nOptions:")
	fmt.Println("1. Download all repositories")
	fmt.Println("2. Download specific repositories by number (comma-separated)")

	fmt.Print("\nChoose option (1/2): ")
	choice, _ := reader.ReadString('\n')
	choice = strings.TrimSpace(choice)

	var selected []int
	if choice == "2" {
		fmt.Print("Enter repo numbers (e.g., 1,3,5): ")
		selection, _ := reader.ReadString('\n')
		selection = strings.TrimSpace(selection)

		split := strings.Split(selection, ",")
		for _, s := range split {
			num, err := strconv.Atoi(strings.TrimSpace(s))
			if err == nil && num > 0 && num <= len(repos) {
				selected = append(selected, num-1)
			}
		}
	} else {
		for i := range repos {
			selected = append(selected, i)
		}
	}

	var reposToDownload []domain.GitHubRepo
	for _, i := range selected {
		reposToDownload = append(reposToDownload, repos[i])
	}

	fmt.Println("⬇️  Downloading selected repositories...")
	zipPath, err := h.usecase.DownloadRepos(username, reposToDownload)
	if err != nil {
		fmt.Println("❌ Error downloading:", err)
		return
	}

	fmt.Println("✅ Done! Downloaded ZIP at:", zipPath)
}
