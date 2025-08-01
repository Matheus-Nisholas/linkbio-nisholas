export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scalePulse: 'scalePulse 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};