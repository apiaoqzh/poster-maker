# poster-maker
一个专门用来制造二维码海报的适用于浏览器的npm插件

## 安装
```bash
npm i poster-maker --save
```

## 初始化
初始化过程中会自动生成一个不可见的canvas对象,以下所有的操作都是不可见的.**请在放置文字/图片元素时,将定位及大小精确到px**.
```JavaScript
import Maker from 'poster-maker'
export default {
  data () {
    return {
      poster: ''
    }
  },
  methods: {
  },
  async created () {
    const maker = new Maker({
      width: 750, // 海报最终生成的宽度
      height: 1334, // 海报最终生成的高度
      backgroundColor: '#fff' // 生成海报的底色,该项不设置则为空
    })
    // 放置一个旋转45度的文字
    await maker.putText({
      text: '23333',
      x: 100,
      y: 100,
      rotate: 45
    })
    // 放置一个旋转90度的文字,设置字色和字体大小
    await maker.putText({
      text: '23333',
      x: 200,
      y: 120,
      rotate: 90,
      fontSize: 30,
      color: '#666'
    })
    // 放置一个圆形图片
    await maker.putCircularImg({
      img: require('@/assets/img/avatar.jpg'),
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      rotate: 90
    })
    // 放置一个图片
    await maker.putImg({
      img: require('@/assets/img/avatar.jpg'),
      x: 110,
      y: 10,
      width: 100,
      height: 100,
      rotate: 90
    })
    // 放置一个二维码
    await maker.putQrcode({
      text: 'http://www.baidu.com',
      x: 10,
      y: 200,
      logo: require('@/assets/img/avatar.jpg'),
      width: 200,
      height: 200
    })
    // 导出
    this.poster = await maker.canvasToDataUrl()
  }
}

```
![preview](https://apiaodev-1256180692.cos.ap-chengdu.myqcloud.com/preview.png)
## API

### putFillRect(options)
放置一个矩形<br>
**参数:**
|参数名|默认值|描述|
|---|---|---|
background|#fff|填充色|
width|0|宽度|
height|0|高度|
x|0|相对于左上角x轴定位|
y|0|相对于左上角y轴定位|
rotate|0|旋转角度


```JavaScript
await maker.putFillRect({
  background: '#fff'
  width: 750
  height: 1334
})
```

### putImg(options)
放置一个图片<br>
**参数:**
|参数名|默认值|描述|
|---|---|---|
img||图片的路径或者是图片的DOM对象
width|0|宽度|
height|0|高度|
x|0|相对于左上角x轴定位|
y|0|相对于左上角y轴定位|
rotate|0|旋转角度


```JavaScript
await maker.putImg({
  img: require('@/assets/img/avatar.jpg'),
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  rotate: 90
})
```

### putCircularImg(options)
放置一个裁切成圆形的图片<br>
**参数:**
|参数名|默认值|描述|
|---|---|---|
img||图片的路径或者是图片的DOM对象|
width|0|宽度|
height|0|高度|
x|0|相对于左上角x轴定位|
y|0|相对于左上角y轴定位|
rotate|0|旋转角度


```JavaScript
await maker.putCircularImg({
  img: require('@/assets/img/avatar.jpg'),
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  rotate: 90
})
```

### putQrcode(options)
放置一个二维码<br>
**参数:**
|参数名|默认值|描述|
|---|---|---|
text||二维码的内容|
width|200|宽度|
x|0|相对于左上角x轴定位|
y|0|相对于左上角y轴定位|
rotate|0|旋转角度|
margin|0|外边框|
logo||二维码中间的logo的路径或者图片DOM对象|
logoWidth|width / 3| 二维码的宽度(建议不要太大,可能会影响扫码效果)


```JavaScript
await maker.putQrcode({
  text: 'http://www.baidu.com',
  x: 10,
  y: 200,
  logo: require('@/assets/img/avatar.jpg'),
  width: 200,
  height: 200
})
```

### putText(options)
放置文字<br>

**参数:**
|参数名|默认值|描述
|---|---|---|
text||文字|
x|0|相对于左上角x轴定位|
y|0|相对于左上角y轴定位|
rotate|0|旋转角度|
fontSize|12|字体大小|
textBaseline|middle|文字的基线|
fontColor|#000|字色|
align|对齐方式| left,center,right|
fontWeight|normal|规定字体的粗细。可能的值:<br>normal<br>bold<br>bolder<br>lighter<br>100<br>200<br>300<br>400<br>500<br>600<br>700<br>800<br>900<br>|
fontFamily|sans-serif|字体

```javascript
    // 放置一个旋转90度的文字,设置字色和字体大小
    await maker.putText({
      text: '23333',
      x: 200,
      y: 120,
      rotate: 90,
      fontSize: 30,
      color: '#666'
    })
```


### putParagraph(options)
放置段落,可自动换行<br>

**参数:**
|参数名|默认值|描述
|---|---|---|
text||文段
x|0|相对于左上角x轴定位|
y|0|相对于左上角y轴定位|
width|200|最大宽度,超出宽度会自动换行|
fontSize|12|字体大小|
lineHeight| 1.2| 行高|
textBaseline|middle|文字的基线|
fontColor|#000|字色|
align|对齐方式| left,center,right|
fontWeight|normal|规定字体的粗细。可能的值:<br>normal<br>bold<br>bolder<br>lighter<br>100<br>200<br>300<br>400<br>500<br>600<br>700<br>800<br>900<br>|
fontFamily|sans-serif|字体

```javascript
// 超出width的部分会自动换行
// 可通过↵或者 \n 或者 | 进行自定义换行
    await maker.putParagraph({
      text: '君不见，黄河之水天上来，奔流到海不复回。|君不见，高堂明镜悲白发，朝如青丝暮成雪。↵人生得意须尽欢，莫使金樽空对月。↵天生我材必有用，千金散尽还复来。↵烹羊宰牛且为乐，会须一饮三百杯。↵岑夫子，丹丘生，将进酒，杯莫停。↵与君歌一曲，请君为我倾耳听。↵钟鼓馔玉不足贵，但愿长醉不愿醒。↵古来圣贤皆寂寞，惟有饮者留其名。↵陈王昔时宴平乐，斗酒十千恣欢谑。↵主人何为言少钱，径须沽取对君酌。↵五花马，千金裘，↵呼儿将出换美酒，与尔同销万古愁。',
      x: 220,
      y: 100,
      width: 250,
      fontSize: 14
    })
```

### canvasToDataUrl(type, value)
获取最终图片的base64<br>
**参数:**
|参数名|默认值|描述|
|---|---|---|
type|image/jpeg|输出格式|
value|1|输出精度(0.1-1)|

```JavaScript
let img = await maker.canvasToDataUrl()
```