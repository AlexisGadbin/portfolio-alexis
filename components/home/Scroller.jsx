'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function Scroller() {
  return (
    <Link href="#education">
      <div className="flex h-[60px] w-[35px] items-start justify-center rounded-3xl border-4 border-primary-100 p-2">
        <motion.div
          className="mb-1 h-3 w-3 rounded-full bg-primary-100"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        />
      </div>
    </Link>
  )
}

export default Scroller
