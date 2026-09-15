/** @type {import('tailwindcss').Config} */
const resumeScaleClasses = [];
const resumeScaleUtilities = {
  gap: [30],
  'gap-x': [5, 10, 15, 20, 30, 60],
  'gap-y': [20],
  h: [2, 5, 10, 30, 35],
  w: [1, 10],
  mt: [15],
  mb: [10],
  '-ml': [10],
  ml: [3, 10],
  mx: [10],
  my: [10, 15],
  pl: [20],
  px: [7],
  py: [3],
  text: [13, 16],
  leading: [30],
};
const resumeScaleLgUtilities = {
  text: [15, 18, 20, 30],
  gap: [30],
  h: [10],
  w: [10],
  ml: [10],
  mx: [15, 20],
  pl: [20],
};

for (const scale of [1, 0.55]) {
  for (const [utility, values] of Object.entries(resumeScaleUtilities)) {
    for (const value of values) {
      resumeScaleClasses.push(`${utility}-[${scale * value}px]`);
    }
  }
  for (const [utility, values] of Object.entries(resumeScaleLgUtilities)) {
    for (const value of values) {
      resumeScaleClasses.push(`lg:${utility}-[${scale * value}px]`);
    }
  }
}

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,json}',
    './public/**/*.{html,js,jsx,ts,tsx,json}',
  ],
  safelist: [
    // Values assembled at runtime in SkillNew and Resume/CV_ATS.
    'from-[-25%]',
    'to-[125%]',
    'to-[100%]',
    'from-[-76%]',
    'to-[76%]',
    'from-[-100%]',
    'to-[200%]',
    'from-[-150%]',
    'to-[150%]',
    'from-[-200%]',
    'from-[#2af598]',
    'to-[#009efd]',
    'from-[#f9f586]',
    'to-[#43e97b]',
    'from-[#F7B500]',
    'to-[#6DD400]',
    'from-[#00f2fe]',
    'to-[#b721ff]',
    'gap-[80px]',
    'py-[80px]',
    'w-[50px]',
    'text-[24px]',
    ...resumeScaleClasses,
    // Non-arbitrary utility classes assembled from the print scale.
    'leading-8',
    'mb-4',
    'pl-5',
    'mx-2',
    'mx-4',
    'w-6',
    'h-6',
    'w-[1px]',
    // Resume color controls allow these finite Tailwind color/depth pairs.
    {
      pattern:
        /^(bg|text|border)-(red|orange|yellow|lime|sky|blue|purple|emerald)-(0|100|200|300|400|500|600|700|800|900)$/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(1deg, #092da1, #4589f1, #c1c3ff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
    require('@tailwindcss/aspect-ratio'),
  ],
};
