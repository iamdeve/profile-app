import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import horizontal from '../Images/horizontal.jpg';
import $ from 'jquery';
import h2 from '../Images/h2.jpg';
import vertical from '../Images/vertical.jpg';
import IMG1 from '../Images/1.jpg';
import IMG2 from '../Images/2.jpg';
import IMG3 from '../Images/3.jpg';
import IMG4 from '../Images/4.jpg';
import IMG5 from '../Images/5.jpg';
import IMG6 from '../Images/6.jpg';
import IMG7 from '../Images/7.jpg';
import IMG8 from '../Images/8.jpg';
import HorizontalModal from '../components/HorizontalModal';
import VerticalModel from '../components/VerticalModel';

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

let data = [
	{
		sections: {
			title: 'Lorpas Ipsum1 1.1',
			desc:
				' 1.1 Lorpas Ipsum Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer Science from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using Information Retrieval (IR) and Natural Language Processing (NLP) techniques.',
			data: [
				//first 1.1 images
				{
					title: 'Lorpas Ipsum1 Dollar1',
					images: [
						{
							file: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG2,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: horizontal,
							horizontal: true,

							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar2',
					images: [
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG1,
							horizontal: false,

							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG3,
							horizontal: false,

							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar3',
					images: [
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG4,
							horizontal: false,

							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar4',
					images: [
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG6,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar5',
					images: [
						{
							file: IMG2,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG7,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar6',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG4,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG5,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar7',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar8',
					images: [
						{
							file: IMG8,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar9',
					images: [
						{
							file: IMG8,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar10',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG1,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar11',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar12',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG2,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 13 must have to change',
					images: [
						{
							file: IMG1,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG2,
							horizontal: false,
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG8,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG8,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 14 must have to change',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 15 must have to change',
					images: [
						{
							file: IMG2,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG6,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 16 must have to change',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 17 must have to change',
					images: [
						{
							file: IMG2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 18 must have to change',
					images: [
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 199 must have to change',
					images: [
						{
							file: IMG1,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{ file: h2, horizontal: true, link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg' },
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar 20 must have to change',
					images: [
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG4,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: IMG3,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
			],
		},
	},
	{
		sections: {
			title: 'Lorpas Ipsum1 1.2',
			desc: ' 1.2Lorpas Ipsum Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',

			data: [
				//first 1.2 images
				{
					title: 'Lorpas Ipsum1 Dollar',
					images: [
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: vertical,
							horizontal: false,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
			],
		},
	},
	{
		sections: {
			title: 'Lorpas Ipsum1 1.3',
			desc: ' 1.3 Lorpas Ipsum Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',

			data: [
				//first 1.3 images
				{
					title: 'Lorpas Ipsum1 Dollar 1.3.1',
					images: [
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar3',
					images: [
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
				{
					title: 'Lorpas Ipsum1 Dollar3',
					images: [
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: h2,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
						{
							file: horizontal,
							horizontal: true,
							textLink: 'I amd link place mein here for underline text',
							link: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							description: 'I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan.',
						},
					],
				},
			],
		},
	},
];
function newTabImage(id) {
	var image = new Image();
	image.src = $('#idimage' + id).attr('src');

	var w = window.open('', '_blank');
	w.document.write(image.outerHTML);
	w.document.close();
}
export default function FirstLevel() {
	const classes = useStyles();
	const [modalShowHor, setModalShowHor] = React.useState(false);
	const [modalShowVer, setModalShowVer] = React.useState(false);
	const [currentImage, setCurrentImage] = React.useState('');
	const [currentDesc, setCurrentDesc] = React.useState('');
	const [textLink, setTextLink] = React.useState(null);
	const showModalHandler = (image, horizontal, description, txtLink) => {
		setCurrentDesc(description);
		setCurrentImage(image);
		setTextLink(txtLink);
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
			<HorizontalModal textLink={textLink} description={currentDesc} show={modalShowHor} image={currentImage} onHide={() => setModalShowHor(false)} />
			<VerticalModel textLink={textLink} description={currentDesc} show={modalShowVer} image={currentImage} onHide={() => setModalShowVer(false)} />

			<div className='row'>
				<div className={classes.root}>
					{data.map((imgData, id) => (
						<div key={id}>
							<div className='mb-5 mt-5 fontfamily'>
								<p>{imgData.sections.desc}</p>
							</div>
							<Accordion>
								<AccordionDetails>
									<Typography>
										<strong>{imgData.sections.title}</strong>
									</Typography>
								</AccordionDetails>
							</Accordion>
							{imgData.sections.data.map((img, i) => (
								<div key={i} className='d-flex flex-row  mt-3 '>
									<div className=' col-lg-2  col-md-1 col-sm-1 col-xs-1'>
										<h5 style={{ float: 'left' }}>{img.title}</h5>
									</div>
									<div className=' col-lg-10  col-md-11 col-sm-11 col-xs-1 '>
										<div className='d-flex' style={{ flexWrap: 'wrap' }}>
											{img.images.map((image, j) => (
												<div key={j}>
													<a href={image.link} rel='noreferrer' target='_blank'>
														<img
															className='h-image-size'
															src={image.file}
															id={'idimage' + i + '-' + j}
															// onClick={() => newTabImage(+i + '-' + j)}
															alt='horizontalimage'
															onMouseOver={() => {
																if (image.horizontal) {
																	showModalHandler(image.file, true, image.description, image.textLink);
																} else {
																	showModalHandler(image.file, false, image.description, image.textLink);
																}
															}}
														/>
													</a>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					))}

					<div className='mb-5 mt-5 fontfamily'>
						<p>
							<strong>Lorpas Ipsum</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology, Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer
							Science from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
