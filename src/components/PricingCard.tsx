import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

interface PricingCardProps {
  tier: string
  tagline: string
  price: string
  items: string[]
  recommended?: boolean
  delay: number
}

export default function PricingCard({
  tier,
  tagline,
  price,
  items,
  recommended = false,
  delay,
}: PricingCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col h-full rounded-2xl p-6 sm:p-7 bg-black border border-accent text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {recommended && (
        <span className="absolute -top-3 left-6 bg-accent text-black text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium">
          가장 많이 찾는 구성
        </span>
      )}

      <p className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.15em]">{tier}</p>
      <h3 className="text-lg sm:text-xl font-medium mt-2 text-white group-hover:text-black transition-colors duration-300">
        {tagline}
      </h3>
      <p className="text-2xl sm:text-3xl font-medium mt-4 text-white group-hover:text-black transition-colors duration-300">
        {price}
      </p>

      <ul className="flex flex-col gap-2.5 mt-6 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
            <span className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm mt-6 sm:mt-8 w-fit font-medium text-accent group-hover:text-black transition-colors duration-300"
      >
        제작문의
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5"
          style={{ transform: 'rotate(-45deg)' }}
        />
      </a>
    </motion.div>
  )
}
