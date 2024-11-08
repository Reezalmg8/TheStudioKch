'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Instagram, Mail, Menu } from "lucide-react"

export default function Component() {
  const stats = {
    performance: [
      { label: "reach", value: "127.3k", icon: "👥" },
      { label: "content infrastructure", value: "1.4k", icon: "📊" },
      { label: "followers", value: "+740", icon: "👥" },
      { label: "link clicks", value: "8k", icon: "🔗" }
    ],
    audience: [
      { label: "impressions started", value: "469", icon: "👁️" },
      { label: "comments", value: "418", icon: "💬" }
    ]
  }

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/aboutus", label: "about us" },
    { href: "/theprocess", label: "the process" },
    { href: "/portfolio", label: "portfolio" },
    { href: "/jointheteam", label: "join the team" },
    { href: "/contactus", label: "contact us" },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="min-h-screen bg-white">
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
              <Link href={link.href} className="hover:text-[#6b8a99] transition-colors font-bold">{link.label}</Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </motion.nav>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/PResiden.jpg?height=400&width=400"
                  alt="P Residence at sunset"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Tenaga Seri Wangsa - P Residence
              </h1>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="rounded-full hover:bg-[#85a3b0] hover:text-white transition-colors">
                  Social Media Management
                </Button>
                <Button variant="outline" className="rounded-full hover:bg-[#85a3b0] hover:text-white transition-colors">
                  Content Creation
                </Button>
                <Button variant="outline" className="rounded-full hover:bg-[#85a3b0] hover:text-white transition-colors">
                  Digital Marketing
                </Button>
              </div>
              {/* Performance Stats */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">performance</h2>
                <div className="grid grid-cols-2 gap-4">
                  {stats.performance.map((stat, index) => (
                    <Card key={index} className="p-4 bg-[#f8f9fa] border-none transition-colors hover:bg-[#6b8a99] group">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-600 group-hover:text-white">{stat.label}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#6b8a99] group-hover:text-[#f8f9fa]">
                            {stat.value}
                          </span>
                          <span className="text-xl">{stat.icon}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Audience Stats */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">audience</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.audience.map((stat, index) => (
                <Card key={index} className="p-4 bg-[#f8f9fa] border-none transition-colors hover:bg-[#6b8a99] group">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 group-hover:text-white">{stat.label}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#6b8a99] group-hover:text-[#f8f9fa]">
                        {stat.value}
                      </span>
                      <span className="text-xl">{stat.icon}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Get in Touch Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">get in touch!</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#6b8a99]" />
                <Link
                  href="mailto:marketing@thestudiotech.com"
                  className="text-[#6b8a99] hover:text-[#85a3b0] transition-colors font-bold"
                >
                  marketing@thestudiotech.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-[#6b8a99]" />
                <Link
                  href="https://instagram.com"
                  className="text-[#6b8a99] hover:text-[#85a3b0] transition-colors font-bold"
                >
                  @thestudiokch
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 pt-8">
            © The Studio Kuching {new Date().getFullYear()}
          </footer>
        </motion.div>
      </main>
    </div>
  )
}