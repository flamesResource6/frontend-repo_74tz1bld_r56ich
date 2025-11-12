import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Bot, Cpu, GitBranch, MessageCircle, Link2, BarChart3 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
}

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {kicker && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-sm tracking-wider uppercase text-amber-600 font-semibold"
        >
          {kicker}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-4 text-base md:text-lg text-gray-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        {/* Spline 3D cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlay for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

        <div className="relative z-10 h-full container mx-auto px-6 md:px-10 flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              WorkYaan – Your Automation Vehicle
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
            >
              Smart AI and n8n workflows that save you time and boost productivity.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-8"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-amber-600 text-white px-6 py-3 text-base md:text-lg font-semibold shadow-lg shadow-amber-600/20 hover:shadow-amber-600/30 transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600">
                Get Your Workflow
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28" id="about">
        <SectionHeading
          kicker="About WorkYaan"
          title="Automation built for Indian businesses"
          subtitle="WorkYaan helps Indian entrepreneurs and businesses automate daily tasks using AI and n8n workflows. From WhatsApp responders to data-sync bots, we build automation that works 24/7 — so you don’t have to."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Bot, label: 'Automation', desc: 'Reliable bots that run your repetitive tasks round the clock.' },
            { icon: Cpu, label: 'AI Intelligence', desc: 'Use LLMs to classify, summarize, and respond smartly.' },
            { icon: GitBranch, label: 'Workflow Orchestration', desc: 'Well-structured flows connecting your tools end-to-end.' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              className="group rounded-2xl bg-white border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-700 grid place-items-center group-hover:bg-amber-100 transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{item.label}</h3>
              </div>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <SectionHeading
          kicker="Explainer"
          title="How AI Automation Works"
          subtitle="Watch how WorkYaan brings your ideas to life with intelligent workflows."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 md:mt-12"
        >
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/JMUxmLyrhSk"
              title="How AI Automation Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <SectionHeading
          kicker="Services"
          title="What We Build"
          subtitle="Practical automations tailored for your stack."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: MessageCircle, title: 'WhatsApp Auto-Reply Systems', desc: 'Automated responders, lead capture, FAQs, and handoff flows.' },
            { icon: Link2, title: 'CRM & Lead Automation', desc: 'Sync contacts, score leads, and trigger follow-ups across tools.' },
            { icon: BarChart3, title: 'Business Process Flows', desc: 'Data → Report → Alert pipelines keeping your team informed.' },
            { icon: Bot, title: 'AI Chat Integrations', desc: 'ChatGPT, Gemini and more – embedded where your team works.' },
          ].map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              className="rounded-2xl bg-white border border-gray-100 p-6 md:p-7 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white grid place-items-center shadow-md">
                  <svc.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{svc.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{svc.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="absolute inset-x-0 -z-0 top-0 h-40 bg-gradient-to-b from-amber-100/60 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
          <SectionHeading
            kicker="Contact"
            title="Let’s Automate Your Work"
            subtitle="Ready to bring automation to your business? Email us your idea and we’ll get back within 24 hours."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 flex flex-col items-center"
          >
            <a
              href="mailto:mandharemeghraj@gmail.com?subject=WorkYaan%20Automation%20Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 text-white px-7 py-3 text-base md:text-lg font-semibold shadow-lg shadow-amber-600/20 hover:shadow-amber-600/30 transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
            >
              Send Email
            </a>
            <p className="mt-3 text-sm text-gray-600">mandharemeghraj@gmail.com</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 md:px-10 py-6 text-sm text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} WorkYaan</span>
          <span className="text-gray-400">Made in India</span>
        </div>
      </footer>
    </div>
  )
}
