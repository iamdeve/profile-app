import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Vedio from '../components/Vedio';
import horizontal from '../Images/horizontal.jpg';
import vertical from '../Images/vertical.jpg';
import v2 from '../Images/v2.jpg';
import HorizontalModal2 from '../components/HorizontalModal2';
import VerticalModel2 from '../components/VerticalModel2';
import IMG1 from '../Images/1.jpg';
import IMG2 from '../Images/2.jpg';
import IMG3 from '../Images/3.jpg';
import IMG4 from '../Images/4.jpg';
import IMG5 from '../Images/5.jpg';
import IMG6 from '../Images/6.jpg';
import IMG7 from '../Images/7.jpg';
import IMG8 from '../Images/8.jpg';
import '../css/common.css';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
}));

export default function FourthLevel() {
	const classes = useStyles();
	const [modalShowHor, setModalShowHor] = React.useState(false);
	const [modalShowVer, setModalShowVer] = React.useState(false);
	const [currentImage, setCurrentImage] = React.useState('');
	const showModalHandler = (image, horizontal) => {
		setCurrentImage(image);
		if (horizontal) {
			setModalShowHor(true);
			setModalShowVer(false);
		} else {
			setModalShowVer(true);
			setModalShowHor(false);
		}
	};
	React.useEffect(() => {
		document.body.addEventListener('click', () => {
			setModalShowHor(false);
			setModalShowVer(false);
		});
	}, []);
	return (
		<div className='container '>
			<HorizontalModal2 show={modalShowHor} image={currentImage} onHide={() => setModalShowHor(false)} />
			<VerticalModel2 show={modalShowVer} image={currentImage} onHide={() => setModalShowVer(false)} />
			<div className='mb-2 fontfamily'>
				<strong>Lorpas Ipsum 4.1</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer Science
				from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
			</div>
			<div className='row'>
				<div className={classes.root}>
					<Accordion>
						<AccordionDetails>
							<Typography>
								<strong>Lorpas Ipsum Dolar4</strong>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-sm-2 '>
								<h5 style={{ float: 'left' }}>Lorpas Ipsum1 Dollar</h5>
							</div>
							<div className=' col-sm-10 '>
								<div className='d-flex '>
									{[
										{ file: IMG1, horizontal: false },
										{ file: IMG2, horizontal: false },
										{ file: IMG3, horizontal: false },
									].map((image, id) => (
										<img
											className='h-image-size'
											src={image.file}
											alt='horizontalimage'
											onMouseOver={() => {
												if (image.horizontal) {
													showModalHandler(image.file, true);
												} else {
													showModalHandler(image.file, false);
												}
											}}
										/>
										// <img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									))}
									{/* <img className='v-image-size' style={{ cursor: 'pointer' }} src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />

									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} /> */}
								</div>
							</div>
						</div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-sm-2 '>
								<h5 style={{ float: 'left' }}>Lorpas Ipsum1 Dollar</h5>
							</div>
							<div className=' col-sm-10 '>
								<div className='d-flex '>
									{[{ file: vertical, horizontal: false }].map((image, id) => (
										<img
											className='h-image-size'
											src={image.file}
											alt='horizontalimage'
											onMouseOver={() => {
												if (image.horizontal) {
													showModalHandler(image.file, true);
												} else {
													showModalHandler(image.file, false);
												}
											}}
										/>
										// <img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									))}
									{/* <img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} /> */}
								</div>
							</div>
						</div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-sm-2 '>
								<h5 style={{ float: 'left' }}>Lorpas Ipsum1 Dollar</h5>
							</div>
							<div className=' col-sm-10 '>
								<div className='d-flex '>
									{[
										{ file: IMG4, horizontal: false },
										{ file: v2, horizontal: false },
									].map((image, id) => (
										<img
											className='h-image-size'
											src={image.file}
											alt='horizontalimage'
											onMouseOver={() => {
												if (image.horizontal) {
													showModalHandler(image.file, true);
												} else {
													showModalHandler(image.file, false);
												}
											}}
										/>
										// <img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									))}
									{/* <img id='1' className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img id='2' className='v-image-size' src={v2} alt='v2' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={v2} onHide={() => setModalShowVer(false)} /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-2 mt-2 fontfamily'>
					<strong>Lorpas Ipsum 4.2</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer
					Science from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
				</div>
				<Vedio />
			</div>
		</div>
	);
}
