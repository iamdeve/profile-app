import React from 'react';
import Modal from 'react-bootstrap/Modal'
import horizontal from "../Images/horizontal.jpg";
import vertical from "../Images/vertical.jpg";
import "../css/common.css";


function HorizontalModal(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body style={{ overflow: "auto" }}>
                    <img className="h-model-image-size" src={props.image} alt="horizontalimage" />
                </Modal.Body>
                <Modal.Footer>
                    <div className="mb-2 fontfamily">
                        <strong>Lorpas Ipsum</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology,
                Lahore, Pakistan.
            </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HorizontalModal;
