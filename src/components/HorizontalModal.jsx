import React from 'react';
import Modal from 'react-bootstrap/Modal';
import horizontal from '../Images/horizontal.jpg';
import vertical from '../Images/vertical.jpg';
import '../css/common.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
function HorizontalModal(props) {
	return (
		<>
			<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
				<Modal.Body style={{ overflow: 'auto' }}>
					<div className='modal-bg' style={{ background: `url(${props.image})` }}></div>
					{/* <img className='h-model-image-size' src={props.image} alt='horizontalimage' /> */}
				</Modal.Body>
				<Modal.Footer>
					<div className='mb-2 fontfamily'>
						<Link style={{ textDecoration: 'underline' }} to='/somewher'>
							<strong>Lorpas Ipsum</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.
						</Link>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default HorizontalModal;
