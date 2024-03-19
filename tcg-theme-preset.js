const colors = {
    gray: {
        100: '#E6E9EA',
        200: '#999999',
        300: '#19222A',
        900: '#292D32',
    },
    blue: {
        600: '#6243FA',
        700: '#4E31DB',
    },
    'darkblue': {
        900: '#280135',
    },
    yellow: {
        200: '#F7C317',
        300: '#FFC501',
    },
    brand: {
        100: '#c2c8ff',
        400: '#3d84ff',
        600: '#2954ff',
        700: '#1f39ff',
        800: '#172bc4',
        'base': '#3d84ff',
        'dark': '#2954ff',
        'darkest': '#172bc4',
        'light': '#c2c8ff',
    }
};

const extend = {
    textColor: theme => ({
        colorDefault: "#1B1B1B", // TODO @TW naming collision: TW puts "fontSize" + "color" under "text-" prefix
        error: theme('colors.red.700'),
        subtle: theme('colors.gray.600'),
        DEFAULT: theme('colors.gray.900')
    }),
    fontFamily: {
        sans: ["Noto Sans", 'sans-serif']
    },
    colors,
    boxShadow: {
        "type-1": "0px 0px 7px 2px rgba(205,205,205,0.25)",
    }
};

const theme = {
    // Preserve Tailwind defaults + extend from this preset.
    extend,
    // Override Tailwind defaults and preset config.
    screens: {
        xs: '1px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        max: '1440px',
    },

    venia: theme => ({
        plugins: {
            body: {
                color: theme('colors.neutral.900')
            },
            root: {
                colors
            }
        }
    })
};

const config = {
    theme,
    variants: {
        extend: {
            backgroundColor: ['checked'],
            backgroundImage: ['focus'],
            borderColor: ['even'],
            borderStyle: ['even'],
            borderWidth: ['even', 'last'],
            boxShadow: ['active'],
            fontWeight: ['first'],
            outline: ['active', 'focus'],
            pointerEvents: ['disabled'],
            textColor: ['disabled', 'first']
        }
    }
};

module.exports = config;
