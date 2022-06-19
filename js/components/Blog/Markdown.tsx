import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {useTheme} from '@mui/material';

const Markdown = (props: any) => {
    const theme = useTheme();

    function MarkdownListItem(props: any) {
        return <Box component="li" sx={{mt: 1, typography: 'body1'}} {...props} />;
    }

    const VisibleLink = styled(Link)`
        color: ${theme.palette.secondary.main};
    `;

    const options = {
        overrides: {
            h1: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h4',
                    component: 'h1',
                    color: 'primary',
                },
            },
            h2: {
                component: Typography,
                props: {gutterBottom: true, variant: 'h6', color: 'primary', component: 'h2'},
            },
            h3: {
                component: Typography,
                props: {gutterBottom: true, color: 'primary', variant: 'subtitle1'},
            },
            h4: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'caption',
                    paragraph: true,
                },
            },
            p: {
                component: Typography,
                props: {paragraph: true, color: 'primary'},
            },
            a: {component: VisibleLink},
            li: {
                component: MarkdownListItem,
            },
        },
    };

    return <ReactMarkdown options={options} {...props} />;
};

export default Markdown;
