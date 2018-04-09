<template>
  <div class="vue-searchable__item" :class="itemClass" v-show="isVisible">
    <div class="header" :class="itemHeaderClass">{{title}}</div>
    <div class="body" :class="itemBodyClass">
      <slot></slot>
    </div>
    <div class="footer" :class="itemFooterClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@src/event-bus.js';

export default {
  name: 'item',
  data() {
    return {
      isVisible: true,
    };
  },
  props: {
    itemClass: {
      default: null,
    },
    itemHeaderClass: {
      default: null,
    },
    itemBodyClass: {
      default: null,
    },
    itemFooterClass: {
      default: null,
    },
    itemCategory: {
      type: String,
    },
    title: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  created() {
    EventBus.$on('inputFilter', input => {
      this.isVisible = this.title.toLowerCase().includes(input.toLowerCase());
    });
    EventBus.$on('categoryFilter', category => {
      this.isVisible = category
        ? this.category.toLowerCase().includes(category.toLowerCase())
        : true;
    });
  },
  beforeDestroy() {
    EventBus.$off('inputFilter');
    EventBus.$off('categoryFilter');
  },
};
</script>

<style scoped lang="scss">
.vue-searchable__item {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;

  &-move {
    transition: transform 0.5s;
  }
}
</style>
