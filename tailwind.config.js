/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                tech: {
                    100: '#EFF9FF',
                    200: '#ace4fd',
                    300: '#6BD1FF',
                    400: '#3fbaf3',
                    500: '#1875E8',
                    800: '#0a3163',
                    900: '#041833',
                },
                dark: {
                    800: '#1e2a36',
                },
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'dark-pattern': 'url("/bg-pattern-dark.webp")',
                'light-pattern': 'url("/bg-pattern-light.png")',
            },
            keyframes: {
                'slide-down': {
                    '0%': { transform: 'translateY(-100%)'},
                    '100%': { transformm: 'translateY(0)' }
                },
            },
            animation: {
                'slide-down': 'slide-down .25s ease-out',
            }
        },
    },
    plugins: [],
    darkMode: 'class',
}

