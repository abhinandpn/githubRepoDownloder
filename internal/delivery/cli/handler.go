package cli

import (
	"bufio"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"strconv"
	"strings"

	"github.com/abhinandpn/githubRepoDownloder/internal/domain"
	"github.com/abhinandpn/githubRepoDownloder/internal/usecase"
	"github.com/spf13/cobra"
	"golang.org/x/term"
)

type Handler struct {
	usecase *usecase.GitHubUsecase
}

func NewHandler(u *usecase.GitHubUsecase) *Handler {
	return &Handler{usecase: u}
}

func (h *Handler) Start() {
	// Root command
	var rootCmd = &cobra.Command{
		Use:   "github-repo-downloader",
		Short: "A CLI tool to download all or selected GitHub repositories.",
		Long: `GitHub Repo Downloader is a tool that allows users to download 
	all or selected repositories from GitHub by providing a username.`,
		Run: func(cmd *cobra.Command, args []string) {
			// Get terminal width
			width, _, err := term.GetSize(int(os.Stdout.Fd()))
			if err != nil {
				width = 80 // Fallback to 80 if getting terminal width fails
			}

			// Display program info banner
			// Heading in cyan
			fmt.Println(centerText("\033[1;36m          GitHub Repo Downloader\033[0m", width)) // Cyan heading
			// Green description
			fmt.Println(centerText("\033[1;32mA CLI tool to download all or selected GitHub repositories.\033[0m", width)) // Green description
			fmt.Println(centerText("\033[1;32mBuilt with Go, it automatically checks for dependencies\033[0m", width))     // Green description
			fmt.Println(centerText("\033[1;32mand works across various command-line environments.\033[0m", width))         // Green description
			// Creator and version in yellow
			fmt.Println(centerText("\033[1;33mCreator: ABHINAND P N\033[0m", width))
			fmt.Println(centerText("\033[1;33mGitHub: \033[4mhttps://github.com/abhinandpn\033[0m", width)) // Added link format
			fmt.Println(centerText("\033[1;33mVersion: v01\033[0m", width))
		},
	}

	// Create a subcommand for downloading repositories
	var downloadCmd = &cobra.Command{
		Use:   "download [username]",
		Short: "Download GitHub repositories",
		Long:  `This command allows you to download all or selected repositories from GitHub.`,
		Args:  cobra.ExactArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			username := args[0]

			// Get terminal width
			width, _, err := term.GetSize(int(os.Stdout.Fd()))
			fmt.Println(width)
			if err != nil {
				width = 80 // Fallback to 80 if getting terminal width fails
			}

			// Display the repo download process here (you can add the logic for fetching repos, etc.)
			fmt.Printf("\n\033[1;36mVerifying username: %s...\033[0m\n", username)
			// Simulate fetching and listing the repos
			// In practice, you would fetch the repos from GitHub's API.
			repos := []string{"repo1", "repo2", "repo3"} // Simulated repos
			fmt.Println("\nRepositories found:")
			for i, repo := range repos {
				fmt.Printf("\033[1;32m[%d] %s\033[0m\n", i+1, repo)
			}
			// Add download logic as needed
			fmt.Println("\n\033[1;33mDownload option:\033[0m")
			fmt.Println("1. Download all repositories")
			fmt.Println("2. Download specific repositories by number (comma-separated)")
		},
	}

	// Add the download command to the root command
	rootCmd.AddCommand(downloadCmd)

	// Execute the root command
	if err := rootCmd.Execute(); err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// ✅ Step 1: Check required dependencies
	if err := CheckDependencies(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	// Start the repo listing process
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

	// Display repositories in two columns with repo numbers
	fmt.Println("✅ Repositories found:")

	half := len(repos) / 2
	if len(repos)%2 != 0 {
		half += 1 // In case of odd number of repos, give one extra to the first column
	}

	// Print the two columns side by side with repo numbers
	for i := 0; i < half; i++ {
		var leftRepo, rightRepo string
		var leftNum, rightNum int

		// Left column
		if i < len(repos) {
			leftRepo = repos[i].Name
			leftNum = i + 1
		}

		// Right column
		if i+half < len(repos) {
			rightRepo = repos[i+half].Name
			rightNum = i + half + 1
		}

		// Print both repos with their numbers
		if leftRepo != "" {
			fmt.Printf("%-5d %-30s", leftNum, leftRepo)
		} else {
			fmt.Printf("    ")
		}
		if rightRepo != "" {
			fmt.Printf("   %-5d %-30s\n", rightNum, rightRepo)
		} else {
			fmt.Println()
		}
	}

	// Prompt for options and download as before...
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

func CheckDependencies() error {
	deps := []string{"git"}

	for _, dep := range deps {
		_, err := exec.LookPath(dep)
		if err != nil {
			fmt.Printf("❌ Missing dependency: %s\n", dep)
			fmt.Print("📦 Do you want to install it now? (y/n): ")

			var input string
			fmt.Scanln(&input)

			if strings.ToLower(input) == "y" {
				fmt.Printf("⏳ Installing %s...\n", dep)
				cmd := exec.Command("pkg", "install", dep, "-y")
				cmd.Stdout = os.Stdout
				cmd.Stderr = os.Stderr
				cmd.Stdin = os.Stdin

				if err := cmd.Run(); err != nil {
					return fmt.Errorf("❌ Failed to install %s. Please install it manually", dep)
				}
			} else {
				return fmt.Errorf("⚠️ Cannot continue without %s. Exiting", dep)
			}
		}
	}

	// 🌐 Optional: check internet connectivity
	_, err := http.Get("https://api.github.com")
	if err != nil {
		return fmt.Errorf("⚠️ No internet connection. Please check your network and try again")
	}

	return nil
}

func centerText(text string, width int) string {
	// Calculate spaces to center the text
	spaces := (width - len(text)) / 2
	return strings.Repeat(" ", spaces) + text
}
