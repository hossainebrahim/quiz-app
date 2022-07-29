import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

// import { Link } from "react-router-dom";
// import classes from "../styles/Account.module.css";
// export default function Account() {
//   return (
//     <div className={classes.account}>
//       <span className="material-icons-outlined" title="Account">
//         account_circle
//       </span>
//       <Link to="/singup">singup</Link>
//       <Link to="/login">Login</Link>
//       {/*<span className="material-icons-outlined" title="Logout">
//         logout
//     </span>*/}
//     </div>
//   );
// }
