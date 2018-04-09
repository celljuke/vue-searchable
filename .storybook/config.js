import Vue from 'vue'
import VueSearchable from '@src/index'
import {configure} from '@storybook/vue'

// register VueSearchable
Vue.use(VueSearchable);

// automatically import all stories.js file in __dev__ folders
const regions = require.context('../src/components', true, /__stories__\/index.js$/);

function loadStories() {
  regions.keys().forEach(filename => regions(filename));
}

configure(loadStories, module);
