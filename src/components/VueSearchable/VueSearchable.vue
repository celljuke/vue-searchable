<template>
  <div class="vue-searchable" :class="customClass">
    <div class="search-container" :class="searchContainerClass">
      <input type="text" v-model="searchInput" @input="updateFilter" :class="searchInputClass"
             class="search-container__input"/>
    </div>
    <div class="category-filter-container" :class="filterContainerClass">
      <button class="filter-item"
              type="button"
              @click="categoryFilter(null)"
              :class="filterItemClass">All Items
      </button>
      <button class="filter-item"
              type="button"
              v-for="category in itemCategories"
              @click="categoryFilter(category)"
              :class="filterItemClass">{{category}}
      </button>
    </div>
    <transition-group name="vue-searchable__item" class="items" :class="itemContainerClass" tag="div">
      <slot></slot>
    </transition-group>
  </div>
</template>

<script>
import { EventBus } from '@src/event-bus.js';

export default {
  name: 'vue-searchable',
  props: {
    customClass: {
      default: null,
    },
    searchContainerClass: {
      default: null,
    },
    searchInputClass: {
      default: null,
    },
    itemContainerClass: {
      default: null,
    },
    filterContainerClass: {
      default: null,
    },
    filterItemClass: {
      default: null,
    },
    itemCategories: {
      type: [String, Array],
    },
  },
  data() {
    return {
      searchInput: undefined,
    };
  },
  methods: {
    updateFilter() {
      EventBus.$emit('inputFilter', this.searchInput);
    },
    categoryFilter(category) {
      EventBus.$emit('categoryFilter', category);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@design';

.vue-searchable {
  padding: 10px;

  .search-container {
    &__input {
      background-color: #efefef;
      border: none;
      height: 40px;
      padding-left: 15px;
      border-radius: 5px;
      width: 100%;
      font-size: 14px;
      outline: none;
    }
  }

  .category-filter-container {
    margin-top: 10px;
    .filter-item {
      background-color: #666;
      color: #fff;
      border: none;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      font-weight: 300;
    }

    .filter-item + .filter-item {
      margin-left: 10px;
    }
  }

  .items {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
    position: relative;
  }
}
</style>
