import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

export default function ModalComponent({ logo }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <img
                src={logo}
                width="300"
                alt="Logo"
                className="mt-5 mb-5 d-none d-xs-none d-md-block"
              />
              <div className="fw-bolder fs-5 text-center">
                Asik, Pengajuan berhasil dilakukan
              </div>
              <div className="text-center mt-2">
                Tunggu pengajuan usaha kamu, hingga disetujui oleh influencer
                terpilih
              </div>
            </div>
          </Modal.Body>
          <div className="p-4 d-flex justify-content-center">
            <button
              onClick={handleClose}
              type="button"
              className="btn rounded-pill mainColor"
              data-bs-dismiss="modal"
            >
              Asikkk
            </button>
          </div>
        </Modal>
      </>
    </div>
  );
}
