import { motion, MotionValue, useTransform } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  scrollYProgress: MotionValue<number>
  start: number
  end: number
}

export default function AnimatedLetter({
  char,
  scrollYProgress,
  start,
  end,
}: AnimatedLetterProps) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}
