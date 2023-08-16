import { ACCESS_TOKEN, TEMPLATE_REPO, GITHUB_API_URL } from "./constants";
import { Fork } from "./types";

export const getForks = async (): Promise<Fork[]> => {
  const headers = new Headers();
  headers.append("Accept", "application/vnd.github+json");
  headers.append("X-GitHub-Api-Version", "2022-11-28");
  headers.append("Authorization", `Bearer ${ACCESS_TOKEN}`);

  const requestOptions = {
    method: 'GET',
    headers: headers,
  };

  const endpoint = `${GITHUB_API_URL}/repos/${TEMPLATE_REPO}/forks`

  const forks = fetch(endpoint, requestOptions)
    .then(response => response.json())

  return forks
}
