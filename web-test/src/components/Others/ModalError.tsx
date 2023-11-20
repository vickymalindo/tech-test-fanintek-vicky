import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ModalError = ({ show, msg }: any) => {
  const navigate = useNavigate();
  return (
    <Modal show={show} centered>
      <Modal.Body>{msg}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => navigate('/')}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalError;
