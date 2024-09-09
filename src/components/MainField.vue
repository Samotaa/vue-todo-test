<script setup>
import InputField from "./InputField.vue";
import TaskList from "./TaskList.vue";
import BottomButtons from "./BottomButtons.vue";
import ProgressBars from "./ProgressBars.vue";
import TopField from "./TopField.vue";
import TasksDone from "./TasksDone.vue";

</script>

<template>
  <div
    class="flex flex-col fixed items-center bg-[white] dark:bg-[#292b2f] w-[90%] h-[80%] md:w-[730px] md:h-[719px] rounded-[24px] font-inter"
  >
    <TopField />
    <InputField />
    <TaskList />
    <ProgressBars />
    <BottomButtons />
    <TasksDone />
  </div>
</template>