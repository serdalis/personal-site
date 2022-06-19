import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';
import {useTheme} from '@mui/material';

interface SidebarProps {
    archives: ReadonlyArray<{
        url: string;
        title: string;
    }>;
    description: string;
    social: ReadonlyArray<{
        icon: React.ElementType;
        name: string;
        url: string;
    }>;
    title: string;
}

export default function Sidebar(props: SidebarProps) {
    const theme = useTheme();
    const {archives, description, social, title} = props;

    const NicePaper = styled(Paper)`
        padding: 1rem;
        margin-bottom: 3rem;
        background-color: ${theme.palette.background.paper};
    `;

    return (
        <Grid item xs={12} md={4}>
            <NicePaper elevation={3}>
                <Typography variant="h5" color="primary" gutterBottom>
                    {title}
                </Typography>
                <Typography color="primary">{description}</Typography>
            </NicePaper>
            <NicePaper elevation={3}>
                <Typography variant="h5" color="primary" gutterBottom>
                    Archives
                </Typography>
                {archives.map((archive) => (
                    <Link display="block" variant="body1" color="secondary" href={archive.url} key={archive.title}>
                        {archive.title}
                    </Link>
                ))}
            </NicePaper>
            <NicePaper elevation={3}>
                <Typography variant="h5" color="primary" gutterBottom>
                    Social
                </Typography>
                {social.map((network) => (
                    <Link
                        display="block"
                        variant="body1"
                        color="secondary"
                        href={network.url}
                        key={network.name}
                        sx={{mb: 0.5}}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <network.icon />
                            <span>{network.name}</span>
                        </Stack>
                    </Link>
                ))}
            </NicePaper>
        </Grid>
    );
}
