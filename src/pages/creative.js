import React from 'react'
import { Link } from 'gatsby'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import './styles/creative.scss';

const Creative = () => (
    <Layout>
        <SEO title='Creative' />
        <Card className='creative-card'>
            <CardMedia>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    Three.js
                </Typography>
                <Typography type='body2' color='textSecondary' component='p'>
                    Three.js is a great library, I had a ton of fun making all sorts of animations.
                </Typography>
            </CardContent>
        </Card>
        <Card className='creative-card'>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    My Soundcloud
                </Typography>
                <iframe width='100%' height='300' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2142791&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
                <Typography type='body2' color='textSecondary' component='p'>
                    Various mixes and experiments with different VSTs and synthesizers.
                </Typography>
            </CardContent>
        </Card>
        <Card className='creative-card'>
            <CardMedia>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    My folk metal band
                </Typography>
                <iframe style={{border: 0, width: '100%', height: '120px'}} src='https://bandcamp.com/EmbeddedPlayer/album=859832802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/' seamless><a href='http://deirdreanbhroin.bandcamp.com/album/aoibhneas-mac-lir'></a></iframe>
                <Typography type='body2' color='textSecondary' component='p'>
                    Initially started as a way to practice the Irish language, I ended up writing a lot of material.
                </Typography>
            </CardContent>
        </Card>
    </Layout>
)

export default Creative
