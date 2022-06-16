import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface MainFeaturedPostProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        linkText: string;
        title: string;
    };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
    const {post} = props;

    return (
        <Paper
            sx={{
                position: 'relative',
                mb: 4,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                backgroundImage: `url(${post.image})`,
            }}
            elevation={3}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{display: 'none'}} src={post.image} alt={post.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: {xs: 3, md: 6},
                            pr: {md: 0},
                        }}
                    >
                        <Typography component="h1" variant="h3" color="primary" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h5" color="primary" paragraph>
                            {post.description}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            {post.linkText}
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}
