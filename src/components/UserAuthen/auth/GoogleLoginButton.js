import { Button, Flex, Box, Text, Center } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../../configs/firebase.config";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const GoogleLoginBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // Người dùng đã đăng nhập, chuyển hướng đến trang dashboard
      router.push("/dashboard");
    }
  }, [user]);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Đăng nhập thành công
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // Xử lý thông tin đăng nhập thành công
        // ...
      })
      .catch((error) => {
        // Xử lý lỗi đăng nhập
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <Flex>
        <Box
          // width={"auto"}
          // height={"auto"}
          marginBottom={"8"}
          marginTop={"8"}
          // backgroundColor={"black"}
        >
          <Button
            leftIcon={<FcGoogle />}
            width={"80vh"}
            lineHeight={"24"}
            fontWeight={"600"}
            color={"#586380"}
            variant="outline"
            //   backgroundColor={"red"}
            onClick={handleSignInWithGoogle}
            //   alignItems={"center"}
            size="lg"
          >
            Tiếp tục bằng Google
          </Button>
        </Box>
      </Flex>
    </div>
  );
};

export default GoogleLoginBar;
