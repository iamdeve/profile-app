import React from 'react';
import horizontal from '../Images/horizontal.jpg';
import vertical from '../Images/vertical.jpg';
import Modal from 'react-bootstrap/Modal';
import '../css/common.css';
import { Link } from 'react-router-dom';
function VerticalModel(props) {
	console.log('prpos');
	return (
		<Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered style={{ width: '100%' }}>
			<Modal.Body contentClassName='height' style={{ overflow: 'scroll' }}>
				<div className='modal-bg' style={{ background: `url(${props.image})` }}></div>
				{/* <img className="v-model-image-size" src={props.image} alt="vertical" /> */}
			</Modal.Body>
			<Modal.Footer>
				<div className='mb-2 fontfamily'>
					<Link style={{ textDecoration: 'underline' }} to='/'>
						<strong>Lorpas Ipsum</strong> Currently, I am working as Assistant Professor
					</Link>
				</div>
			</Modal.Footer>
		</Modal>
	);
}

export default VerticalModel;
