import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface ReviewCardProps {
  industry: string
  name: string
  quote: string
  delay: number
}

export default function ReviewCard({ industry, name, quote, delay }: ReviewCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="bg-accent hover:bg-[#00622C] rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,196,87,0.35)]"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Quote className="w-6 h-6 text-black/50" />

      <p className="text-black text-sm sm:text-base leading-relaxed mt-5 flex-1">
        {quote}
      </p>

      <div className="flex items-center justify-between mt-6 pt-5 border-t border-black/15">
        <div>
          <p className="text-black text-sm sm:text-base font-medium">{name}</p>
          <p className="text-black/60 text-xs sm:text-sm mt-0.5">{industry}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
