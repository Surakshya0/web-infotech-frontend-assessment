import {
  Categories,
  Cta,
  Faq,
  FeaturedServices,
  Footer,
  Header,
  Hero,
  HowItWorks,
} from './components/sections'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedServices />
        <HowItWorks />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
