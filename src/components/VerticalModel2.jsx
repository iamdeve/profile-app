import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/common.css';
function VerticalModel2(props) {
	return (
		<Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Body contentClassName='height' style={{ overflow: 'scroll' }}>
				<img className='modal-bg' src={props.image} alt='profile' />
			</Modal.Body>
		</Modal>
	);
}

export default VerticalModel2;
