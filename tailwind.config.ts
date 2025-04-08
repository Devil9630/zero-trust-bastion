
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cybersecurity theme colors
				cyber: {
					'dark': '#0f1523',
					'darker': '#080d16',
					'blue': '#0c8fff',
					'blue-glow': '#00a8ff',
					'purple': '#9b30ff',
					'purple-glow': '#a64dff',
					'teal': '#00ffd5',
					'teal-glow': '#80ffe5'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(100%) blur(0px)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(150%) blur(1px)'
					}
				},
				'text-glitch': {
					'0%, 100%': { 
						clip: 'rect(0, 9999px, 0, 0)'
					},
					'10%': {
						clip: 'rect(0, 9999px, 10px, 0)'
					},
					'20%': {
						clip: 'rect(0, 9999px, 20px, 0)'
					},
					'30%': {
						clip: 'rect(0, 9999px, 5px, 0)'
					}
				},
				'scanner': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '0% 100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'text-glitch': 'text-glitch 3s linear infinite',
				'scanner': 'scanner 1.5s ease-in-out infinite'
			},
			backgroundImage: {
				'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='rgba(0, 168, 255, 0.15)' stroke-width='1' d='M10,10 L90,10 M10,25 L90,25 M10,40 L90,40 M10,55 L90,55 M10,70 L90,70 M10,85 L90,85 M25,10 L25,90 M40,10 L40,90 M55,10 L55,90 M70,10 L70,90 M85,10 L85,90'/%3E%3C/svg%3E\")",
				'cyber-gradient': 'linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(155, 48, 255, 0.1) 100%)',
				'glowing-border': 'linear-gradient(90deg, rgba(0, 168, 255, 0) 0%, rgba(0, 168, 255, 0.8) 50%, rgba(0, 168, 255, 0) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
