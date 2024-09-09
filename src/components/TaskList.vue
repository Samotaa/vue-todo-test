<script setup>
import TaskDetail from "./TaskDetail.vue";
import { storeToRefs } from "pinia";
import { useListStore } from "../store/listStore";

import { MoonLoader } from "vue3-spinner";
import { VueDraggable } from "vue-draggable-plus";

const listStore = useListStore();
const { activeTasks, doneTasks, filter, list, loading } = storeToRefs(listStore);

// Updates is_completed of the task
const updateTaskCompletion = (item, isCompleted) => {
  const taskIndex = listStore.list.findIndex((task) => task._id === item._id);
  if (taskIndex !== -1) {
    listStore.doneTask(item).then(() => {
      listStore.list[taskIndex].is_completed = isCompleted;
      if (filter.value === "active" && activeTasks.value.length == 0) {
        filter.value = "all";
      }
      if (filter.value === "completed" && doneTasks.value.length == 0) {
        filter.value = "all";
      }
    });
  }
};
</script>

<template>
  <div
    v-if="loading"
    class="mt-[40px] md:mt-[40px] h-[130px] md:h-[100px] pt-[20px]"
  >
    <MoonLoader color="#7289da" />
  </div>
  <div
    v-else
    class="min-h-[100px] h-[130px] w-[310px] md:h-[100px] md:w-[430px] overflow-y-auto overflow-x-hidden flex justify-between mt-[40px]"
  >
    <div class="w-[410px] pl-[10px]">
      <div v-if="filter === 'all'">
        <VueDraggable ref="el" v-model="list" handle=".drag-handle">
          <div
            class="w-full h-[25px] flex justify-between mb-[16px]"
            v-for="item in list"
            :key="item._id"
          >
            <TaskDetail :item="item" @update-completed="updateTaskCompletion" />
          </div>
        </VueDraggable>
      </div>
      <div v-if="filter === 'active'">
        <div
          class="w-full h-[25px] flex justify-between mb-[16px]"
          v-for="item in activeTasks"
          :key="item._id"
        >
          <TaskDetail :item="item" @update-completed="updateTaskCompletion" />
        </div>
      </div>
      <div v-if="filter === 'completed'">
        <div
          class="w-full h-[25px] flex justify-between mb-[16px]"
          v-for="item in doneTasks"
          :key="item._id"
        >
          <TaskDetail :item="item" @update-completed="updateTaskCompletion" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background: #83838373;
  border-radius: 5px;
}
</style>
