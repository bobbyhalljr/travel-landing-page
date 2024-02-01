<script setup>
import image from "../assets/trees.png"
import Modal from "../components/Modal.vue"
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  
  <div class="flex relative flex-col md:flex-row">
    <!-- div for the responsive sidebar -->
    <div class="relative bg-[#611818] w-full h-24 md:w-[413px] lg:w-[380px] md:h-screen"> 
    </div>

    <div class="mt-auto absolute bottom-60 md:bottom-60 left-20 md:left-40">
      <h1 class="text-8xl md:text-[10rem] font-bold text-white">Explore</h1>

      <div>
        <!-- button trigger for modal -->
        <button type="button" id="show-modal" @click="showModal = true" class="flex font-medium tracking-wide text-white py-4 items-center">
          <svg class="w-8 mr-4 h-8" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.5C0 9.62588 9.62588 0 21.5 0C27.2022 0 32.6708 2.26517 36.7028 6.2972C40.7348 10.3292 43 15.7978 43 21.5C43 33.3741 33.3741 43 21.5 43C9.62588 43 0 33.3741 0 21.5ZM22.4673 22.1386H29.3045V20.3237H22.4673V13.2142H20.5327V20.3237H13.6955V22.1386H20.5327V29.3092H22.4673V22.1386Z" fill="white"/>
          </svg>
          More Details
        </button>
      </div>
    </div>
    
    <Teleport to="body">
    <!-- using the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h1 class="text-background mb-6 text-6xl font-semibold">Explore</h1>
      </template>

      <template class="prose" #body>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
      </template>

      <template class="" #footer>
        <button class="uppercase text-white px-8 py-3 my-6 bg-gradient-to-r from-background to-background/40">
          read more
        </button>
      </template>
    </modal>
  </Teleport>


    <div class="w-screen">
      <img class="h-screen object-cover bg-cover bg-center w-screen" :src="image" alt="trees"/>
    </div>
  </div>

</template>