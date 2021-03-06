import QRCode from 'qrcode'
class Maker {
  constructor(options) {
    try {
      let dom = document.createElement('canvas')
      dom.width = options.width || 0
      dom.height = options.height || 0
      dom.style.position = 'fixed'
      dom.style.left = '15000px'
      dom.style.bottom = '-15000px'
      this.canvas = document.body.appendChild(dom)
    } catch (error) {
      console.error(error)
    }
    this.ctx = this.canvas.getContext('2d')
    if (options.backgroundColor) {
      this.putFillRect({
        background: options.backgroundColor,
        width: options.width,
        height: options.height
      })
    }
  }
  /**
   * 放一个矩形
   *
   * @param {*} { background = '#fff', width = 0, height = 0, x = 0, y = 0, rotate = 0 }
   * @returns
   * @memberof Maker
   */
  putFillRect ({ background = '#fff', width = 0, height = 0, x = 0, y = 0, rotate = 0 }) {
    this.ctx.save()
    this.ctx.fillStyle = background
    if (rotate) {
      let centerX = x + width / 2
      let centerY = y + height / 2
      // 把图层坐标原点设置在中心点上
      this.ctx.translate(centerX, centerY)
      // 愉快地旋转
      this.ctx.rotate(rotate * Math.PI / 180)
      // 图层坐标原点回到坐标原点
      this.ctx.translate(-centerX, -centerY)
      // 将坐标原点转移到目的地
      this.ctx.translate(x, y)
      // 放毒
      this.ctx.rect(0, 0, width, height)
    } else {
      // 将坐标原点转移到目的地
      this.ctx.translate(x, y)
      // 放毒
      this.ctx.fillRect(0, 0, width, height)
      // 把坐标原点放回去
    }
    this.ctx.translate(-x, -y)
    // 回滚,让ctx对象回到图层上
    this.ctx.restore()
    return Promise.resolve()
  }
  /**
   * 放一条线
   *
   * @param {*} { width = 1, lineWidth = width, color = '#000', start = { x: 0, y: 0 }, end = null }
   * @returns
   * @memberof Maker
   */
  putLine ({ width = 1, lineWidth = width, color = '#000', start = { x: 0, y: 0 }, end = null }) {
    if (!end) return Promise.reject(new Error('请设置终点'))
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.lineWidth = lineWidth
    this.ctx.strokeStyle = color // 红色路径
    this.ctx.moveTo(start.x, start.y)
    this.ctx.lineTo(end.x, end.y)
    this.ctx.stroke()
    this.ctx.restore()
  }
  /**
   * 放一个多边形
   *
   * @param {*} { background = '', borderWidth = 0, borderColor = '', paths = [] }
   * @returns
   * @memberof Maker
   */
  putPolygon ({ background = '', borderWidth = 0, borderColor = '', paths = [] }) {
    this.ctx.save()
    this.ctx.beginPath()
    borderWidth && (this.ctx.lineWidth = borderWidth)
    borderColor && (this.ctx.strokeStyle = borderColor)
    if (paths.length <= 2) return Promise.reject(new Error('请设置至少3个端点'))
    for (let path of paths) {
      this.ctx.lineTo(path.x, path.y)
    }
    this.ctx.closePath()
    if (background) {
      this.ctx.fillStyle = background
      this.ctx.fill()
    }
    borderColor && this.ctx.stroke()
    this.ctx.restore()
    return Promise.resolve()
  }
  /**
 * 放文字
 *
 * @param {*} { text = '', x = 0, y = 0, fontSize = 12, rotate = 0, textBaseline = 'middle', color = '#000', fontColor = color, align = 'left', fontWeight = 'normal', fontFamily = 'sans-serif' }
 * @returns
 * @memberof Maker
 */
  putText ({ text = '', x = 0, y = 0, fontSize = 12, rotate = 0, textBaseline = 'middle', color = '#000', fontColor = color, align = 'left', fontWeight = 'normal', fontFamily = 'sans-serif' }) {
    this.ctx.save()
    this.ctx.translate(x, y)
    this.ctx.rotate(rotate * Math.PI / 180 || 0)
    this.ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
    this.ctx.textAlign = align
    this.ctx.textBaseline = textBaseline
    this.ctx.fillStyle = fontColor || '#000'
    this.ctx.fillText(text, 0, (fontSize / 2) + 2)
    this.ctx.translate(-x, -y)
    this.ctx.font = `${12}px sans-serif`
    this.ctx.fillStyle = '#000'
    this.ctx.restore()
    return Promise.resolve()
  }
  /**
   * 放文段, 可换行
   *
   * @param {*} { text = '', x = 0, y = 0, fontSize = 12, textBaseline = 'middle', color = '#000', width = 0, fontColor = color, align = 'left', fontWeight = 'normal', fontFamily = 'sans-serif' }
   * @memberof Maker
   */
  async putParagraph ({ text = '', x = 0, y = 0, fontSize = 12, textBaseline = 'middle', lineHeight = 1.2, color = '#000', width = 200, fontColor = color, align = 'left', fontWeight = 'normal', fontFamily = 'sans-serif' }) {
    if (!text) {
      return Promise.reject(new Error('请输入文段'))
    }
    text = text.replace(/↵/g, '|')
    text = text.replace(/\n/g, '|')
    text += '|'
    let tempStr = ''
    this.ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
    let line = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== '|' && this.ctx.measureText(tempStr).width <= width) {
        tempStr += (text[i] === '|' ? '' : text[i])
      } else {
        await this.putText({
          text: tempStr,
          x: x,
          y: y + ((fontSize * lineHeight + 4) * line),
          fontSize,
          textBaseline,
          color,
          fontColor,
          align,
          fontFamily,
          fontWeight
        })
        line++
        tempStr = (text[i] === '|' ? '' : text[i])
      }
    }
    return Promise.resolve()
  }
  /**
   * 放图片
   *
   * @param {*} { img = '', x = 0, y = 0, width = 0, height = 0, rotate = 0 }
   * @returns
   * @memberof Maker
   */
  async putImg ({ img = '', x = 0, y = 0, width = 0, height = 0, rotate = 0 }) {
    // 搞事之前,先保存
    this.ctx.save()
    let imgDom = null
    let w = width
    let h = height
    if (!img) return Promise.reject(new Error('请传入图片路径或者dom对象'))
    if (typeof img === 'string') {
      imgDom = await this.loadImg(img)
    } else {
      imgDom = img
    }
    this.ctx.save()
    if (rotate) {
      let centerX = x + w / 2
      let centerY = y + h / 2
      // 把图层坐标原点设置在中心点上
      this.ctx.translate(centerX, centerY)
      // 愉快地旋转
      this.ctx.rotate(rotate * Math.PI / 180)
      // 图层坐标原点回到坐标原点
      this.ctx.translate(-centerX, -centerY)
      // 将坐标原点转移到目的地
      this.ctx.translate(x, y)
      // 放毒
      this.ctx.drawImage(imgDom, 0, 0, w, h)
    } else {
      // 将坐标原点转移到目的地
      this.ctx.translate(x, y)
      // 放毒
      this.ctx.drawImage(imgDom, 0, 0, w, h)
      // 把坐标原点放回去
    }
    this.ctx.translate(-x, -y)
    // 回滚,让ctx对象回到图层上
    this.ctx.restore()
    // 下一步
    return Promise.resolve()
  }
  // 放置圆形图片
  /**
   * 放圆形图片
   *
   * @param {*} { img = '', x = 0, y = 0, width = 0, height = 0, rotate = 0 }
   * @returns
   * @memberof Maker
   */
  async putCircularImg ({ img = '', x = 0, y = 0, width = 0, height = 0, rotate = 0 }) {
    // 搞事之前,先保存
    this.ctx.save()
    let imgDom = null
    let w = width
    let h = height
    if (!img) return Promise.reject(new Error('请传入图片路径或者dom对象'))
    if (typeof img === 'string') {
      imgDom = await this.loadImg(img)
    } else {
      imgDom = img
    }
    this.ctx.save()
    if (rotate) {
      let centerX = x + w / 2
      let centerY = y + h / 2
      // 把图层坐标原点设置在中心点上
      this.ctx.translate(centerX, centerY)
      // 愉快地旋转
      this.ctx.rotate(rotate * Math.PI / 180)
      // 图层坐标原点回到坐标原点
      this.ctx.translate(-centerX, -centerY)
      // 将坐标原点转移到目的地
      this.ctx.translate(x, y)
      this.ctx.beginPath()
      let round = w > h ? h / 2 : w / 2
      this.ctx.arc(round, round, round, 0, 2 * Math.PI)
      this.ctx.clip()
      // 放毒
      this.ctx.drawImage(imgDom, 0, 0, w, h)
    } else {
      // 将坐标原点转移到目的地
      this.ctx.translate(x, y)
      this.ctx.beginPath()
      let round = w > h ? h / 2 : w / 2
      this.ctx.arc(round, round, round, 0, 2 * Math.PI, false)
      this.ctx.clip()// 剪切图片
      // 放毒
      this.ctx.drawImage(imgDom, 0, 0, w, h)
    }
    this.ctx.translate(-x, -y)
    // 回滚,让this.ctx对象回到图层上
    this.ctx.restore()
    // 下一步
    return Promise.resolve()
  }
  /**
   * 放二维码
   *
   * @param {*} { text = '', width = 200, height = width, margin = 0, errorCorrectionLevel = 'H', x = 0, y = 0, rotate = 0, logo = '', logoWidth = width / 3, logoHeight = logoWidth }
   * @returns
   * @memberof Maker
   */
  async putQrcode ({ text = '', width = 200, height = width, margin = 0, errorCorrectionLevel = 'H', x = 0, y = 0, rotate = 0, logo = '', logoWidth = width / 3, logoHeight = logoWidth }) {
    if (!text) {
      return Promise.reject(new Error('请输入文案'))
    }
    let qrcode = await QRCode.toDataURL(text, {
      margin,
      errorCorrectionLevel,
      width
    })
    await this.putImg({
      img: qrcode,
      width,
      height,
      x,
      y,
      rotate
    })
    if (logo) {
      await this.putImg({
        img: logo,
        width: logoWidth,
        height: logoHeight,
        x: x + (width - logoWidth) / 2,
        y: y + (height - logoHeight) / 2,
        rotate
      })
    }
    return Promise.resolve()
  }

  /**
   * 获取最终图片
   *
   * @returns base64
   * @memberof Maker
   */
  canvasToDataUrl (type = 'image/jpeg', value = 1.0) {
    return new Promise(resolve => {
      resolve(this.canvas.toDataURL(type, value))
    })
  }
  /**
   *将路径的图片读取为dom
  *
  * @param {*} url
  * @returns
  * @memberof Maker
  */
  loadImg (url) {
    const _this = this
    return new Promise((resolve, reject) => {
      let img = new Image()
      if (url.indexOf(';base64,') === -1) {
        img.crossOrigin = 'Anonymous'
        img.onload = function () {
          resolve(_this.getBase64Image(img))
        }
      } else {
        img.onload = function () {
          resolve(img)
        }
      }
      img.onerror = function () {
        reject(new Error('图片下载失败'))
      }
      img.src = url
    })
  }
  async getBase64Image (img) {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, img.width, img.height) // 绘制相同图片
    return this.loadImg(canvas.toDataURL('image/png')) // 转换成base64数据
  }
  getContext () {
    return this.ctx
  }
  getCanvas () {
    return this.canvas
  }
}

export default Maker
