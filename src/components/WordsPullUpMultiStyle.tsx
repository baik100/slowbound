import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  containerClassName?: string
  staggerDelay?: number
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  staggerDelay = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  let wordIndex = 0

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(' ')
        return words.map((word, i) => {
          const currentIndex = wordIndex
          wordIndex += 1
          return (
            <span
              key={`${segIdx}-${i}`}
              className="inline-block overflow-hidden align-top mr-[0.28em]"
            >
              <motion.span
                className={`inline-block ${segment.className ?? ''}`}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: currentIndex * staggerDelay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          )
        })
      })}
    </span>
  )
}
