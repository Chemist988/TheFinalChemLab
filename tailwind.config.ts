
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
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
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
				// Chemistry-specific colors
				chemistry: {
					'alkali-metal': 'hsl(var(--chemistry-alkali))',
					'alkaline-earth-metal': 'hsl(var(--chemistry-alkaline))',
					'transition-metal': 'hsl(var(--chemistry-transition))',
					'post-transition-metal': 'hsl(var(--chemistry-post-transition))',
					'metalloid': 'hsl(var(--chemistry-metalloid))',
					'nonmetal': 'hsl(var(--chemistry-nonmetal))',
					'halogen': 'hsl(var(--chemistry-halogen))',
					'noble-gas': 'hsl(var(--chemistry-noble-gas))',
					'lanthanide': 'hsl(var(--chemistry-lanthanide))',
					'actinide': 'hsl(var(--chemistry-actinide))',
					'unknown': 'hsl(var(--chemistry-unknown))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'reaction': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'25%': { transform: 'scale(1.2) rotate(5deg)' },
					'50%': { transform: 'scale(1.5) rotate(-5deg)' },
					'75%': { transform: 'scale(1.2) rotate(5deg)' },
					'100%': { transform: 'scale(1) rotate(0deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'rise': {
					'0%': { transform: 'translateY(0)', opacity: '0.8' },
					'100%': { transform: 'translateY(-100px)', opacity: '0' }
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
				},
				'explosion-particle': {
					'0%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
					'100%': { transform: 'translate(var(--x, 50px), var(--y, -50px)) scale(0)', opacity: '0' }
				},
				'gas-rise': {
					'0%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
					'100%': { transform: 'translateY(-100px) scale(1.5)', opacity: '0' }
				},
				'flame': {
					'0%, 100%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(1.2)' }
				},
				'background-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-subtle': 'bounce-subtle 2s infinite',
				'reaction': 'reaction 1s ease-in-out',
				'fade-in': 'fade-in 0.5s ease-in',
				'rise': 'rise 3s ease-in forwards',
				'shake': 'shake 0.5s ease-in-out',
				'explosion-particle': 'explosion-particle 1s ease-out forwards',
				'gas-rise': 'gas-rise 4s ease-out forwards',
				'flame': 'flame 0.5s ease-in-out infinite',
				'background-pan': 'background-pan 15s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
