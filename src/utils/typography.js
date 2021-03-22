import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  headerFontFamily: ['Lora', 'sans-serif'],
  headerWeight: 700,
  bodyFontFamily: ['Source Sans Pro', 'serif'],
  bodyGray: 50,
  scaleRatio: 2,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
