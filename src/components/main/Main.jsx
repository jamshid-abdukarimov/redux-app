import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom";
import { setCurrentPage } from "../../reducers/reposReducer";
import createPages from "../../utils/pagesCreator";
import getRepos from "../actions/repos";
import "./main.less";
import Repo from "./repo/Repo";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const perPage = useSelector((state) => state.repos.perPage);
  const isFetchError = useSelector((state) => state.repos.isFetchError);
  const [searchValue, setSearchValue] = useState("");
  const pagesCount = Math.ceil(totalCount / perPage);
  const navigate = useNavigate();

  const pages = [];
  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHandler() {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  return (
    <div>
      {isFetchError && (
        <div class="alert alert-danger" role="alert">
          Sorry an error occurred! Please refresh the site!
        </div>
      )}
      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus={true}
          type="text"
          placeholder="Input repo name"
          className="search-input"
        />
        <button onClick={searchHandler} className="search-btn">
          Search
        </button>
      </div>
      {isFetching ? (
        <div className="loader"></div>
      ) : (
        repos.map((repo) => <Repo key={repo.id} repo={repo} />)
      )}
      <div className="pages">
        {pages.map((page, index) => (
          <span
            onClick={() => dispatch(setCurrentPage(page))}
            className={currentPage == page ? "page active" : "page"}
            key={index}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;
