import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import './styles/resume.scss';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Resume = () => {
    const classes = useStyles();

    return (
        <Layout>
            <SEO title="John Yates's Resume" />
            <div className={classes.root}>
                <ExpansionPanel className="resume-panel">
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            <Chip label="2013 - 2016" /><h3 className="resume-heading">Lead Developer and Co-founder at Locbit</h3>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            <ListItem>Managed teams of up to six developers, implementing Agile and BDD methodologies</ListItem>
                            <ListItem>Architected and implemented a highly scalable API in Node.js capable of protocol agnostic automation of lighting, HVAC, access control and risk management systems</ListItem>
                            <ListItem>Designed and implemented a flexible UI using Bootstrap and Angular.js for visualizing control of large buildings</ListItem>
                            <ListItem>Developed, tested and deployed a commercial IoT solution in conjunction with Panasonic CPBD</ListItem>
                            <ListItem>Lead and maintained installation of automation systems at multiple locations</ListItem>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className="resume-panel">
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            <Chip label="2016 - Present" /><h3 className="resume-heading">Freelance consulting and industrial automation</h3>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            <ListItem>Completed numerous industrial automation jobs to save energy in large spaces</ListItem>
                            <ListItem>Worked with a Title 24 certified inspector to ensure automations were up to code</ListItem>
                            <ListItem>Completed a variety of projects as a freelancer in LAMP, MERN and other tech stacks</ListItem>
                            <ListItem>Notable project:  <br/><a href="http://uftmachine.com"> UFTMachine</a>, a teaching tool for the fine-tuned universe concept</ListItem>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className="resume-panel">
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>
                            <Chip label="2017 - 2019" /><h3 className="resume-heading">Lead Developer/VP of Technology at Driven</h3>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <ListItem>Headed the technology department at a publicly traded company (OTC:DRVD)</ListItem>
                            <ListItem>Managed teams for product development in LAMP and MERN stacks</ListItem>
                            <ListItem>Developed microservices and APIs in Node.js with Express and Polka routing frameworks</ListItem>
                            <ListItem>Designed and developed E-commerce shops on WooCommerce and Shopify</ListItem>
                            <ListItem>Developed a logistics platform with a React.js frontend and Node.js backend with support from scalable Node.js microservices, which were further integrated into E-commerce applications</ListItem>
                            <ListItem>Developed a state-approved integration with the Metrc track and trace system</ListItem>
                            <ListItem>Designed, documented and implemented company policies for IT and cybersecurity</ListItem>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className="resume-panel">
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>
                            <Chip label="2019 - Present" /><h3 className="resume-heading">Senior Full Stack Developer at Alpha Ori</h3>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <ListItem>Completed features and resolved bugs in Angular and Node.js for an enterprise-grade maritime IoT system</ListItem>
                            <ListItem>Lead a push to increase code coverage and establish a robust testing culture</ListItem>
                            <ListItem>Assisted DevOps team in resolving issues that reduced install time by hours and days per installation, resulting in massive cost savings</ListItem>
                            <ListItem>Lead and collaborated with teams in India and Singapore to support international business efforts</ListItem>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </Layout>
    )
}

export default Resume
