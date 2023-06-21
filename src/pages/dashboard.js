import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "@/configs/firebase.config";

const auth = getAuth(app);

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập
      router.push("/");
    }
  }, [user]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Đăng xuất thành công, chuyển hướng về trang đăng nhập
        router.push("/");
      })
      .catch((error) => {
        // Xử lý lỗi đăng xuất
      });
  };

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
