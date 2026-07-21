import { Helmet } from "react-helmet-async";

import Hero from './components/Hero'
import About from './components/About'
import Review from './components/Review'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Helmet>
        <title>슬로우바운드 | 브랜드가 기억되는 홈페이지 제작</title>

        <meta
          name="description"
          content="브랜드가 기억되는 홈페이지를 제작합니다. 랜딩페이지, 기업 홈페이지, 웹디자인 전문."
        />

        <meta
          name="keywords"
          content="홈페이지 제작, 랜딩페이지, 웹디자인, UIUX, 슬로우바운드"
        />

        <meta property="og:title" content="슬로우바운드" />

        <meta
          property="og:description"
          content="브랜드가 기억되는 홈페이지 제작"
        />
      </Helmet>

      <div className="bg-black">
        <Hero />
        <About />
        <Review />
        <Service />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default App