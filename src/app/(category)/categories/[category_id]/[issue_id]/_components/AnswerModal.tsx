import { Avatar, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@yamada-ui/react"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../hooks/useModal";
import { useParams, useRouter } from "next/navigation";

const AnswerModal = () => {

    const { isOpen, setIsOpen } = useModal();
    const router = useRouter();
    const params = useParams();
    const { category_id, issue_id } = params;

    const handleClosse = () : void => {
        router.push(`/categories/${category_id}/${Number(issue_id) + 1}`);
        setIsOpen(false);
    }

    return (
        <>
        <Modal isOpen={isOpen} onClose={handleClosse}>
            <ModalHeader>正解！</ModalHeader>

            <ModalBody>
                <Avatar size='xl' bg="green.300" icon={<FontAwesomeIcon icon={faCheck} />} style={{margin: "30px auto"}}/>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="primary" onClick={handleClosse}>次の問題</Button>
            </ModalFooter>
        </Modal>
        </>
    )
}


export default AnswerModal