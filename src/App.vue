<script setup>
import ThemeButton from "./components/ThemeButton.vue";
import MainField from "./components/MainField.vue";

import { useListStore } from "./store/listStore";
import { useThemeStore } from "./store/themeStore";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";



const listStore = useListStore();
const themeStore = useThemeStore();
const { loading } = storeToRefs(listStore)
const { theme } = storeToRefs(themeStore)

onMounted(() => {
  listStore.getList().then(() => {
    loading.value = false
  })

  const localTheme = localStorage.getItem("theme");

  if (localTheme === null) {
    theme.value = false
    localStorage.setItem("theme", false);
  } else {
    theme.value = JSON.parse(localTheme)
  }

})

</script>

<template>
  <div :class="theme ? 'dark' : 'light'">
    <div
      class="w-screen h-screen flex justify-center items-center"
      :class="
        theme
          ? 'dark:bg-[#202225]'
          : 'bg-gradient-to-tl from-[#F0C3FC] to-[#8EC5FC]'
      "
    >
      <ThemeButton />
      <MainField/>
    </div>
  </div>
</template>