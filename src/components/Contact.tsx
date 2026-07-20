import { MessageCircle, AtSign, ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const CONTACT_LINKS = [
  {
    label: '카카오톡 채널 문의',
    href: 'https://pf.kakao.com/_iQxhbX/chat',
    icon: MessageCircle,
  },
  {
    label: '인스타그램 @slowbound_',
    href: 'https://www.instagram.com/slowbound_/',
    icon: AtSign,
  },
  {
    label: '크몽에서 보기',
    href: 'https://kmong.com/gig/758073',
    icon: ArrowRight,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20 sm:py-28 md:py-36 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8">
          Contact
        </p>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.95] tracking-[-0.02em]"
          style={{ color: '#E1E0CC' }}
        >
          <WordsPullUp text="프로젝트를 시작해볼까요?" />
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-6 sm:mt-8 max-w-lg mx-auto leading-relaxed">
          브랜드의 이야기를 들려주세요.
          <br />
          남겨주신 내용을 바탕으로,
          <br />
          브랜드에 가장 적합한 홈페이지 방향을 제안드립니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-white/15 rounded-full px-5 py-3 text-primary text-xs sm:text-sm transition-all duration-300 hover:bg-accent hover:border-accent hover:text-black w-full sm:w-auto justify-center"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-[10px] sm:text-xs mt-16 sm:mt-20">
          © {new Date().getFullYear()} SLOWBOUND. 무단 전재 및 재배포를 금지합니다.
        </p>
      </div>
    </section>
  )
}
