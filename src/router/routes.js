export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '',
    component: function (resolve) {
      require(['../views/home'], resolve)
    }
  }
]
