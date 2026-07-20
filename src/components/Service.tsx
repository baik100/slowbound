import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import PricingCard from './PricingCard'

export default function Service() {
  return (
    <section id="service" className="bg-black py-16 sm:py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 sm:mb-20 md:mb-24">
          <WordsPullUpMultiStyle
            segments={[
              { text: '브랜드의 속도에 맞춘', className: 'text-gray-500 font-normal' },
              { text: '두 가지 제작 방식.', className: 'text-primary font-normal' },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug"
          />
        </div>

        {/* 템플릿형 */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-6 sm:mb-8">
            <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.15em]">
              템플릿형
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5">
              빠르고 합리적으로, 완성도 있는 첫 홈페이지가 필요할 때
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <PricingCard
              tier="STANDARD"
              tagline="지금 바로 시작하는 첫 홈페이지"
              price="150,000원"
              delay={0}
              items={[
                '1페이지 구성 (아임웹 템플릿 기반)',
                '브랜드 컬러·폰트 반영',
                '모바일 반응형 대응',
                '평균 제작 기간 5일 이내',
              ]}
            />
            <PricingCard
              tier="DELUXE"
              tagline="브랜드가 또렷해지는 구성"
              price="350,000원"
              recommended
              delay={0.15}
              items={[
                '메인 + 서브페이지 구성',
                '섹션별 커스텀 레이아웃',
                '기본 인터랙션 요소 추가',
                '문의 폼 연동',
              ]}
            />
            <PricingCard
              tier="PREMIUM"
              tagline="온전히 브랜드다운 완성형"
              price="600,000원"
              delay={0.3}
              items={[
                '풀 페이지 + 상세페이지 구성',
                '커스텀 섹션 자유 배치',
                '고급 인터랙션 요소',
                '오픈 전 우선 검수',
              ]}
            />
          </div>
        </div>

        {/* 맞춤형 */}
        <div>
          <div className="mb-6 sm:mb-8">
            <p className="text-primary text-xs sm:text-sm uppercase tracking-[0.15em]">
              맞춤형
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5">
              브랜드만의 결을 처음부터 함께 설계하고 싶을 때
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <PricingCard
              tier="STANDARD"
              tagline="나만의 결을 담은 시작"
              price="600,000원"
              delay={0}
              items={[
                '브랜드 분석 기반 맞춤 설계',
                '1차 시안 제공',
                '피드백 반영 1회 포함',
                '모바일 반응형 대응',
              ]}
            />
            <PricingCard
              tier="DELUXE"
              tagline="디테일까지 설계하는 프리미엄"
              price="890,000원"
              recommended
              delay={0.15}
              items={[
                '맞춤 UI/UX 설계',
                '마이크로 인터랙션 적용',
                '반응형 세부 최적화',
                '피드백 반영 2회 포함',
              ]}
            />
            <PricingCard
              tier="PREMIUM"
              tagline="브랜드를 새로 짓는 경험"
              price="1,290,000원"
              delay={0.3}
              items={[
                '브랜드 아이덴티티 컨설팅',
                '프리미엄 인터랙션 설계',
                '오픈 후 유지보수 케어',
                '피드백 반영 무제한',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
