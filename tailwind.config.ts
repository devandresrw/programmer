import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "glass-bg": "rgba(255, 255, 255, 0.02)",
        "border-color": "rgba(255,255,227,0.4)",
      },
      boxShadow: {
        "sha-btn": "0 4px 30px rgba(0,0,0,0.1)",
      },
      backdropBlur: {
        "custom-blur": "6.6px",
      },
      fontFamily: {
        "rale": ["Raleway", "sans-serif"],
        "jura": ["Jura", "sans-serif"],

      },
      backgroundImage: {
        'vignette': 'radial-gradient(circle, rgba(63,94,251,0) 0%, rgba(17,11,11,0.9724264705882353) 100%)',
      }
    },
  },
  plugins: [],
};
export default config;

/*



  -webkit-backdrop-filter: blur(var(--blur));
  backdrop-filter: blur(var(--blur));
  --r: max(var(--transition-length), calc(var(--radius) - var(--inset)));
  --corner-size: calc(var(--r) + var(--inset)) calc(var(--r) + var(--inset));
  --corner-gradient: transparent 0px,
    transparent calc(var(--r) - var(--transition-length)), black var(--r);
  --fill-gradient: black, black var(--inset),
    transparent calc(var(--inset) + var(--transition-length)),
    transparent calc(100% - var(--transition-length) - var(--inset)),
    black calc(100% - var(--inset));
  --fill-narrow-size: calc(100% - (var(--inset) + var(--r)) * 2);
  --fill-farther-position: calc(var(--inset) + var(--r));
  -webkit-mask-image: linear-gradient(to right, var(--fill-gradient)),
    linear-gradient(to bottom, var(--fill-gradient)),
    radial-gradient(at bottom right, var(--corner-gradient)),
    radial-gradient(at bottom left, var(--corner-gradient)),
    radial-gradient(at top left, var(--corner-gradient)),
    radial-gradient(at top right, var(--corner-gradient));
  -webkit-mask-size: 100% var(--fill-narrow-size), var(--fill-narrow-size) 100%,
    var(--corner-size), var(--corner-size), var(--corner-size),
    var(--corner-size);
  -webkit-mask-position: 0 var(--fill-farther-position), var(--fill-farther-position) 0,
    0 0, 100% 0, 100% 100%, 0 100%;
  -webkit-mask-repeat: no-repeat;
}
  
*/