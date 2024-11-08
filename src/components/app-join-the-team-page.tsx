'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import {Header} from "@/components/ui/header"

const positions = [
  {
    title: "social media account manager",
    description: "Building relationships, managing our clients' social media accounts, creating engaging content to grow the brand's online presence and achieve its objectives.",
    color: "bg-[#4a90e2]"
  },
  {
    title: "marketing strategist",
    description: "Develop and implement data-driven marketing strategies, conducting thorough research and other viable strategies.",
    color: "bg-[#9b6b9d]"
  },
  {
    title: "copywriter",
    description: "Creates compelling written content to captivate and persuade the brand's desired audience.",
    color: "bg-[#4a90e2]"
  },
  {
    title: "production",
    description: "Oversees the creative execution and delivery of media content, ensuring it meets quality standards and deadlines.",
    color: "bg-[#9b6b9d]"
  },
  {
    title: "internships",
    description: "Cultivate practical experience in either the social media, content creation, design, or marketing solutions.",
    color: "bg-[#4a90e2]"
  }
]

export default function JoinTheteam() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-[#85a3b0] mb-2">
              join our team
            </h1>
            <p className="text-[#85a3b0] text-lg">
              positions
            </p>
          </motion.div>

          <div className="space-y-4 mb-16">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${position.color} rounded-full p-6 text-center text-white`}
              >
                <h2 className="text-xl font-semibold mb-2">{position.title}</h2>
                <p className="text-white/90 max-w-2xl mx-auto">{position.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#4a90e2]" />
                <div className="w-4 h-4 bg-[#9b6b9d]" />
              </div>
              <p className="text-[#85a3b0] leading-relaxed">
                We try to strike the best part because the best is never an easy feat. You'll get to unleash ups and downs alongside like-minded people, not only job growth, but the company but growth as an individual.
              </p>
            </div>

            <div className="bg-white rounded-xl">
              <h2 className="text-2xl font-semibold text-[#85a3b0] mb-6">join us today</h2>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="full name"
                  className="border-[#85a3b0] focus:ring-[#4a90e2]"
                />
                <Input
                  type="email"
                  placeholder="email address"
                  className="border-[#85a3b0] focus:ring-[#4a90e2]"
                />
                <Input
                  type="tel"
                  placeholder="phone number"
                  className="border-[#85a3b0] focus:ring-[#4a90e2]"
                />
                <Textarea
                  placeholder="what position are you interested in?"
                  className="border-[#85a3b0] focus:ring-[#4a90e2] min-h-[150px]"
                />
                <Button className="w-full bg-[#4a90e2] hover:bg-[#4a90e2]/90 text-white">
                  apply
                </Button>
              </form>
            </div>
          </div>

          <footer className="mt-24 flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#4a90e2]" />
                <div className="w-8 h-8 bg-[#9b6b9d]" />
                <h3 className="text-3xl font-semibold text-[#85a3b0]">
                  get in touch!
                </h3>
              </div>
              <p className="text-[#85a3b0]">marketing@thestudiokch.com</p>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <nav className="space-y-2">
                <Link href="/" className="block text-[#85a3b0] hover:text-[#4a90e2]">home</Link>
                <Link href="/about-us" className="block text-[#85a3b0] hover:text-[#4a90e2]">about us</Link>
                <Link href="/process" className="block text-[#85a3b0] hover:text-[#4a90e2]">the process</Link>
                <Link href="/portfolio" className="block text-[#85a3b0] hover:text-[#4a90e2]">portfolio</Link>
              </nav>
              <nav className="space-y-2">
                <Link href="https://facebook.com" className="block text-[#85a3b0] hover:text-[#4a90e2]">facebook</Link>
                <Link href="https://instagram.com" className="block text-[#85a3b0] hover:text-[#4a90e2]">instagram</Link>
              </nav>
            </div>
          </footer>

          <div className="mt-8 text-center text-sm text-[#85a3b0]">
            © The Studio Kuching | 2023
          </div>
        </div>
      </div>
    </main>
  )
}