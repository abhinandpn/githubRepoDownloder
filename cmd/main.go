package main

import (
	"github.com/abhinandpn/githubRepoDownloder/internal/delivery/cli"
	"github.com/abhinandpn/githubRepoDownloder/internal/repository"
	"github.com/abhinandpn/githubRepoDownloder/internal/usecase"
)

func main() {
	repo := repository.NewGitHubRepo()
	uc := usecase.NewGitHubUsecase(repo)
	handler := cli.NewHandler(uc)

	handler.Start()
}
