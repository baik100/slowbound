import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import ReviewCard from './ReviewCard'

// TODO: 아래 3개는 형식을 보여드리기 위한 샘플 문구입니다.
// 실제 고객 후기 문구로 교체해서 사용해주세요 (길이는 비슷하게 유지하면 카드가 정렬돼요).
const REVIEWS = [
  {
    industry: '제조업',
    name: '김**대표',
    quote:
      '핸드폰 사진 몇 장만 보내드렸는데 이렇게 깔끔한 홈페이지가 나올 줄 몰랐어요. 거래처에 보여드리기 한결 좋아졌습니다.',
  },
  {
    industry: '스킨케어 브랜드',
    name: '이**대표',
    quote:
      '브랜드 톤을 정확히 이해하고 디자인해주셔서 홈페이지와 인스타그램 피드까지 통일감이 생겼어요. 정말 만족스럽습니다.',
  },
  {
    industry: '법률 자문',
    name: '박**대표',
    quote:
      '전문적인 느낌은 유지하면서 부담스럽지 않은 홈페이지를 원했는데, 원하는 톤을 정확히 그대로 만들어주셨어요.',
  },
]

export default function Review() {
  return (
    <section id="review" className="bg-black py-16 sm:py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={[
              { text: '먼저 경험한 분들의', className: 'text-gray-500 font-normal' },
              { text: '진짜 이야기.', className: 'text-primary font-normal' },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {REVIEWS.map((review, i) => (
            <ReviewCard
              key={review.name}
              industry={review.industry}
              name={review.name}
              quote={review.quote}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
