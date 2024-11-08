import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Team Photo Section */}
        <div className="relative w-full max-w-4xl mx-auto mb-16">
          <Image
            src="/TSteam_enhanced.png"
            alt="The Studio Team"
            width={1200}
            height={600}
            className="w-full rounded-3xl"
          />
        </div>

        {/* Who Are We Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-[#85a3b0] mb-6">who are we?</h1>
          <p className="text-[#85a3b0] text-lg leading-relaxed">
            at the studio, we bring together creative minds to develop top-tier digital solutions. we excel in social media 
            management and specialize in innovative marketing campaigns that drive growth in the kuching market. 
            through our collaborative approach and collective expertise, we turn ideas into impactful realities, 
            delivering exceptional results for our clients.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-[#4a90e2] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h2 className="text-2xl font-semibold">our vision</h2>
            </div>
            <p className="text-white/90">
              to rise to the top of the leaders in digital marketing campaigns across frontiers, using our part 
              in the creative industry.
            </p>
          </div>

          <div className="bg-[#9b6b9d] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M22 4 12 14.01l-3-3" />
              </svg>
              <h2 className="text-2xl font-semibold">our mission</h2>
            </div>
            <p className="text-white/90">
              to establish strong digital presences for businesses in malaysia through our unique perspective 
              and creative solutions.
            </p>
          </div>
        </div>

        {/* Perspective Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#85a3b0] mb-6">it's all about PERSPECTIVE</h2>
          <p className="text-[#85a3b0] text-lg leading-relaxed mb-8">
            Today's digital presence allows us to stand out, not just domestically but internationally as 
            well. amidst the noise of the digital age, exploring attention requires finesse.
          </p>
          <p className="text-[#85a3b0] text-lg leading-relaxed">
            We create content and campaigns that resonate with the market, our decisions are rooted in 
            data-driven results. via more giant steps, we specialize in generating compelling solutions 
            that truly matter. to your audience, backed by evidence that understands our strategy's 
            effectiveness.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-8 bg-[#4a90e2]" />
          <div className="w-8 h-8 bg-[#9b6b9d]" />
          <h3 className="text-2xl font-semibold text-[#85a3b0]">
            get in touch!
          </h3>
        </div>
      </main>
    </div>
  )
}