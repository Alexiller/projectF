import { Button, ModalFooter } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function FooterModal({ label, color, onClick, onClose }) {
  return (
    <ModalFooter>
      <Button colorScheme={color} mr={3} onClick={onClick}>
        {label}
      </Button>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  );
}
