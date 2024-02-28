import { motion } from 'framer-motion'

export function BackgroundCircles() {
  return (
    <motion.div
      className="relative hidden lg:flex justify-center items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1, 1, 1, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border dark:border-zinc-800 rounded-full h-[200px] w-[200px] mt-20 animate-ping" />
      <div className="absolute border dark:border-zinc-800 rounded-full h-[300px] w-[300px] mt-20 animate-ping" />
      <div className="absolute border dark:border-zinc-800 rounded-full h-[500px] w-[500px] mt-20 animate-ping" />
      <div className="absolute border rounded-full border-red-600 opacity-20  animate-pulse h-[400px] w-[400px] mt-20" />
      <div className="absolute border rounded-full border-zinc-800 opacity-20  animate-pulse h-[500px] w-[500px] mt-20" />
    </motion.div>
  )
}
