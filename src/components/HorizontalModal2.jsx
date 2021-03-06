import React from 'react';
import Modal from 'react-bootstrap/Modal';
import horizontal from '../Images/horizontal.jpg';
import vertical from '../Images/vertical.jpg';
import '../css/common.css';
import $ from 'jquery';
function HorizontalModal2(props) {
	return (
		<>
			<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
				<Modal.Body style={{ overflow: 'auto' }}>
					<div className='modal-bg' style={{ background: `url(${props.image})` }}></div>
					{/* <img className='h-model-image-size' src={horizontal} alt='horizontalimage' /> */}
				</Modal.Body>
			</Modal>
		</>
	);
}

export default HorizontalModal2;
