<template>
  <div class="">
    <!-- HEADER + TITLE CONTAINER -->
    <div>
      <!-- TITLE -->
      <div class="mt-5">
        <div>
          <h3 class="text-center font-bold text-3xl text-blue-500">{{ $t('title') }}</h3>
        </div>
      </div>
      <!-- CONTAINER (Responsive) -->
      <div
        class="flex flex-col items-center lg:flex-row-reverse justify-center gap-4 lg:gap-20 mt-10 space-y-4 lg:space-y-0"
      >
        <!-- Personnal number -->
        <div class="text-center lg:text-right">
          <div class="flex flex-row items-center gap-2 justify-center lg:justify-end">
            <h2 class="font-bold text-lg">{{ $t('pernrEmp') }}</h2>
            <font-awesome-icon :icon="['fas', 'id-card']" />
          </div>
          <div>
            <h3 class="text-center">23344</h3>
          </div>
        </div>
        <!-- Personnal name -->
        <div class="text-center lg:text-right">
          <div class="flex flex-row items-center gap-2 justify-center lg:justify-end">
            <h2 class="font-bold text-lg">{{ $t('empName') }}</h2>
            <font-awesome-icon :icon="['fas', 'user']" />
          </div>
          <div>
            <h3 class="text-center">שלום כהן</h3>
          </div>
        </div>
        <!-- Trip Number -->
        <div class="text-center lg:text-right">
          <div class="flex flex-row items-center gap-2 justify-center lg:justify-end">
            <h2 class="font-bold text-lg">{{ $t('tripNumber') }}</h2>
            <font-awesome-icon :icon="['fas', 'hashtag']" />
          </div>
          <div>
            <h3 class="text-center">1256987</h3>
          </div>
        </div>
        <!-- Trip date -->
        <div class="text-center lg:text-right">
          <div class="flex flex-row items-center gap-2 justify-center lg:justify-end">
            <h2 class="font-bold text-lg">{{ $t('tripDate') }}</h2>
            <font-awesome-icon :icon="['fas', 'calendar-days']" />
          </div>
          <div>
            <h3 class="text-center">12/08/2025</h3>
          </div>
        </div>
        <!-- Destination -->
        <div class="text-center lg:text-right">
          <div class="flex flex-row items-center gap-2 justify-center lg:justify-end">
            <h2 class="font-bold text-lg">{{ $t('destination') }}</h2>
            <font-awesome-icon :icon="['fas', 'plane']" />
          </div>
          <div>
            <h3 class="text-center">קנדה</h3>
          </div>
        </div>
      </div>
      <!-- READ ME -->
      <div class="text-center mt-10 text-direction font-bold">
        <h4 class="text-lg">{{ $t('readme') }}</h4>
      </div>
      <!-- FILE -->
      <div class="text-center mt-5 text-direction flex gap-2 justify-center items-center">
        <font-awesome-icon :icon="['fas', 'link']" />
        <label for="icon" @click="openModal" class="cursor-pointer">{{ $t('instruction') }}</label>

        <div
          v-if="isModalVisible"
          class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
        >
          <!-- Modal container -->
          <div
            class="relative bg-white rounded-lg shadow-lg p-6"
            style="width: 1028px; height: 700px"
          >
            <!-- Close button positioned absolutely in the top-left -->

            <font-awesome-icon
              @click="closeModal"
              :icon="['fas', 'xmark']"
              class="absolute top-1 left-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            />

            <!-- PDF viewer -->
            <VPdfViewer :src="pdfFileSource" class="mt-4" />
          </div>
        </div>
      </div>
      <!-- CHECKBOX -->
      <div class="flex flex-row-reverse justify-center mt-20">
        <input type="checkbox" v-model="checked" class="ml-2 w-3.5" />
        <label for="checkbox">{{ $t('checkboxText') }}</label>
      </div>
      <!-- SEND BUTTON -->
      <div class="flex justify-center mt-10">
        <button
          class="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
          {{ $t('send') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
const pdfFileSource =
  'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'
const isModalVisible = ref(false) // Reactive variable to control modal visibility
const openModal = () => {
  isModalVisible.value = true
}
const closeModal = () => {
  isModalVisible.value = false
}
</script>

<style scoped>
.text-direction {
  direction: rtl;
}
</style>
