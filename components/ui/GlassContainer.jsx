const STYLES = {
  navbar: 'bg-white/70 backdrop-blur-lg rounded-full w-fit',
  navbarMobile: 'bg-white/70 backdrop-blur-lg rounded-2xl w-full',
  card: 'glass-card w-full',
  panel: 'glass-card w-full',
}

function GlassContainer({ children, preset = 'card', className = '' }) {
  const style = STYLES[preset] || STYLES.card
  return <div className={`${style} ${className}`}>{children}</div>
}

export default GlassContainer
