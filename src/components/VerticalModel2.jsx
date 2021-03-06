import React from 'react';
import horizontal from '../Images/horizontal.jpg';
import vertical from '../Images/vertical.jpg';
import Modal from 'react-bootstrap/Modal';
import '../css/common.css';
function VerticalModel2(props) {
	return (
		<Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Body contentClassName='height' style={{ overflow: 'scroll' }}>
				{/* {console.log(props.imageToShow)}
                {props.imageToShow}
                {props.imageToShow ? (
                    <div style={{ width: '100%', height: '100%', backgroundImage: `url(${props.imageToShow})` }}></div>
                ) : (
                        <div></div>
                    )} */}
				<div className='modal-bg' style={{ background: `url(${props.image})` }}></div>
				{/* <img className="v-model-image-size" src={props.imageToShow} alt="img" /> */}
			</Modal.Body>
		</Modal>
	);
}

export default VerticalModel2;
