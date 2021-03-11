import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/common.css';
import { Link } from 'react-router-dom';
function HorizontalModal(props) {
	return (
		<>
			<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
				<Modal.Body style={{ overflow: 'auto' }}>
					<img className='modal-bg' src={props.image} alt='profile' />
				</Modal.Body>
				<Modal.Footer>
					<Link style={{ textDecoration: 'underline' }} to='/somewher'>
						{props.textLink}
					</Link>
					<p>{props.description}</p>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default HorizontalModal;
