/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./@/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "semi-transparent": "rgba(255, 255, 255, 0.0619)",
        "off-transparent": "rgba(255, 255, 255, 0.619)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        appear: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        grow: {
          from: {
            scale: "0.90",
          },
          to: {
            scale: "1",
          },
        },
        "slide-up": {
          from: {
            translateY: "5px",
          },
          to: {
            translateY: "0px",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        showup:
          "appear 1.8s ease-out 500ms forwards, grow 800ms ease-out 500ms forwards",
        "showup-1s": "appear 1.8s ease-out 1s forwards",
        "appear-up":
          "appear 1s linear 1s forwards, slide-up 1s cubic-bezier(.24, .77, .48, .94) 1s forwards",
        "fade-in-2s": "appear 2s ease-in-out",
      },
      transitionTimingFunction: {
        spring:
          "linear(0, 0.01, 0.04 1.6%, 0.161 3.3%, 0.816 9.4%, 1.046, 1.189 14.4%, 1.231, 1.254 17%, 1.259, 1.257 18.6%, 1.236, 1.194 22.3%, 1.057 27%, 0.999 29.4%, 0.955 32.1%, 0.942, 0.935 34.9%, 0.933, 0.939 38.4%, 1 47.3%, 1.011, 1.017 52.6%, 1.016 56.4%, 1 65.2%, 0.996 70.2%, 1.001 87.2%, 1)",
      },
      gridTemplateRows: {
        "main-layout": "auto 1fr auto",
      },
      spacing: {
        30: "7.75rem",
      },
      height: {
        dvh: "100dvh",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
