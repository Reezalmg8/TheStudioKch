'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {Header} from "@/components/ui/header"

const services = [
  {
    number: "01",
    title: "social media & branding consultation",
    description: "Revamp your brand with our expert social media and branding consultations. Our team uses detailed strategies backed by thorough discussions and research on competitors and concepts. Our objective is to provide deeper insight to clients & create winning tactics for your products and services to help you achieve your goals.",
    image: "/social-media.jpg"
  },
  {
    number: "02",
    title: "facebook paid advertising",
    description: "Achieve your desired ROI with our data-driven paid social media advertising services. Let us help you develop a targeted strategy that delivers real results, whether you're aiming to gain more followers, increase donations, or achieve any other goals.",
    image: "/facebook-ads.jpg"
  },
  {
    number: "03",
    title: "video & photography production",
    description: "Capture your story with our professional video and photography production services. From stunning visuals to compelling narratives, we bring your vision to life with creativity and expertise.",
    image: "/production.jpg"
  },
  {
    number: "04",
    title: "digital marketing campaigns",
    description: "Discover the world of digital marketing, where businesses are transformed through innovative strategies. We specialize in creating comprehensive campaigns across multiple platforms including websites, social media, email, and more.",
    image: "/digital-marketing.jpg"
  },
  {
    number: "05",
    title: "content creating & copywriting",
    description: "Our content creation services span text and posts, producing seamless flow among different social media and posts. We provide tons of content, engaging stories and posts that resonate with your target audience and relevant to you and your target audience.",
    image: "/content-creation.jpg"
  }
]

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-[#85a3b0] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          our services
        </motion.h1>

        <div className="max-w-5xl mx-auto space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start pb-12 border-b border-gray-200">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-light text-[#4a90e2]">
                      {service.number}
                    </span>
                    <h2 className="text-2xl font-semibold text-[#85a3b0]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-[#85a3b0] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="w-full lg:w-80 h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={320}
                    height={192}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-24 relative rounded-3xl overflow-hidden">
          <Image
            src="/desk-setup.jpg"
            alt="Desk setup with coffee and plant"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              we do everything social
            </h2>
            <p className="text-white/90 max-w-2xl">
              Our services are delivered to assist and build your business and make sure that it all comes down to an effective strategy.
            </p>
          </div>
        </div>

        <footer className="max-w-5xl mx-auto mt-24 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4a90e2]" />
              <div className="w-8 h-8 bg-[#9b6b9d]" />
              <h3 className="text-3xl font-semibold text-[#85a3b0]">
                get in touch!
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <nav className="space-y-2 ">
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
      </div>
    </main>
  )
}