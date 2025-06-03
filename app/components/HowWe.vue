<script setup>
import { AnimatePresence, motion, useScroll } from 'motion-v'

const scrollContainer = useTemplateRef("scrollContainer")
const { scrollYProgress } = useScroll()
const opacityY = useSpring(scrollYProgress)
const positionY = useSpring(scrollYProgress * 200)

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const container = {
  margin: "100px auto",
  maxWidth: '500px',
  paddingBottom: '100px',
  width: "100%",
}



const steps = [
  {
    icon: 'how_one',
    step: 1,
    title: 'Preconstructions',
    description:
      'We will partner with you to ensure you stay within your budget throughout all pricing efforts and obtain cost certainty for your project.',
    link: '/our-process#preconstruction',
    linkText: 'more about our process'
  },
  {
    icon: 'how_three',
    step: 2,
    title: 'Project Planning',
    description:
      'Our internal tools such as our “Material Lead Time” report, “Production” report and “Mobilization” report, are system generated to equip you with what you need, when you need it.',
    link: '/our-process#project-planning',
    linkText: 'more about how we plan'
  },
  {
    icon: 'how_four',
    step: 3,
    title: 'Project Execution',
    description:
      'Through our full-time onsite supervision, a dedicated field technician and QAQC protocols, we are able to implement our “Zero Punch” philosophy reducing all quality punch list items to almost “0”.',
    link: '/our-process#project-execution',
    linkText: 'more about project execution'
  }
]
</script>

<template>
  <div class="max-w-[500px] mx-auto how grid pb-14 gap-5 content-center">
    <h2 class="font-bold uppercase text-4xl lg:text-4xl text-[var(--focus-white)] mb-8 self-center">
      <span class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8">How</span>
      We do it
    </h2>
    <div class="w-2 bg-[var(--focus-white)] line"></div>
    <div class="steps z-10 grid gap-10" ref="scrollContainer">
      <div v-for="step in steps" :key="step.step" class=" group z-10 gap-8 grid space-y-8">
        <motion.div :initial="{ y: 300, opacity: 0 }"
          :while-in-view="{ y: 0, opacity: 1, transition: { duration: 0.8 } }" :exit="{ opacity: 0 }"
          class="grid grid-cols-1 gap-4 z-10">
          <div>
            <p
              class="font-bold text-5xl text-[var(--midnight)] bg-[var(--focus-white)] h-14 w-14 flex items-center justify-center rounded z-50">
              {{ step.step }}
            </p>
            <motion.div class="icon" viewport="{ once: true }">
              <svg-icon :name="step.icon" />
            </motion.div>
          </div>

          <div>
            <h3 class="step-title mt-5 font-bold text-2xl text-white">{{ step.title }}</h3>
            <p class="mt-1 text-neutral-400 pb-4">{{ step.description }}</p>
            <ULink :to="step.link"
              class="uppercase font-bold text-[var(--focus-white)] hover:text-[var(--focus-yellow)]">
              {{ step.linkText }}
            </ULink>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  color: var(--focus-yellow);
  max-width: 200px;
}
</style>
