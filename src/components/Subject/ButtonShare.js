import React from "react";
import { Button, Icon, } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ButtonShare() {
  return (
    <div>
      <Button
        colorScheme="teal"
        color="#f6f7fb"
        size="md"
        variant="outline"
        ml="2"
        _hover={{ bg: "#2e3856" }}
      >
        <Icon as={ExternalLinkIcon} boxSize={5} />
        <span className="ml-2 ">Chia sẻ</span>
      </Button>
    </div>
  );
}
