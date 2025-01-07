import { useEffect } from "react";
import { auth, googleLogin, logout } from "../../../../firebase";
import { useAuthStore } from "../../../stores/auth";

export default function Login() {
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [setUser]);

  const handleLogin = () => {
    googleLogin();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {user ? (
        <div onClick={() => handleLogout()} className="">
          Çıkış için tıkla
        </div>
      ) : (
        <div onClick={() => handleLogin()} className="">
          Login için tıkla
        </div>
      )}
    </>
  );
}
