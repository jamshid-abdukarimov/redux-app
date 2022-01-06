import axios from "axios";
import {
  setFetchError,
  setIsFetching,
  setRepos,
} from "../../reducers/reposReducer";

export default function getRepos(
  searchQurey = "stars:%3E1",
  currentPage,
  perPage
) {
  if (searchQurey == "") {
    searchQurey = "stars:%3E1";
  }
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQurey}&sort=stars&per_page=${perPage}&page=${currentPage}`
      );
      dispatch(setRepos(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setFetchError(false));
      }, 5000);
    }
  };
}

export async function getCurrentRepo(username, reponame, setRepo, setLoading) {
  const response = await axios.get(
    `https://api.github.com/repos/${username}/${reponame}`
  );
  setRepo(response.data);
  setLoading(true);
}

export async function getContributors(
  username,
  reponame,
  setContributors,
  setLoading
) {
  const response = await axios.get(
    `https://api.github.com/repos/${username}/${reponame}/contributors?page=1&per_page=10`
  );
  setContributors(response.data);
  setLoading(true);
}
