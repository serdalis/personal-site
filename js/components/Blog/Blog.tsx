import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import {post1, post2, post3, post4} from '../../../blogs';
import {Code, LinkedIn} from '@mui/icons-material';
import {MyTheme} from './MyThemes';
import data from '../../data';
import {Paper, Typography} from '@mui/material';
import styled from '@emotion/styled';

const sections = [
    {title: 'General', url: '#'},
    {title: 'Security', url: '#'},
    {title: '.Net', url: '#'},
    {title: 'Random', url: '#'},
];

const mainFeaturedPost = {
    title: 'Welcome to my website!',
    description: "This exists so I have a web presence. It'll impove over time!",
    image: data.star,
    imageText: 'Hero Image',
    linkText: '',
};

const featuredPosts = [
    {
        title: 'Hack The Box',
        date: 'June 16',
        description: 'Hack the box, and now HTB University are my favourite general purpose security learning sites.',
        image: data.htbLogo,
        imageLabel: 'Hack The Box',
        url: 'https://app.hackthebox.com/profile/75264',
    },
    {
        title: 'SecureFlag',
        date: 'June 16',
        description: 'SecureFlag has a great selection of courses to teach developers about secure coding.',
        image: data.secureFlagLogo,
        imageLabel: 'Image Text',
        url: 'https://www.secureflag.com/index.html#home',
    },
];

const posts = [post1, post2, post3, post4];

const sidebar = {
    title: 'About',
    description:
        'Fancy webpage that most developers need, this one is hastily build and heavily underpopulated, but at least theres a rotating star written in webGL back there so thats cool.',
    archives: [{title: 'There is nothing', url: '#'}],
    social: [
        {name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/serdalis'},
        {name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/ricky-neil/'},
        {name: 'StackOverflow', icon: Code, url: 'https://stackoverflow.com/users/958051/serdalis'},
    ],
};

const theme = createTheme(MyTheme);

export default function Blog() {
    const NiceHeadingPaper = styled(Paper)`
        padding: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    `;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Ricky Neil's Unfinished Blog" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    {/*<NiceHeadingPaper>
                        <Typography variant='h3'>Featured Tools</Typography>
                    </NiceHeadingPaper>*/}
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{mt: 3}}>
                        <Main title="Bites of wisdom" posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
}
