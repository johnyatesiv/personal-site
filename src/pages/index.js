import React from 'react'
import { Link } from 'gatsby'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Headshot from '../images/forest_headshot.jpg';

import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import './styles/index.scss';

const IndexPage = () => (
    <Layout>
        <SEO title='About me' />
        <div>
            <Card id="index-card" className="fadein-2">
                <CardContent id="index-card-content" className="fadein-2">
                    <CardMedia id="index-card-media">
                        <img id="headshot-image" src={Headshot} className="fadein-5"></img>
                    </CardMedia>
                    <Typography>
                        <p>
                            <h2>Hey there!</h2> I'm John Yates and I'm a full stack Javascript developer with experience managing teams in Agile environments.
                            <br/>
                            My career has mostly revolved around startups in the San Diego area, and
                            I enjoy working on exciting projects using cutting edge technology.
                            <br/>
                            I'm always looking to learn new things and I'm interested in networking and checking out new projects.
                            <br/>
                            If you have an interesting project and need people involved, feel free to reach out!
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </Layout>
)

export default IndexPage
