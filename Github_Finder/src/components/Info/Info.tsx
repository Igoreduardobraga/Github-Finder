import { UserProps } from "../../types/user";

import classes from "./Info.module.css";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";

const Info = ({ user }: { user: UserProps | null }) => {
  if (user === null) return;

  return (
    <div className={classes.info_container}>
      <img src={user.avatar_url} />
      <h2>{user.login}</h2>
      {user.location && (
        <div className={classes.location}>
          <MdLocationPin />
          <span>{user.location}</span>
        </div>
      )}
      <div className={classes.follow}>
        <p>Seguidores: {user.followers}</p>
        <hr />
        <p>Seguindo: {user.following}</p>
      </div>
      <Link to={`/projetos/${user.login}`}>
        <button>Ver melhores projetos</button>
      </Link>
    </div>
  );
};

export default Info;
