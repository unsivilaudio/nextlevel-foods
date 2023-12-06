import type { Config } from 'tailwindcss';

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
        },
    },
    plugins: [],
};
export default config;
