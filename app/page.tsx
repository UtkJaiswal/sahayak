import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { CoreFeatures } from "@/components/core-features"
import { DummyFeatures } from "@/components/dummy-features"
import { DashboardPreview } from "@/components/dashboard-preview"
import { HowItWorks } from "@/components/how-it-works"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <CoreFeatures />
        <DummyFeatures />
        <DashboardPreview />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
