import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
    {
      path: '/reserve-room',
      component: '@/pages/reserve/reserveRoom',
    },
  ],
  fastRefresh: {},
});
