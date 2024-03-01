<script setup>
import { ref } from 'vue'

const props = defineProps({
  show: Boolean
})

// Travel blog array to store static blog posts
const travelBlogPosts = ref([
{
    id: 0,
    title: 'Unveiling Hidden Cannabis Treasures: Exploring Unique Strains',
    author: 'Cannabis Enthusiast',
    paragraph: 'Embark on an exciting journey to unveil hidden cannabis treasures and explore unique strains. From elusive hybrids to rare cultivars, this cannabis adventure promises an unparalleled and authentic experience. Prepare to broaden your cannabis horizons and uncover the extraordinary.'
  },
  {
    id: 1,
    title: 'Culinary Delights in Cannabis Culture: A Gastronomic Exploration',
    author: 'Cannabis Foodie',
    paragraph: 'Join us on an epicurean adventure through the vibrant world of cannabis cuisine as we dive into the diverse and tantalizing flavors that define cannabis culture. From infused street eats to gourmet cannabis-infused feasts, this culinary escapade will tantalize your taste buds and ignite your passion for cannabis gastronomy.'
  },
  {
    id: 2,
    title: 'Sustainable Cannabis: Nurturing Nature and Community',
    author: 'Eco-Cannabis Advocate',
    paragraph: 'In this modern blog post, we shed light on the significance of sustainable cannabis practices. Explore eco-conscious cultivation methods, responsible cannabis farming initiatives, and strategies to reduce your environmental footprint while embracing cannabis culture. Let us cultivate cannabis sustainably, nurturing both nature and local communities.'
  }
])

const currentIndex = ref(0);

const currentPost = ref(travelBlogPosts.value[currentIndex.value]);

const nextPost = () => {
  if (currentIndex.value < travelBlogPosts.value.length - 1) {
    currentIndex.value += 1;
    currentPost.value = travelBlogPosts.value[currentIndex.value];
  }
};

const prevPost = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    currentPost.value = travelBlogPosts.value[currentIndex.value];
  }
};
</script>

<template class="h-96">
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
      <div class="w-[580px] h-auto rounded-xl mx-4 md:ml-32 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.33)] transition-all duration-[0.4s] ease-[ease] m-auto px-[30px] py-5">
        <div class="text-emerald-600 flex items-center justify-between">
          <!-- UI for the header of the modal -->
          <slot name="header">
              <h1 class="text-emerald-600 text-4xl font-heading font-semibold">Cannabis Blog</h1>
              <!-- pagination for the blog posts -->
              <div class="flex justify-center ml-auto md:mr-8 mr-0 px-4 space-x-2 items-center">                
                <div class="flex justify-between items-center mt-4" v-if="travelBlogPosts.length > 1">
                  <button @click="prevPost" :disabled="currentIndex === 0" class="mx-2" :class="{ 'cursor-not-allowed': currentIndex === 0 }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-8 h-8 hover:text-emerald-600/50 cursor-pointer"><path d="m15 18-6-6 6-6"/></svg>
                  </button>

                  <div class="text-lg bg-emerald-600 w-8 h-8 flex justify-center items-center text-white rounded-full px-3 lg:p-4">{{ currentIndex + 1 }}</div>

                  <button @click="nextPost" :disabled="currentIndex === travelBlogPosts.length - 1" class="mx-2" :class="{ 'cursor-not-allowed': currentIndex === travelBlogPosts.length - 1 }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-8 h-8 hover:text-emerald-600/50 cursor-pointer"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            <button
            class=""
            @click="$emit('close')"
            >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.47211 6.08565L13.3347 0L14.8426 1.44954L8.93825 7.31805L15 13.1986L13.4303 14.8552L7.65339 8.91838L1.751 15L0.129482 13.4359C2.12151 11.4596 4.05777 9.55167 6.04781 7.58745L0 1.65259L1.55378 0L7.47211 6.08565Z" fill="#444"/>
            </svg>
          </button>
        </slot>
      </div>
      
      <!-- UI for the body of the modal -->
      <div class="mx-0 my-6">
        <slot class="transition-opacity ease-in duration-600 delay-600" name="body">
          <div class="container mx-auto p-4">
            <!-- Looping over posts and displaying a single post at a time -->
            <article v-if="currentPost !== null" :key="currentPost.id" class="mb-8">
              <h2 class="text-2xl font-bold mb-2">{{ currentPost.title }}</h2>
              <p class="text-gray-600 my-6"><em>Author: {{ currentPost.author }}</em></p>
              <p class="text-lg">{{ currentPost.paragraph }}</p>
            </article>

          </div>
        </slot>
      </div>
      
      <!-- UI for the footer of the modal -->
        <div class="modal-footer">
          <slot name="footer">
            <button class="uppercase text-white px-8 py-3 my-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-slate-200 shadow-lg hover:shadow-xl">
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