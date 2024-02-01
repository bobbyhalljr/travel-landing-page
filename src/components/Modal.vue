<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
    <Transition
    enter-active-class="transition-transform-goo-enter"
    enter-from-class="opacity-0 scale-0.5 gooey"
    enter-to-class="opacity-100 scale-1 gooey"
    leave-active-class="transition-transform-goo-leave"
    leave-from-class="opacity-100 scale-1 gooey"
    leave-to-class="opacity-0 scale-0.5 gooey"
    name="modal"
  >
    <div v-if="show" class="fixed z-[9998] w-screen md:w-full overflow-y-scroll py-4 h-full bg-[rgba(0,0,0,0.3)] flex transition-opacity duration-[0.4s] ease-[ease] left-0 top-0">
      <div class="w-[580px] h-auto mx-4 md:ml-32 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.33)] transition-all duration-[0.4s] ease-[ease] m-auto px-[30px] py-5 rounded-sm">
        <div class="text-[#611818] flex py-4 items-center justify-between">
          <!-- UI for the header of the modal -->
          <slot name="header">
            <h1 class="text-[#611818] text-4xl font-semibold">Explore</h1>
              <div class="flex justify-center ml-auto mr-8 space-x-2 items-center">
                <p class="bg-[#611818] w-6 h-6 md:w-8 md:h-8 flex justify-center items-center text-white rounded-full p-3 lg:p-4">1</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-8 h-8 hover:text-[#611818]/50 cursor-pointer"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            <button
            class=""
            @click="$emit('close')"
            >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.47211 6.08565L13.3347 0L14.8426 1.44954L8.93825 7.31805L15 13.1986L13.4303 14.8552L7.65339 8.91838L1.751 15L0.129482 13.4359C2.12151 11.4596 4.05777 9.55167 6.04781 7.58745L0 1.65259L1.55378 0L7.47211 6.08565Z" fill="#611818"/>
            </svg>
          </button>
        </slot>
      </div>
      
      <!-- UI for the body of the modal -->
      <div class="mx-0 my-5">
        <slot class="transition-opacity ease-in duration-600 delay-600" name="body">
          <h1 class="mt-8 font-black text-2xl md:text-5xl lg:text-6xl mb-6">Gobustan: A Natrual Wonder Hidden in the Heart of the Caucasus</h1>
          <p class="text-gray-600 my-6">By: John Doe</p>
          <p class="max-w-md">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
        </slot>
      </div>
      
      <!-- UI for the footer of the modal -->
        <div class="modal-footer">
          <slot name="footer">
            <button class="uppercase text-white px-8 py-3 my-6 bg-gradient-to-r from-background to-background/50">
              read more
            </button>
          </slot>
        </div>
      </div>
    </div>

  </Transition>
</template>

<!-- Additional styles that tailwindcss doesn't offer. This makes the animation more fluid -->
<style scoped>
@keyframes gooey-enter {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes gooey-leave {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}

.transition-transform-goo-enter,
.transition-transform-goo-leave {
  animation: gooey-enter 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.transition-transform-goo-leave {
  animation: gooey-leave 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.gooey {
  transform-origin: center;
}
</style>