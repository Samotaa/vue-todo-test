<script setup>
import { ref } from "vue";
import { useThemeStore } from "../store/themeStore";
import { icons } from "../icons/Icons";
import { useListStore } from "../store/listStore";

const props = defineProps(["item"]);

const listStore = useListStore();
const themeStore = useThemeStore();

const emit = defineEmits(["update-completed"]);
const showEdit = ref(false);
const newTitle = ref("");

const toggleTask = () => {
  emit("update-completed", props.item, !props.item.is_completed);
};

const editItem = (item) => {
  showEdit.value = true;
  newTitle.value = item.title;
};

const updateItem = (item) => {
  listStore.updateItem(item, newTitle.value);
  showEdit.value = false;
};

const closeEdit = () => {
  showEdit.value = false;
};
</script>

<template>
  <div class="flex w-[200px] h-[20px] dark:text-[white] text-[14px]">
    <input
      :checked="item.is_completed"
      @click="toggleTask"
      type="checkbox"
      class="w-[20px] h-[20px] mr-[8px] dark:accent-[#7289da]"
    />
    <div
      class="ml-[8px] w-full truncate overflow-x-scroll w-[258px] text-[14px]"
      v-if="!showEdit"
    >
      {{ item.title }}
    </div>
    <input
      v-else
      type="text"
      v-model="newTitle"
      autofocus
      @keydown.enter="updateItem(item)"
      class="ml-[8px] border-[#C7CCD1] dark:border-none p-[10px] border-[1px] rounded-[5px] w-full dark:bg-[#40444b] dark:text-[white]"
    />
  </div>
  <div v-if="!showEdit" class="flex justify-between w-[48px]">
    <component
      class="hover:cursor-pointer"
      @click="editItem(item)"
      :is="themeStore.theme ? icons['editWhite'] : icons['editBlack']"
    />
    <component
      class="hover:cursor-pointer"
      @click="listStore.removeItem(item._id)"
      :is="icons['delete']"
    />
  </div>
  <div v-else class="flex justify-between w-[50px]">
    <component
      class="hover:cursor-pointer w-[20px]"
      @click="updateItem(item)"
      :is="themeStore.theme ? icons['acceptWhite'] : icons['acceptBlack']"
    />
    <component
      class="hover:cursor-pointer w-[20px]"
      @click="closeEdit"
      :is="themeStore.theme ? icons['closeWhite'] : icons['closeBlack']"
    />
  </div>
</template>
