import { useUserContext } from "./UserProvider";

export const UserMenu = () => {
  const { isLogIn, userName, logIn, logOut } = useUserContext();

  return (
    <div>
      {isLogIn && <p>{userName}</p>}
      {isLogIn ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
