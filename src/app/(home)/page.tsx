import { SectionButtons } from './components/section-buttons'
import { SectionPresentation } from './components/section-presentation'
import { SectionSocials } from './components/section-socials'

export default function Home() {
  return (
    <main className="w-full max-w-lg space-y-8 px-6">
      <SectionPresentation />

      <SectionButtons />

      <SectionSocials />
    </main>
  )
}
