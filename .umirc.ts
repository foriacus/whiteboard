import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
    {
      path: '/home/reserveroom',
      component: '@/pages/home/components/HandlereserveRoom',
    },
  ],
  fastRefresh: {},
});
