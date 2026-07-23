/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAF7F2",
          raised: "#FFFFFF"
        },
        ink: {
          DEFAULT: "#14171C",
          muted: "#5B6169",
          onDeep: "#F4F1EA"
        },
        accent: {
          DEFAULT: "#FF5A36",
          soft: "#FFE4DB",
          deep: "#E8431F"
        },
        deep: {
          DEFAULT: "#12181F",
          raised: "#1B222B"
        },
        line: "#E4DFD4",
        lineDeep: "rgba(244,241,234,0.12)",
        success: "#3F7A57"
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"]
      },
      backgroundImage: {
        "dot-texture":
          "radial-gradient(circle, rgba(20,23,28,0.09) 1px, transparent 1px)"
      },
      backgroundSize: {
        dots: "22px 22px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        drawIn: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.8s infinite linear"
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,17,10,0.04), 0 12px 32px -12px rgba(20,17,10,0.12)",
        cardHover: "0 4px 8px rgba(20,17,10,0.06), 0 24px 48px -16px rgba(20,17,10,0.18)",
        glowAccent: "0 0 0 1px rgba(255,90,54,0.12), 0 16px 40px -12px rgba(255,90,54,0.35)"
      }
    }
  },
  plugins: []
};
