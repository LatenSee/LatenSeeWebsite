import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Setup } from '@/components/Setup';
import { Team } from '@/components/Team'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Setup />
        <CallToAction />
        <Team />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
