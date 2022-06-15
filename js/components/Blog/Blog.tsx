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
import Footer from './Footer';
import {post1, post2, post3} from '../../../blogs';
import {Code, LinkedIn} from '@mui/icons-material';
import {MyTheme} from './MyThemes';

const sections = [
    {title: 'General', url: '#'},
    {title: 'Security', url: '#'},
    {title: '.Net', url: '#'},
    {title: 'Random', url: '#'},
];

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
];

const posts = [post1, post2, post3];

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
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Ricky Neil Completely Unfinished Blog" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{mt: 3}}>
                        <Main title="From the firehose" posts={posts} />
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
