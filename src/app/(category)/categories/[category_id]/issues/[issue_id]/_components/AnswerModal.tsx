import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@yamada-ui/react";
import { useModal } from "../hooks/useModal";
import { useParams, useRouter } from "next/navigation";

const AnswerModal = () => {
  const { isOpen, setIsOpen } = useModal();
  const router = useRouter();
  const params = useParams();
  const { category_id, issue_id } = params;

  const handleClosse = (): void => {
    router.push(`/categories/${category_id}/issues/${Number(issue_id) + 1}`);
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClosse}>
        <ModalHeader
          p='40px 30px 0 30px'
          textAlign='center'
        >{`覚えられましたか？\nあと1日後にもう一度挑戦！`}</ModalHeader>

        <ModalBody>
          <Center
            w='120px'
            h='120px'
            m='30px auto'
            bg='green.300'
            borderRadius='50%'
            color='#fff'
            fontSize='1.8rem'
            fontWeight='bold'
          >
            1日後
          </Center>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='primary' onClick={handleClosse}>
            次の問題
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AnswerModal;
