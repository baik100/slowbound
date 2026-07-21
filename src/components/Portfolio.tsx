import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { X, Plus } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image?: string // 실제 썸네일 이미지 URL. 없으면 placeholder로 표시됩니다.
  link?: string // 실제 프로젝트 URL. 있으면 팝업 이미지 클릭 시 새 창으로 이동합니다.
}

const INITIAL_COUNT = 6

// TODO: title/category/description을 실제 프로젝트 정보로 교체해주세요.
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: '업성 푸르지오 레이크시티', category: '부동산·분양', description: '아파트 분양 홈페이지로, 단지 전경과 입지 정보를 신뢰감 있게 전달하는 데 집중했습니다.', image: '/portfolio/01.png', link: 'https://slowbound00001.imweb.me/' },
  { id: '2', title: 'Circle Pilates', category: '피트니스 브랜드', description: '필라테스 브랜드의 감각적인 무드를 살려, 이미지 중심의 그리드 레이아웃으로 구성했습니다.', image: '/portfolio/02.png', link: 'https://bcy072955000.imweb.me/' },
  { id: '3', title: 'Atelier Loom', category: '클래스 스튜디오', description: '프리미엄 실전 클래스 스튜디오를 위한 다크 톤의 감각적인 브랜드 홈페이지입니다.', image: '/portfolio/03.png', link: 'https://slowbound00003.imweb.me/' },
  // TODO: 워크플로우 링크 확인 필요 — 말씀해주신 표시 URL(00002)과 실제 링크(00001)가 서로 달라서 우선 00002로 넣어뒀어요.
  { id: '4', title: 'Workflow', category: 'SaaS·서비스 소개', description: '업무관리 서비스 소개 페이지로, 깔끔한 레이아웃과 명확한 정보 전달을 목표로 제작했습니다.', image: '/portfolio/04.png', link: 'https://slowbound00002.imweb.me/' },
  { id: '5', title: 'GRANFORET', category: '부동산·분양', description: '아파트 분양 홈페이지로, 단지 전경과 입지 정보를 신뢰감 있게 전달하는 데 집중했습니다.', image: '/portfolio/05.png', link: 'https://slowbound00004.imweb.me/' },
  { id: '6', title: '준비중', category: '개인 포트폴리오', description: '상세 내용은 준비 중입니다. 곧 업데이트될 예정이에요.' },
  { id: '7', title: '준비중', category: '카페 브랜드', description: '상세 내용은 준비 중입니다. 곧 업데이트될 예정이에요.' },
  { id: '8', title: '준비중', category: '교육 서비스', description: '상세 내용은 준비 중입니다. 곧 업데이트될 예정이에요.' },
]

function PortfolioCard({ item, delay, onClick }: { item: PortfolioItem; delay: number; onClick: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#151515] text-left transition-all duration-300 hover:ring-1 hover:ring-accent/60"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-noise opacity-[0.2]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-600 text-xs sm:text-sm tracking-[0.2em] uppercase">
              Coming soon
            </span>
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-primary text-sm sm:text-base font-semibold">{item.title}</p>
        <p className="text-gray-300 text-xs sm:text-sm mt-0.5">{item.category}</p>
      </div>
    </motion.button>
  )
}

export default function Portfolio() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const visibleItems = PORTFOLIO_ITEMS.slice(0, visibleCount)
  const hasMore = visibleCount < PORTFOLIO_ITEMS.length

  return (
    <section id="portfolio" className="bg-black py-16 sm:py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={[
              { text: '결이 다른 브랜드들의', className: 'text-gray-500 font-normal' },
              { text: '홈페이지를 만들었습니다.', className: 'text-primary font-normal' },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {visibleItems.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              delay={(i % 3) * 0.1}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              onClick={() => setVisibleCount(PORTFOLIO_ITEMS.length)}
              className="group inline-flex items-center gap-2 bg-accent text-black text-xs sm:text-sm font-medium rounded-full px-6 py-3 transition-transform duration-300 hover:scale-105"
            >
              더보기
              <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/80" />
            <motion.div
              className="relative bg-[#101010] rounded-2xl max-w-lg w-full p-6 sm:p-8"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-500 hover:text-accent transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              {selected.image ? (
                selected.link ? (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/img block relative"
                  >
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="aspect-video w-full rounded-xl object-cover transition-opacity duration-300 group-hover/img:opacity-80"
                    />
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/30 rounded-xl">
                      <span className="text-white text-xs sm:text-sm font-medium bg-black/70 px-4 py-2 rounded-full">
                        사이트 방문하기 ↗
                      </span>
                    </span>
                  </a>
                ) : (
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                )
              ) : (
                <div className="aspect-video rounded-xl bg-[#1a1a1a] bg-noise opacity-90 flex items-center justify-center">
                  <span className="text-gray-600 text-xs uppercase tracking-[0.2em]">
                    Thumbnail placeholder
                  </span>
                </div>
              )}

              <p className="text-accent text-xs sm:text-sm uppercase tracking-[0.15em] mt-5">
                {selected.category}
              </p>
              <h3 className="text-primary text-xl sm:text-2xl font-medium mt-2">
                {selected.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                {selected.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
