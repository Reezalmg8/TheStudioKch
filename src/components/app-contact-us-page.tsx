'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Header } from "@/components/ui/header"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/ctcusTS_enhanced.png"
                alt="Blue phone"
                width={600}
                height={800}
                className="rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="max-w-md">
                <h1 className="text-4xl font-bold text-[#85a3b0] mb-8">
                  we're ready, let's talk
                </h1>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm text-[#85a3b0] mb-1 block">
                      first name
                    </label>
                    <Input
                      type="text"
                      className="border-[#85a3b0] focus:ring-[#4a90e2]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#85a3b0] mb-1 block">
                      email address
                    </label>
                    <Input
                      type="email"
                      className="border-[#85a3b0] focus:ring-[#4a90e2]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#85a3b0] mb-1 block">
                      phone number
                    </label>
                    <Input
                      type="tel"
                      className="border-[#85a3b0] focus:ring-[#4a90e2]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#85a3b0] mb-1 block">
                      what position are you interested in?
                    </label>
                    <Textarea
                      className="border-[#85a3b0] focus:ring-[#4a90e2] min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-[#4a90e2] hover:bg-[#4a90e2]/90 text-white">
                    apply
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}