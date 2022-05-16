import React from "react";
import { Button, Modal } from 'react-bootstrap'

function ConfirmModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Inscrição?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ao confirmar a sua incrição você estará inscrito no campeonato escolhido.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
        <Button variant="primary" onClick={props.onSubmit}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;