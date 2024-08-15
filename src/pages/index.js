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
          <div className="center-content">
            <h2 className="center-content-item">Hello there</h2>
            <p className="center-content-item">I'm John and I'm a full stack Javascript developer from San Diego.</p>
          </div>
        </div>
    </Layout>
)

export default IndexPage
