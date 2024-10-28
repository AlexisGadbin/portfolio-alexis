import { twMerge } from 'tailwind-merge'

type BlurBallProps = {
  className?: string
  top?: string
  right?: string
}
const BlurBall = (props: BlurBallProps) => {
  const { className, top, right } = props

  return (
    <div
      className={twMerge('size-96 absolute -z-10 bg-primary-700/30 blur-[999px]', className)}
      style={{
        top: top || '50%',
        right: right || '50%',
      }}
    />
  )
}

export default BlurBall

