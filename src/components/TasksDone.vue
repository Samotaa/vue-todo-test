<script setup>
import { useListStore } from "../store/listStore";
import { useThemeStore } from "../store/themeStore";
import { storeToRefs } from "pinia";
import { icons } from "../icons/Icons";

const themeStore = useThemeStore();
const listStore = useListStore();
const { filter, list } = storeToRefs(listStore);
</script>

<template>
  <div v-if="list.length === 0" class="flex justify-center items-center gap-[8px] absolute bottom-[32px]">
    <component
      v-if="filter === 'all'"
      :is="themeStore.theme ? icons['doneWhite'] : icons['doneBlack']"
    />
    <div
      class="text-[10px] md:text-[14px] text-[#8F99A3] dark:text-[white]"
    >
      Congrat, you have no more tasks to do
    </div>
  </div>
</template>
