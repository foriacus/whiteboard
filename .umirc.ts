import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
    {
      path: '/handle-reserve-room',
      component: '@/pages/HandleReserveRoom/HandleReserveRoom',
    },
  ],
  fastRefresh: {},
});
