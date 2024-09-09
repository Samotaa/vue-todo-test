<script setup>
import { useListStore } from "../store/listStore";
import { storeToRefs } from "pinia";

const listStore = useListStore();
const { filter, activeTasks, doneTasks } = storeToRefs(listStore);

// Changes the style of the active button
const setButtonStyle = (type) => {
  const buttonStyle = "bg-[#2578F4] dark:bg-[#7289da] text-[#FFFFFF] rounded-[10px]"
  if (filter.value === type) {
    return buttonStyle
  }
}

</script>

<template>
  <div class="mt-[20px] md:w-[410px] flex flex-col justify-center items-center md:absolute bottom-[10px] md:bottom-[25px] font-semibold text-[12px]">

    <div v-if="activeTasks.length > 0" class="absolute bottom-[20px] left-[20%] md:bottom-2 md:left-[0px]">
      <div
        @click="listStore.markAllDone"
        class="text-[black] dark:text-[white] hover:cursor-pointer md:px-[12px]"
      >
        Check all
      </div>
    </div>

    <div class="flex flex-row gap-[5px] md:gap-0 justify-center items-center">
      <div
        class="py-[6px] px-[12px] dark:text-[white] hover:cursor-pointer"
        :class="setButtonStyle('all')"
        @click="filter = 'all'"
      >
        All
      </div>
      <div
        v-if="activeTasks.length > 0 && doneTasks.length > 0"
        class="py-[8px] px-[12px] dark:text-[white] hover:cursor-pointer"
        :class="setButtonStyle('active')"
        @click="filter = 'active'"
      >
        Active
      </div>
      <div
        v-if="doneTasks.length > 0 && activeTasks.length > 0"
        class="py-[8px] px-[12px] dark:text-[white] hover:cursor-pointer"
        :class="setButtonStyle('completed')"
        @click="filter = 'completed'"
      >
        Completed
      </div>
    </div>

    <div v-if="doneTasks.length !== 0" class="absolute bottom-[20px] right-[20%] md:bottom-2 md:right-0">
      <div
        class="text-[black] dark:text-[white] hover:cursor-pointer md:pr-[12px]"
        @click="listStore.deleteCompleted(doneTasks)"
      >
        Clear completed
      </div>
    </div>
  </div>
</template>
