import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";

const Profile = ({ isDisabled, user }) => {
  return (
    <div className={styles.profile}>
      {isDisabled && <Navigate to="/login" />}
      <h1>
        Profile: <b>{user && user.name}</b>
      </h1>

      {user && user?.image && (
        <div className={styles.profile__image}>
          <img src={user?.image} alt={user?.name} />
        </div>
      )}
      {user && user?.info && (
        <div dangerouslySetInnerHTML={{ __html: user?.info }} />
      )}
    </div>
  );
};

export default Profile;
