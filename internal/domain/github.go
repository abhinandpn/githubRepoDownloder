package domain

type GitHubRepo struct {
	Name     string `json:"name"`
	CloneURL string `json:"clone_url"`
}

type GitHubRepository interface {
	GetRepos(username string) ([]GitHubRepo, error)
	DownloadRepos(username string, repos []GitHubRepo) (string, error)
}
