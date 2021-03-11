import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/common.css';
import { Link } from 'react-router-dom';
function VerticalModel(props) {
	console.log('prpos');
	return (
		<Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered style={{ width: '100%' }}>
			<Modal.Body contentClassName='height' style={{ overflow: 'scroll' }}>
				<img className='modal-bg' src={props.image} alt='profile' />
			</Modal.Body>
			<Modal.Footer>
				<div className='mb-2 fontfamily'>
					<Link style={{ textDecoration: 'underline' }} to='/somewher'>
						{props.textLink}
					</Link>
					<p>{props.description}</p>
				</div>
			</Modal.Footer>
		</Modal>
	);
}

export default VerticalModel;
