/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class', 'media'],
    content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
   theme: {
   	extend: {
   		borderRadius: {
   			lg: 'var(--radius)',
   			md: 'calc(var(--radius) - 2px)',
   			sm: 'calc(var(--radius) - 4px)'
   		},
   		colors: {
   			background: 'hsl(var(--background))',
   			foreground: 'hsl(var(--foreground))',
   			border: 'hsl(var(--border))',
   			ring: 'hsl(var(--ring))',
   			muted: {
   				DEFAULT: 'hsl(var(--muted))',
   				foreground: 'hsl(var(--muted-foreground))'
   			},
   			primary: {
   				DEFAULT: 'hsl(var(--primary))',
   				foreground: 'hsl(var(--primary-foreground))'
   			},
   			secondary: {
   				DEFAULT: 'hsl(var(--secondary))',
   				foreground: 'hsl(var(--secondary-foreground))'
   			},
   			accent: {
   				DEFAULT: 'hsl(var(--accent))',
   				foreground: 'hsl(var(--accent-foreground))'
   			},
   			destructive: {
   				DEFAULT: 'hsl(var(--destructive))',
   				foreground: 'hsl(var(--destructive-foreground))'
    			}
    		}
     	}
    },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    preflight: true,
  },
}

