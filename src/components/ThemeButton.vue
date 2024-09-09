<script setup>

import { useThemeStore } from "../store/themeStore";

const themeStore = useThemeStore();

</script>

<template>
  <div>
    <button
      @click="themeStore.changeTheme()"
      class="absolute top-[15px] md:top-[30px] right-[20px] bg-[#111] dark:bg-[#7289da] text-[12px] md:text-[16px] text-[#FFFFFF] px-[10px] md:px-[16px] h-[40px] rounded-[8px]"
    >
      Change Theme
    </button>
  </div>
</template>

<style scoped></style>
