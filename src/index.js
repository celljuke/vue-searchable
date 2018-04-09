import VueSearchable from '@src/components/VueSearchable';
import Item from '@src/components/Item';

export {
  VueSearchable,
  Item,
};

function registerComponents(Vue, prefix) {
  Vue.component(`${prefix}vue-searchable`, VueSearchable);
  Vue.component(`${prefix}item`, Item);
}

const plugin = {
  install(Vue, options) {
    const finalOptions = Object.assign({}, {
      installComponents: true,
      componentsPrefix: '',
    }, options);

    if (finalOptions.installComponents) {
      registerComponents(Vue, finalOptions.componentsPrefix);
    }
  },
};

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
