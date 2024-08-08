'use client'

import { motion } from 'framer-motion'

function Experience({ title, date, place }) {
  return (
    <motion.p
      className="text-base font-semibold text-white md:text-lg"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -120 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="text-lg font-bold text-primary-200 md:text-xl">{date}</span> {title}
      <br />
      <span className="text-sm font-normal text-white opacity-80 md:text-lg">{place}</span>
    </motion.p>
  )
}

function Experiences() {
  return (
    <div className="flex flex-col gap-6">
      <Experience
        title="Stage - Développeur full stack"
        date="2024-2024"
        place="Micropole, Nantes, France"
      />
      <Experience
        title="Développeur full stack"
        date="2023-2024"
        place="Marquardt, Rietheim, Allemagne (remote)"
      />
      <Experience title="Stage ingénieur" date="2022-2022" place="Marquardt, Rietheim, Allemagne" />
      <Experience title="École d'ingénieur" date="2021-2024" place="ESEO, Angers, France" />
    </div>
  )
}

export default Experiences
