<template>
  <div class="home-page">
    <img :src="poster" alt="" srcset="">
  </div>
</template>

<script>
import Maker from '@/index'
export default {
  data () {
    return {
      poster: ''
    }
  },
  methods: {
  },
  async created () {
    let maker = new Maker({
      width: 370,
      height: 500,
      backgroundColor: '#fff'
    })
    await maker.putText({
      text: '23333',
      x: 100,
      y: 100,
      rotate: 45
    })
    await maker.putText({
      text: '23333',
      x: 200,
      y: 120,
      rotate: 90,
      fontSize: 30,
      color: '#666'
    })
    await maker.putRoundImg({
      img: require('@/assets/img/avatar.jpg'),
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      rotate: 90
    })
    await maker.putImg({
      img: require('@/assets/img/avatar.jpg'),
      x: 110,
      y: 10,
      width: 100,
      height: 100,
      rotate: 90
    })
    await maker.putQrcode({
      text: 'http://www.baidu.com',
      x: 10,
      y: 200,
      logo: require('@/assets/img/avatar.jpg'),
      width: 200,
      height: 200
    })
    this.poster = await maker.canvasToDataUrl()
  }
}
</script>

<style lang="scss" scoped>
.detail{

}
</style>
