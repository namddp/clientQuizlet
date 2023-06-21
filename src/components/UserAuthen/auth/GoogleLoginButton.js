import {
  Button,
  Flex,
  Box,
  Text,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../../configs/firebase.config";
import BirthOfDate from "../Register/BirthOfDate";
import { useState } from "react";
import User from "../Register/User";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const GoogleLoginBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (user && isRegistered) {
      // Người dùng đã đăng nhập và đã đăng kí thành công, chuyển hướng đến trang dashboard
      router.push("/dashboard");
    }
  }, [user, isRegistered]);

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Đăng nhập thành công
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // Xử lý thông tin đăng nhập thành công
        // ...
        // Hiển thị modal đăng kí
        setShowSignUpModal(true);
      })
      .catch((error) => {
        // Xử lý lỗi đăng nhập
        // ...
      });
  };
  const handleSignUp = () => {
    // Xử lý logic đăng kí tại đây
    // Sau khi đăng kí thành công, bạn có thể chuyển hướng đến trang dashboard
    setIsRegistered(true);
    setShowSignUpModal(false);
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
      
      <Modal
        className="z-51"
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        width="50vh"
      >
        <ModalOverlay />
        <ModalContent 
        backgroundColor={"red.100"}
        width={"full"}
        height={"50vh"}
        >
          <ModalHeader>Đăng kí</ModalHeader>
          <BirthOfDate />
          <User />
          <ModalFooter>
            <Button variant="ghost" onClick={() => setShowSignUpModal(false)}>
              Hủy
            </Button>
            <Button colorScheme="blue" onClick={handleSignUp}>
              Đăng kí
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GoogleLoginBar;
