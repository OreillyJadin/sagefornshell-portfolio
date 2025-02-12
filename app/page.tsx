import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

