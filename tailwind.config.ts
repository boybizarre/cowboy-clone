import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        roboto: ['var(--font-roboto)'],
        sand: ['var(--font-sand)'],
        rale : ['var(--font-raleway)'],
      },
      screens : {
        'xs': '400px',
        // => @media (min-width: 500px) { ... }
  
        'sm': '600px',
          // => @media (min-width: 600px) { ... }
    
        'md': '768px',
          // => @media (min-width: 768px) { ... }
    
        'lg': '992px',
          // => @media (min-width: 992px) { ... }  
    
        'xl': '1024px',
          // => @media (min-width: 1024px) { ... }
    
        '2xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
        '3xl': '1536px',
          // => @media (min-width: 1536px) { ... }
      } , 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config