import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import WordsPullUp from './WordsPullUp'

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section id="hero" className="h-screen w-full p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video — TODO: 실제 슬로우바운드 포트폴리오 영상/작업 화면으로 교체하세요 */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <Navbar />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
          <div className="grid grid-cols-12 items-end gap-4">
            {/* Heading */}
            <div className="col-span-8">
              <h1
                className="text-[15vw] sm:text-[14vw] md:text-[13vw] lg:text-[12vw] xl:text-[11.5vw] 2xl:text-[12vw] font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="Slowbound" showAsterisk />
              </h1>
            </div>

            {/* Description + CTA */}
            <div className="col-span-4 pb-2 sm:pb-4 md:pb-6 flex flex-col gap-4 sm:gap-6">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: customEase }}
              >
                슬로우바운드는 브랜드가 가진 결을 그대로 담아내는 홈페이지를 디자인하는
                1인 스튜디오입니다. 아임웹 플랫폼 위에서 브랜드의 속도와 톤에 맞춰,
                천천히 그러나 확실하게 완성도를 쌓아갑니다.
              </motion.p>

              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 w-fit transition-all duration-300 hover:gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: customEase }}
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  제작문의
                </span>
                <span className="bg-accent rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
