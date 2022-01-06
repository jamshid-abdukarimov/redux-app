import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContributors, getCurrentRepo } from "../actions/repos";
import "./card.less";

const Card = () => {
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState({ owner: {} });
  const [loading, setLoading] = useState(false);
  const [contributors, setContributors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo, setLoading);
    getContributors(username, reponame, setContributors, setLoading);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="card">
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back
          </button>
          <div className="card-header">
            <div className="name">{repo.name}</div>
            <div className="stars">
              Number of stars:{" "}
              <span style={{ fontWeight: "bold" }}>
                {repo.stargazers_count}
              </span>
            </div>
          </div>
          <div className="card-content">
            <img className="card-img" src={repo.owner.avatar_url} alt="" />
            <div>
              <div className="contributors">
                <h1>List of Contributors</h1>
                <div className="contributors-item">
                  {contributors.map((c, index) => (
                    <span key={index}>
                      {index + 1}. {c.login}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Card;
