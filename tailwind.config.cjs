/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: 'var(--c-primary)',
      // primary__dark: '#F17105',
      secondary: 'var(--c-secondary)',
      // secondary__dark: '#ecc94b',
      background: 'var(--c-bg)',
      white: '#ffffff',
      dark: '#282828',
      hover: '#3D3D3D',
      hover__dark: '#3D3D3D',
    }
  },
  plugins: [],
}
