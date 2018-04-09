import { storiesOf } from '@storybook/vue';

storiesOf('VueSearchable', module).add(
  'Default',
  () => require('./default').default,
);
