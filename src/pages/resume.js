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

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

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
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>2013 - 2016 | Lead Developer/Co-founder at Locbit</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            <ListItem>Managed teams of up to six developers, implementing Agile</ListItem>
                            <ListItem>Developed and maintained a UI using Angular.js and Bootstrap</ListItem>
                            <ListItem>Architected and implemented a highly scalable API in Node.js capable of protocol agnostic automation of lighting, HVAC, access control and risk management systems</ListItem>
                            <ListItem>Designed and implemented a flexible UI for visualizing control of large buildings</ListItem>
                            <ListItem>Developed, tested and deployed a commercial IoT solution in conjunction with Panasonic CPBD</ListItem>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>2016 - Present | Freelance Consulting</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            <ListItem>Completed numerous industrial automation jobs to save energy in large spaces</ListItem>
                            <ListItem>Worked with a Title 24 certified inspector to ensure automations were up to code</ListItem>
                            <ListItem>Completed a variety of projects as a freelancer in LAMP, MERN and other tech stacks</ListItem>
                            <ListItem>Notable project:  <a href="http://uftmachine.com"> UFTMachine</a>, a teaching tool for the fine-tuned universe concept</ListItem>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>2017 - 2019 | Lead Developer at Driven</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <ListItem>Headed the technology department at a publicly traded company (OTC:DRVD)</ListItem>
                            <ListItem>Managed teams for product development in LAMP and MERN stacks</ListItem>
                            <ListItem>Developed microservices and APIs in Node.js with Express and Polka routing frameworks</ListItem>
                            <ListItem>Designed and developed E-commerce shops on WooCommerce and Shopify</ListItem>
                            <ListItem>Developed a logistics platform with a React.js frontend and Node.js backend with support from scalable Node.js microservices, which were further integrated into E-commerce applications</ListItem>
                            <ListItem>Developed a state-approved integration with the Metrc track and trace system</ListItem>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>2019 - Present | Senior Full Stack Developer at Alpha Ori</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <ListItem>Completed features and resolved bugs in Angular, Node.js for an enterprise-grade maritime IoT system</ListItem>
                            <ListItem>Lead a push to increase code coverage and establish a robust testing culture</ListItem>
                            <ListItem>Assisted DevOps team in resolving issues that reduced install time by hours and days per installation</ListItem>
                            <ListItem>Lead and collaborated with teams in India and Singapore to support international business efforts</ListItem>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </Layout>
    )
}

export default Resume
