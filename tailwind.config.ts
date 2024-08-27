import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        lightBlue: '#C4ECFC',
        semiBlue: '#00A8F0',
        darkBlue: '#0072BB',
        red: '#D43216',
        gray: '#707070',
      },
      fontFamily: {
        mainGilroy: ['Gilroy', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        discountBoxShadow: '0px 0px 10px #00000021',
      },
    },
  },
  plugins: [],
};
export default config;
