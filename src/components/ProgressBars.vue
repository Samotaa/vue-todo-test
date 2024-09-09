<script setup>
import { useListStore } from "../store/listStore";

import { computed } from "vue";
import { storeToRefs } from "pinia";

const listStore = useListStore();

const { allTasks, doneTasks, activeTasks } = storeToRefs(listStore);

const doneTasksCountText = computed(() => {
  return doneTasks.value.length === 1 ? "task" : "tasks";
});
const activeTasksCountText = computed(() => {
  return activeTasks.value.length === 1 ? "task" : "tasks";
});
</script>

<template>
  <div
    v-if="allTasks"
    class="mt-[20px] md:mt-[32px] w-[320px] md:w-[410px] flex justify-between items-center dark:text-[white]"
  >
    <div
      class="w-[150px] md:w-[190px] p-[10px] rounded-[10px] bg-[#2024270D] dark:bg-[#40444b17]"
    >
      <div
        class="text-[10px] md:text-[12px] text-[#202427] dark:text-[white] font-semibold opacity-[50%]"
      >
        {{ doneTasks.length }} {{ doneTasksCountText }}
      </div>
      <label
        class="font-bold text-[12px] md:text-[14px]"
        for="progress-bar-completed"
        >Completed</label
      >
      <progress
        class="h-[10px] w-[300px]"
        id="progress-bar-completed"
        :max="allTasks"
        :value="doneTasks.length"
      ></progress>
    </div>
    <div
      class="w-[150px] md:w-[190px] p-[10px] rounded-[10px] bg-[#2024270D] dark:bg-[#40444b17]"
    >
      <div
        class="text-[10px] md:text-[12px] text-[#202427] dark:text-[white] font-semibold opacity-[50%]"
      >
        {{ activeTasks.length }} {{ activeTasksCountText }}
      </div>
      <label
        class="font-bold text-[12px] md:text-[14px]"
        for="progress-bar-active"
        >To be finished</label
      >
      <progress
        class="h-[10px] w-[300px]"
        id="progress-bar-active"
        :max="allTasks"
        :value="activeTasks.length"
      ></progress>
    </div>
  </div>
</template>

<style>
@media (min-width: 768px) {
  #progress-bar-completed[value]::-webkit-progress-bar {
    width: 160px;
    height: 5px;
    border-radius: 50px;
    background-color: #c2c2c27a;
    transition: width 300ms ease;
  }
  #progress-bar-completed[value]::-webkit-progress-value {
    border-radius: 8px;
    background-color: #5d5fef;
    transition: width 300ms ease;
  }

  #progress-bar-active[value]::-webkit-progress-bar {
    width: 160px;
    height: 5px;
    border-radius: 50px;
    background-color: #c2c2c27a;
    transition: width 300ms ease;
  }
  #progress-bar-active[value]::-webkit-progress-value {
    border-radius: 8px;
    background-color: #ef5da8;
    transition: width 300ms ease;
  }
}

#progress-bar-completed[value]::-webkit-progress-bar {
    width: 120px;
    height: 5px;
    border-radius: 50px;
    background-color: #c2c2c27a;
    transition: width 300ms ease;
  }
  #progress-bar-completed[value]::-webkit-progress-value {
    border-radius: 8px;
    background-color: #5d5fef;
    transition: width 300ms ease;
  }

  #progress-bar-active[value]::-webkit-progress-bar {
    width: 120px;
    height: 5px;
    border-radius: 50px;
    background-color: #c2c2c27a;
    transition: width 300ms ease;
  }
  #progress-bar-active[value]::-webkit-progress-value {
    border-radius: 8px;
    background-color: #ef5da8;
    transition: width 300ms ease;
  }
</style>
