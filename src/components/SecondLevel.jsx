import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import horizontal from '../Images/horizontal.jpg';
import vertical from '../Images/vertical.jpg';
import HorizontalModal2 from '../components/HorizontalModal2';
import VerticalModel2 from '../components/VerticalModel2';
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

export default function SecondLevel() {
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
			<VerticalModel2 show={modalShowVer} image={currentImage} onHide={() => setModalShowVer(false)} />
			<HorizontalModal2 show={modalShowHor} image={currentImage} onHide={() => setModalShowHor(false)} />
			<div className='mb-2 mt-2 fontfamily'>
				<strong>Lorpas Ipsum 2.1</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer Science
				from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
			</div>

			<div className='row'>
				<div className={classes.root}>
					<Accordion>
						<AccordionDetails>
							<Typography>
								<strong>Lorpas Ipsum1 2.1</strong>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-12 '>
								<div className='d-flex '>
									{[
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
										{ file: horizontal, horizontal: true },
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
									{/* <VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='h-image-size' src={horizontal} alt='horizontalimage' onMouseOver={() => setModalShowHor(true)} />
									<HorizontalModal2 show={modalShowHor} imageToShow={horizontal} onHide={() => setModalShowHor(false)} /> */}
								</div>
							</div>
						</div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-12 '>
								<div className='d-flex '>
									{[
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
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
									))}
									{/* <img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} /> */}
								</div>
							</div>
						</div>
					</div>
					<div className='mb-2 mt-2 fontfamily'>
						<strong>Lorpas Ipsum 2.1</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer
						Science from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
					</div>
					<Accordion>
						<AccordionDetails>
							<Typography>
								<strong>Lorpas Ipsum1 2.2</strong>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-12 '>
								<div className='d-flex '>
									{[
										{ file: horizontal, horizontal: true },
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
										{ file: horizontal, horizontal: true },
										{ file: horizontal, horizontal: true },
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
									))}
									{/* <img className='h-image-size' src={horizontal} alt='horizontalimage' onMouseOver={() => setModalShowHor(true)} />
									<HorizontalModal2 show={modalShowHor} imageToShow={horizontal} onHide={() => setModalShowHor(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='h-image-size' src={horizontal} alt='horizontalimage' onMouseOver={() => setModalShowHor(true)} />
									<HorizontalModal2 show={modalShowHor} imageToShow={horizontal} onHide={() => setModalShowHor(false)} />
									<img className='h-image-size' src={horizontal} alt='horizontalimage' onMouseOver={() => setModalShowHor(true)} />
									<HorizontalModal2 show={modalShowHor} imageToShow={horizontal} onHide={() => setModalShowHor(false)} /> */}
								</div>
							</div>
						</div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-12 '>
								<div className='d-flex '>
									{[
										{ file: vertical, horizontal: false },
										{ file: horizontal, horizontal: true },
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
									))}
									{/* <img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='h-image-size' src={horizontal} alt='horizontalimage' onMouseOver={() => setModalShowHor(true)} />
									<HorizontalModal2 show={modalShowHor} imageToShow={horizontal} onHide={() => setModalShowHor(false)} /> */}
								</div>
							</div>
						</div>
						<div className='d-flex flex-row  mt-3 '>
							<div className=' col-12 '>
								<div className='d-flex '>
									{[
										{ file: vertical, horizontal: false },
										{ file: vertical, horizontal: false },
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
									))}
									{/* <img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} />
									<img className='v-image-size' src={vertical} alt='vertical' onMouseOver={() => setModalShowVer(true)} />
									<VerticalModel2 show={modalShowVer} imageToShow={vertical} onHide={() => setModalShowVer(false)} /> */}
								</div>
							</div>
						</div>
					</div>
					<div className='mb-2 mt-2 fontfamily'>
						<strong>Lorpas Ipsum 2.3</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer
						Science from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
					</div>
				</div>
			</div>
		</div>
	);
}
