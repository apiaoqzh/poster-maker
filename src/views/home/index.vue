<template>
  <div class="home-page">
    <img :src="poster"
         alt=""
         srcset="">
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
      width: 750,
      height: 1000,
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
      color: '#00ff00'
    })
    await maker.putParagraph({
      text: '君不见，黄河之水天上来，奔流到海不复回。↵君不见，高堂明镜悲白发，朝如青丝暮成雪。↵人生得意须尽欢，莫使金樽空对月。↵天生我材必有用，千金散尽还复来。↵烹羊宰牛且为乐，会须一饮三百杯。↵岑夫子，丹丘生，将进酒，杯莫停。↵与君歌一曲，请君为我倾耳听。↵钟鼓馔玉不足贵，但愿长醉不愿醒。↵古来圣贤皆寂寞，惟有饮者留其名。↵陈王昔时宴平乐，斗酒十千恣欢谑。↵主人何为言少钱，径须沽取对君酌。↵五花马，千金裘，↵呼儿将出换美酒，与尔同销万古愁。',
      x: 220,
      y: 100,
      width: 250,
      fontSize: 14
    })
    await maker.putCircularImg({
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
    // 放一个二维码
    await maker.putQrcode({
      text: 'http://www.baidu.com',
      x: 10,
      y: 200,
      logo: require('@/assets/img/avatar.jpg'),
      width: 200,
      height: 200
    })
    // 绘制多边形
    await maker.putPolygon({
      background: 'rgba(123,123,123, 0.6)',
      borderWidth: 2,
      borderColor: '#000000',
      paths: [{
        x: 200,
        y: 100
      }, {
        x: 130,
        y: 200
      }, {
        x: 140,
        y: 300
      }, {
        x: 190,
        y: 300
      }]
    })
    // 绘制线条
    await maker.putLine({
      width: 5,
      color: 'red',
      start: {
        x: 200,
        y: 100
      },
      end: {
        x: 190,
        y: 200
      }
    })
    this.poster = await maker.canvasToDataUrl()
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  img {
    width: 750px;
  }
}
</style>
