import {
  Button,
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
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

  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
  });
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
    if (
      !formData.username ||
      !formData.dayOfBirth ||
      !formData.monthOfBirth ||
      !formData.yearOfBirth
    ) {
      // Hiển thị thông báo lỗi hoặc thông báo yêu cầu điền đầy đủ thông tin
      return;
    }
    // Xử lý logic đăng kí tại đây
    // Sau khi đăng kí thành công, bạn có thể chuyển hướng đến trang dashboard
    setIsRegistered(true);
    setShowSignUpModal(false);
  //   const database = getDatabase(app);
  //   const usersRef = ref(database, "users");
  //   const newUserRef = push(usersRef);
  //   set(newUserRef, {
  //     username: formData.username,
  //     dayOfBirth: formData.dayOfBirth,
  //     monthOfBirth: formData.monthOfBirth,
  //     yearOfBirth: formData.yearOfBirth,
  //   })
  //     .then(() => {
  //       // Đăng kí thành công và lưu thông tin người dùng
  //       setIsRegistered(true);
  //       setShowSignUpModal(false);
  
  //       // Chuyển hướng đến trang dashboard
  //       router.push("/dashboard");
  //     })
  //     .catch((error) => {
  //       // Xử lý lỗi khi lưu thông tin người dùng
  //       console.log(error);
  //     });
  // };
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
        size={"2xl"}
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      >
        <ModalOverlay />
        <ModalContent
        // backgroundColor={"red.100"}
        >
          <ModalHeader display={"flex"} alignSelf={"center"} marginBottom={"5"}>
            Đăng kí
          </ModalHeader>
          <div className="ml-10">
            <BirthOfDate require />
            <User />
          </div>

          <ModalFooter display={"flex"} alignSelf={"center"}>
            <Button width={"80vh"} colorScheme="blue" onClick={handleSignUp}>
              Đăng kí
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GoogleLoginBar;
