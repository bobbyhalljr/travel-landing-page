<script setup>
import image from "../assets/trees.png"
import Modal from "../components/Modal.vue"
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  
  <div class="flex relative flex-col md:flex-row">
    <div class="relative bg-background w-full h-24 md:w-[413px] md:h-screen"> 
    </div>

    <div class="mt-auto absolute bottom-60 md:bottom-60 left-20 md:left-40">
      <h1 class="text-8xl md:text-9xl font-bold text-white">Explore</h1>

      <div>
        <button type="button" @click="showModal = !showModal" id="show-modal" class="flex font-medium tracking-wide text-white py-4 items-center">
          <svg class="w-8 mr-4 h-8" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.5C0 9.62588 9.62588 0 21.5 0C27.2022 0 32.6708 2.26517 36.7028 6.2972C40.7348 10.3292 43 15.7978 43 21.5C43 33.3741 33.3741 43 21.5 43C9.62588 43 0 33.3741 0 21.5ZM22.4673 22.1386H29.3045V20.3237H22.4673V13.2142H20.5327V20.3237H13.6955V22.1386H20.5327V29.3092H22.4673V22.1386Z" fill="white"/>
          </svg>
          More Details
        </button>
      </div>
    </div>
    
    <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="flex items-start justify-center min-h-screen pt-24 text-center"
      >
        <div
          class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          this is the modal
        </div>
      </div>
    </div>
  </teleport>

    <div>
      <img class="h-screen object-cover bg-cover bg-center w-screen" :src="image" alt="trees"/>
    </div>
  </div>

</template>

<style scoped>

</style>
