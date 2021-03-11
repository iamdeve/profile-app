import React from 'react';
import Modal from 'react-bootstrap/Modal';

import '../css/common.css';

function HorizontalModal2(props) {
	return (
		<>
			<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
				<Modal.Body style={{ overflow: 'auto' }}>
					<img className='modal-bg' src={props.image} alt='profile' />
				</Modal.Body>
			</Modal>
		</>
	);
}

export default HorizontalModal2;
