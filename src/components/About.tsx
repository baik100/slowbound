import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUp from './WordsPullUp'
import AnimatedLetter from './AnimatedLetter'

const BODY_TEXT = '불필요한 것은 덜어내고 브랜드의 가치를 선명하게 담아냅니다.'

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')
  const totalChars = chars.length

  return (
    <section id="about" className="bg-black py-16 sm:py-24 md:py-32 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-28 text-center">
        <p className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-10">
          Our Message
        </p>

        <p className="italic font-serif text-primary/70 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 sm:mb-8">
          "A website should never outshine the brand behind it."
        </p>

        <div className="max-w-3xl mx-auto leading-[1.1] text-xl sm:text-2xl md:text-3xl">
          <h2 style={{ color: '#ffffff' }} className="font-normal">
            <WordsPullUp text="브랜드가 먼저 기억되는 홈페이지." />
          </h2>
        </div>

        <p
          ref={paragraphRef}
          className="text-[#DEDBC8] text-sm sm:text-base md:text-lg mt-10 sm:mt-14 max-w-2xl mx-auto"
        >
          {chars.map((char, index) => {
            const charProgress = index / totalChars
            return (
              <AnimatedLetter
                key={index}
                char={char}
                scrollYProgress={scrollYProgress}
                start={Math.max(0, charProgress - 0.1)}
                end={Math.min(1, charProgress + 0.05)}
              />
            )
          })}
        </p>
      </div>
    </section>
  )
}
