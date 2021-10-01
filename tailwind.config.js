const defaultTheme = require('tailwindcss/defaultTheme');
const Color = require('color');

const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const black = '#000';
const blue = '#0066ff';
const borderGrey = '#c4c4c4';
const green = '#00c366';
const grey = '#aaa';
const light = '#e5e5e5';
const purple = '#783ce0';
const red = '#ff675e';
const yellow = '#f5e342';

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            xs: ['0.75rem', '0.875rem'],
            sm: ['0.875rem', '1rem'],
            base: ['1.125rem', '2rem'],
            lg: ['1.5rem', '1.75rem'],
            xl: ['2rem', '2.3125rem'],
        },
        extend: {
            colors: {
                black: {
                    transparent: alpha(black, 0.1),
                    light: lighten(black, 0.1),
                    DEFAULT: black,
                    boxShadow: alpha(black, 0.15),
                },
                blue: {
                    light: lighten(blue, 0.1),
                    DEFAULT: blue,
                    dark: darken(blue, 0.1),
                },
                border: {
                    DEFAULT: borderGrey,
                },
                green: {
                    light: lighten(green, 0.1),
                    DEFAULT: green,
                    dark: darken(green, 0.1),
                },
                grey: {
                    transparent: alpha(grey, 0.1),
                    light: lighten(grey, 0.1),
                    DEFAULT: grey,
                    dark: darken(grey, 0.1),
                },
                light: {
                    DEFAULT: light,
                    dark: darken(light, 0.1),
                },
                purple: {
                    light: lighten(purple, 0.1),
                    DEFAULT: purple,
                    dark: darken(purple, 0.1),
                },
                red: {
                    light: lighten(red, 0.1),
                    DEFAULT: red,
                    dark: darken(red, 0.1),
                },
                yellow: {
                    light: lighten(yellow, 0.1),
                    DEFAULT: yellow,
                    dark: darken(yellow, 0.1),
                },
            },
            spacing: {
                13: '3.25rem',
                15: '3.75rem',
                ...defaultTheme.spacing,
            },
            boxShadow: {
                companyLogo: `0px 4px 20px ${alpha(black, 0.1)}`,
                ...defaultTheme.boxShadow,
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: [],
};
