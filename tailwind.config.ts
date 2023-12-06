import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,css,html}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', 'Arial', 'sans-serif'],
                display: ['Montserrat', 'Monospace', 'Helvetica'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                {
                    values: theme('textShadow'),
                },
            );
        }),
    ],
};
export default config;
