<script setup>
defineProps({
  title: String
})
</script>
<template>
  <div class="relative overflow-hidden bg-[var(--midnight)] hero">
    <!-- Pre-allocate space for background to prevent shifts -->
    <div class="absolute inset-x-0 bottom-0 max-w-[100ch] m-auto -z-10 h-[505px] w-full">
      <BGSVG class="w-full h-full" width="100%" height="505" preserveAspectRatio="xMidYMid slice" />
    </div>

    <div class="relative z-10 pb-28 min-h-[600px]">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div class="max-w-2xl text-center mx-auto">
          <!-- Title with reserved space -->
          <div class="mt-5 min-h-[72px] md:min-h-[80px] lg:min-h-[96px] flex items-center justify-center">
            <h1 class="block font-extrabold text-white text-4xl md:text-5xl lg:text-6xl mx-auto leading-tight">
              <slot name="header">
                <!-- Fallback content to prevent layout shift -->
                <span class="opacity-0 select-none" aria-hidden="true">Loading...</span>
              </slot>
            </h1>
          </div>
          <!-- End Title -->

          <!-- Content with reserved space -->
          <div class="mt-5 max-w-3xl min-h-[80px] flex flex-col justify-center">
            <p class="text-[var(--focus-white)] text-center leading-relaxed">
              Cost Certainty. Real Time Schedule Management. "Zero Punch"
              Philosophy.
            </p>
            <p class="text-white z-10 mb-4 text-center self-center leading-relaxed">
              Advanced Solutions in Commercial Flooring & Wall Tile
            </p>
          </div>

          <!-- Buttons with reserved space -->
          <div class="mt-8 gap-3 flex justify-center min-h-[48px] items-center">
            <slot name="actions">
              <!-- Prevent layout shift with invisible placeholder -->
              <div class="opacity-0 h-12 w-32" aria-hidden="true"></div>
            </slot>
          </div>
          <!-- End Buttons -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blob {
  background: linear-gradient(to right,
      rgba(23, 29, 26, 1) 0%,
      rgba(204, 231, 11, 1) 100%);
  aspect-ratio: 1;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  animation: rotate 20s infinite;
  /* Prevent animation from causing layout shifts */
  will-change: transform;
  transform-origin: center;
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}

.blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(200px);
}

.hero {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  /* Ensure stable layout */
  contain: layout style;
}

.h-image {
  filter: opacity(1) brightness(0.1) grayscale(1) saturate(0) contrast(0.8);
}

.content {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-items: center;
  z-index: 2;
}

/* Ensure consistent line heights to prevent text reflow */
h1 {
  line-height: 1.1;
}

p {
  line-height: 1.6;
}

/* Prevent font loading from causing shifts */
.hero {
  font-display: swap;
}
</style>
