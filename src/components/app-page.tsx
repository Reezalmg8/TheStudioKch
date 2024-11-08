'use client'

import { createGlobalStyle } from 'styled-components'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerChildren}
    >
      {children}
    </motion.div>
  )
}

const PartnerLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isAutoplay])

  const handlePrev = () => {
    setIsAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partnerLogos.length) % partnerLogos.length)
  }

  const handleNext = () => {
    setIsAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length)
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden">
        <motion.div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {partnerLogos.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <Image
                src={src}
                alt={`Partner logo ${i + 1}`}
                width={128}
                height={64}
                className="w-full h-32 object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-[#85a3b0]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-[#85a3b0]" />
      </button>
    </div>
  )
}

export function LandingPage() {
  const navLinks = [
    { href: "/", label: "home" },
    { href: "/aboutus", label: "about us" },
    { href: "/theprocess", label: "the process" },
    { href: "/portfolio", label: "portfolio" },
    { href: "/jointheteam", label: "join the team" },
    { href: "/contactus", label: "contact us" },
  ]

  const services = [
    {
      number: "01",
      title: "Online Marketing Strategy",
      description: "Develop tailored digital strategies to boost your online presence, increase engagement, and drive measurable results across all platforms."
    },
    {
      number: "02",
      title: "Social Media Management",
      description: "Create and curate engaging content, manage communities, and grow your brand's social media presence with our expert team."
    },
    {
      number: "03",
      title: "Media Productions",
      description: "Produce high-quality video and photo content that elevates your brand, tells your story, and resonates with your target audience."
    },
    {
      number: "04",
      title: "Data-Driven Analytics",
      description: "Utilize advanced analytics tools to gather insights, optimize campaigns, and make informed decisions to improve your marketing ROI."
    }
  ]

  const portfolioItems = [
    {
      period: "2021 - present",
      title: "Tenaga Seri Wangsa",
      description: "Comprehensive social media and branding management, including digital marketing campaigns and content creation.",
      image: "/PResiden.jpg"
    },
    { 
      period: "2023 - present", 
      image: "/port2.png",
      title: "Joshua's King (TSW Group)",
      description: "comprehensive services including social media and branding consultation, Facebook paid advertising management, video and photography production, digital marketing campaign execution, and content creation along with copywriting.",
    },
    { 
      period: "2022 - present", 
      image: "/port3.png",
      title: "Lan Berambeh",
      description: "social event in Kuala Lumpur for Sarawakians to unite them in West Malaysia,comprehensive services including event planning, video and photography production, social media marketing and branding extensions"
    },
    { 
      period: "2023", 
      image: "/Port4.png",
      title:"The Generations - CU Sarawak",
      description:"comprehensive services including video and photography production and content creation along with copywriting"
    }
  ]

  const partnerLogos = [
    "/MOT.png", "/ibraco.png", "/SBC.png", "/simedarby.png", "/sedc.png"
  ]

  return (
    <div className="min-h-screen bg-white">
      <GlobalStyle />
      <motion.nav 
        className="container mx-auto px-4 py-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center">
          <Image src="/tslg.png" alt="The Studio Logo" width={150} height={40} className="h-12 w-auto" />
        </Link>
        <motion.div 
          className="hidden lg:flex space-x-8 text-base text-[#85a3b0] font-bold"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={fadeIn}>
              <Link href={link.href} className="hover:text-[#6b8a99] transition-colors">{link.label}</Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </motion.nav>

      <AnimatedSection>
        <section className="container mx-auto px-4 py-6 md:py-12 relative overflow-hidden">
          <div className="relative flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="flex-1 relative w-full max-w-sm mx-auto lg:mx-0">
              <motion.div 
                className="absolute -left-[100vw] top-1/3 w-[100vw] h-8 bg-[#4a90e2]"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div 
                className="absolute -left-[100vw] top-2/4 w-[100vw] h-8 bg-[#9b6b9d]"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.div 
                className="bg-[#FFFFFF]/20 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src="/pexel.jpeg" 
                  alt="Camera held by orange gloved hand" 
                  width={350} 
                  height={350} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#85a3b0] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                welcome to
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image src="/tslg.png" alt="The Studio Logo" width={300} height={80} className="mx-auto lg:mx-0" />
              </motion.div>
              <motion.p 
                className="text-[#85a3b0] text-lg max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Focused on creating human-centric content; based on data-driven results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button className="bg-[#85a3b0] hover:bg-[#6b8a99] rounded-full px-8 py-2 text-lg">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-end mb-12">
            <motion.h2 
              className="text-3xl font-semibold text-[#c6d3da]"
              variants={fadeIn}
            >
              the identity
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div className="relative md:col-span-1" variants={fadeIn}>
              <Image
                src="/tslaptop.jpg"
                alt="Laptop on desk"
                width={600}
                height={900}
                className="rounded-lg object-cover w-full h-auto max-h-[600px]"
              />
            </motion.div>
            <motion.div className="space-y-8" variants={staggerChildren}>
              {services.map((service) => (
                <motion.div key={service.number} variants={fadeIn}>
                  <Card className="p-6 space-y-2 border-none shadow-none bg-gray-50">
                    <div className="text-sm text-[#85a3b0] font-semibold">{service.number}</div>
                    <h3 className="text-xl font-semibold text-[#85a3b0]">
                      {service.title}
                    </h3>
                    <p className="text-[#85a3b0]">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
              <motion.div variants={fadeIn}>
                <Button variant="ghost" className="text-[#c6d3da] hover:text-[#6b8a99] p-0">
                  Learn More →
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-3xl font-semibold text-[#85a3b0] mb-12 text-center"
            variants={fadeIn}
          >
            Our Portfolio
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
          >
            {portfolioItems.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="group relative overflow-hidden rounded-3xl border-none h-[400px]">
                  <Image
                    src={item.image}
                    alt={item.title || `Portfolio item ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end text-white"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-sm mb-2">{item.period}</div>
                    {item.title && (
                      <>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          {item.title}
                          <ArrowRight className="h-4 w-4" />
                        </h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <div className="border-y border-slate-200 py-12">
          <div className="container mx-auto px-4">
            <PartnerLogos />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <footer className="container mx-auto px-4 py-12 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="space-y-4" variants={fadeIn}>
              <h2 className="text-2xl font-semibold text-[#85a3b0]">
                Get in Touch!
              </h2>
              <a href="mailto:marketing@thestudiotech.com" className="text-[#85a3b0] hover:text-[#6b8a99]">
                marketing@thestudiotech.com
              </a>
            </motion.div>
            <motion.nav className="space-y-4" variants={staggerChildren}>
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={fadeIn}>
                  <Link href={link.href} className="block text-[#85a3b0] hover:text-[#6b8a99]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <motion.div className="space-y-4" variants={fadeIn}>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#85a3b0] hover:text-[#6b8a99]">Facebook</Link>
                <Link href="#" className="text-[#85a3b0] hover:text-[#6b8a99]">Instagram</Link>
              </div>
              <p className="text-sm text-[#85a3b0]">© The Studio Kuching | 2023</p>
            </motion.div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}