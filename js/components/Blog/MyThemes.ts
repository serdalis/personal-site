import {grey} from '@mui/material/colors';

const MyTheme = {
    palette: {
        type: 'light',
        primary: {
            main: grey[900],
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
