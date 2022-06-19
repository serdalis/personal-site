import {blue, grey} from '@mui/material/colors';

const MyTheme = {
    palette: {
        type: 'dark',
        primary: {
            main: grey[50],
        },
        secondary: {
            main: blue[400],
        },
        background: {
            paper: '#202938',
        },
        text: {
            secondary: '#6A7382',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
};

export {MyTheme};
