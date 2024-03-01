import { Button, Modal } from 'react-bootstrap';

export default function NotificationModal({ showModal, message, updateModalState }) {
	return (
		<Modal show={showModal} onHide={()=> updateModalState(false, "")}>
			<Modal.Header>
				<Modal.Title>Process Result:</Modal.Title>
			</Modal.Header>
			<Modal.Body>{message}</Modal.Body>
			<Modal.Footer>
				<Button onClick={()=> updateModalState(false, "")}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
