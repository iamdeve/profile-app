import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FirstLevel from "../components/FirstLevel";
import SecondLevel from "../components/SecondLevel";
import ThirdLevel from "../components/ThirdLevel";
import FourthLevel from "../components/FourthLevel";
import Header from "../components/Header";
import "../css/common.css";




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

export default function UnExpanded() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className="container ">
                <Header />
                <br />
                <br />
                <br />
                <div className="bg-dark row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

                    </div>
                </div>
                <br />
                <div className="mb-2 fontfamily">
                    <strong>Lorpas Ipsum</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology,
                Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer
                Science from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using
                Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
            </div>
                <div className="row">
                    <div className={classes.root}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}> <strong>Lorpas Ipsum1</strong></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="row  m-5" >
                                    <FirstLevel />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading}> <strong>Lorpas Ipsum2</strong></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="row  ml-5 mr-5" >
                                    <SecondLevel />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography className={classes.heading}> <strong>Lorpas Ipsum3</strong></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="row  ml-5 mr-5" >
                                    <ThirdLevel />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}> <strong>Lorpas Ipsum4</strong></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="row  ml-5 mr-5" >
                                    <FourthLevel />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="mb-2 mt-2 fontfamily mt-4">
                    <strong>Lorpas Ipsum</strong> Currently, I am working as Assistant Professor in the Computer Science Department of XYZ of Information Technology,
                Lahore, Pakistan. I am also leading the Natural Language Processing (NLP) research group at XYZ, XYZ. I hold a PhD in Computer
                Science from University of Sheffield, UK. During PhD, my research work focused on text reuse and plagiarism detection using
                Information Retrieval (IR) and Natural Language Processing (NLP) techniques.
            </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div >
        </>
    );
}