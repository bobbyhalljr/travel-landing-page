<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition 
    enter-active-class="transition ease-out duration-300 transform"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-300 transform"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    name="modal">

    <div v-if="show" class="fixed z-[9998] w-full h-full bg-[rgba(0,0,0,0.5)] flex transition-opacity duration-[0.4s] ease-[ease] left-0 top-0">
      <div class="w-[580px] mx-4 md:ml-32 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.33)] transition-all duration-[0.4s] ease-[ease] m-auto px-[30px] py-5 rounded-sm">
        <div class="text-[#611818] mt-0">
            <button
              class="float-right"
              @click="$emit('close')"
            >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.47211 6.08565L13.3347 0L14.8426 1.44954L8.93825 7.31805L15 13.1986L13.4303 14.8552L7.65339 8.91838L1.751 15L0.129482 13.4359C2.12151 11.4596 4.05777 9.55167 6.04781 7.58745L0 1.65259L1.55378 0L7.47211 6.08565Z" fill="#611818"/>
            </svg>
            </button>
          <slot name="header">default header</slot>
        </div>

        <div class="mx-0 my-5">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>