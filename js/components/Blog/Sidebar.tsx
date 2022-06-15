import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';
import {useTheme} from '@emotion/react';
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
    `;

    return (
        <Grid item xs={12} md={4}>
            <NicePaper elevation={0}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </NicePaper>
            <NicePaper elevation={0}>
                <Typography variant="h6" gutterBottom>
                    Archives
                </Typography>
                {archives.map((archive) => (
                    <Link display="block" variant="body1" href={archive.url} key={archive.title}>
                        {archive.title}
                    </Link>
                ))}
            </NicePaper>
            <NicePaper elevation={0}>
                <Typography variant="h6" gutterBottom>
                    Social
                </Typography>
                {social.map((network) => (
                    <Link display="block" variant="body1" href={network.url} key={network.name} sx={{mb: 0.5}}>
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
