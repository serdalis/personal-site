import * as React from 'react';
import Grid from '@mui/material/Grid';
import Markdown from './Markdown';
import {grey} from '@mui/material/colors';
import styled from '@emotion/styled';
import {Paper, Typography} from '@mui/material';
import {nanoid} from 'nanoid';
import {useTheme} from '@mui/material';

interface MainProps {
    posts: ReadonlyArray<string>;
    title: string;
}

const fetchContent = async (url: string): Promise<string> => {
    const content = await fetch(url).then((response) => response.text());
    return content;
};

const Main = (props: MainProps) => {
    const theme = useTheme();
    const {posts, title} = props;
    const [postContent, setPostContent] = React.useState([]);

    React.useEffect(() => {
        posts.map((post) => fetchContent(post).then((content) => setPostContent((state) => [...state, content])));
    }, [posts]);

    const NicePaper = styled(Paper)`
        padding: 1rem;
        margin-bottom: 3rem;
    `;

    const NiceHeadingPaper = styled(Paper)`
        padding: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    `;

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            {/*<NiceHeadingPaper>
                <Typography variant='h3'>{title}</Typography>
            </NiceHeadingPaper>*/}
            {postContent.map((post) => (
                <NicePaper key={nanoid()} elevation={3}>
                    <Markdown className="markdown">{post}</Markdown>
                </NicePaper>
            ))}
        </Grid>
    );
};

export default Main;
