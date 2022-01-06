import React from "react";
import "./repo.less";
import { NavLink } from "react-router-dom";

const Repo = (props) => {
  const repo = props.repo;

  return (
    <div className="repo">
      <div className="repo-header">
        <div className="repo-header__name">
          <NavLink
            className="repo-header__link"
            to={`/card/${repo.owner.login}/${repo.name}`}
          >
            {repo.name}
          </NavLink>
        </div>
        <div className="repo-header__stars">
          Number of stars: {repo.stargazers_count}
        </div>
      </div>
      <div className="repo-lastCommit">Last commit: {repo.updated_at}</div>
      <a href={repo.html_url} className="repo-link">
        Link to Repository: {repo.html_url}
      </a>
    </div>
  );
};

export default Repo;
