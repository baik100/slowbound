import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
  staggerDelay?: number
}

export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLast && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
              )}
              {!isLast && '\u00A0'}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
