export type GithubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio?: string;
  following: number;
  followers: number;
  public_repos: number;
};
