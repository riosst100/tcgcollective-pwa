const colors = {
    gray: {
        100: '#E6E9EA',
    },
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
