<script setup>
import { ref } from "vue";
import { useListStore } from "../store/listStore";

const listStore = useListStore()

const text = ref("")

// Adds a new item to the list
const addItem = () => {
  listStore.addToList(text.value)
  text.value = ""
}

</script>

<template>
  <div class="flex justify-center items-center gap-[16px] mt-[20px] md:mt-[52px] flex-wrap">
    <input
      @keydown.enter="addItem"
      class="p-[12px] dark:bg-[#40444b] dark:text-[white] text-[14px] focus:outline-none rounded-[8px] w-[220px] h-[40px] md:w-[317px] md:h-[40px] border-[1px] border-[#C7CCD1] dark:border-none"
      v-model="text"
      type="text"
      name="input"
      placeholder="Add new todo"
    />
    <button
      v-if="text"
      @click="addItem"
      class="bg-[#2578F4] dark:bg-[#7289da] text-[#FFFFFF] text-[13px] px-[16px] w-[77px] h-[40px] rounded-[8px]"
    >
      Submit
    </button>
  </div>
</template>
