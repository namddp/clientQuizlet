import { Button, Flex, Box, Text, Center } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginBar = () => {
  const handleGoogleLogin = () => {
    // Thực hiện các xử lý đăng nhập bằng Google tại đây
    // Ví dụ: gọi hàm API, chuyển hướng đến trang đăng nhập bằng Google, vv.
  };

  return (
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
          onClick={handleGoogleLogin}
        //   alignItems={"center"}
        >
          Tiếp tục bằng Google
        </Button>
      </Box>
    </Flex>
  );
};

export default GoogleLoginBar;
