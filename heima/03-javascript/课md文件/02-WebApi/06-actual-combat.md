# 个人实战

本次实战是对自己整个api阶段的总结

本次实战主要分为2部分 

# 个人实战文档1

## 放大镜效果（课堂讲解）

  

<img src="./06-actual-combat-assets/fdj.gif">



业务分析：

①： 鼠标经过对应`小图片`，左侧`中等图片`跟随变化

②： 鼠标经过/离开`中盒子`，右侧`大盒子`显示/隐藏

③： `黑色遮罩`盒子跟随`鼠标移动`

④： `大图片`可以跟随移动



 <img src="./06-actual-combat-assets/cha.gif">

思路分析：

**①：鼠标经过`小图片`，左侧`中图片`跟随变化**

1. 采取`事件委托`的形式，监听鼠标经过小盒子里面的`图片`， 注意此时需要使用 `mouseover` 事件，因为需要事件冒泡触发small 
2. 鼠标经过小图片，可以拿到小图片的 `src`
   - 把当前小图片的src 给 中等图片的 src 
3. 绿色边框通过添加类删除类实现。
   - 当前图片的**爸爸**li 添加类，其余移除类

   ​



**②：  鼠标经过`中盒子`，右侧`大盒子`显示/隐藏**

1. 鼠标经过时，`显示`大盒子，显示`遮罩盒子`，修改`大盒子的图片`，把中图片给大盒子做`背景`合适，因为小图片会变化

2. 鼠标离开时，`隐藏`大盒子，添加`定时器`，隐藏`遮罩盒子`

   ​

**③： 黑色遮罩盒子跟着鼠标来移动**

2.  让黑色遮罩跟着鼠标来走, 需要用到鼠标移动事件  `mousemove`  

2. 让黑色盒子的移动的核心思想：不断把鼠标在中等盒子内的`坐标`给黑色遮罩盒子` let  top` 值，这样遮罩层就可以跟着移动了。

   1. 得到鼠标在盒子内的坐标。   事件对象里面 `offsetX`  和 `offsetY` ，然后把值给 黑色遮罩盒子 top left

      - 注意会出现抖动的效果。

        - 原因：是因为鼠标移动的时候滑到黑色遮罩盒子上了，坐标有变化。

        - 解决方案： 通过CSS把黑色遮罩的盒子屏蔽掉鼠标事件。 

        - >   pointer-events: none;      设置元素是否对鼠标事件做出反应（可以理解为 鼠标穿透）

        - 如果希望鼠标再次变成移动形状，可以给 middle盒子添加   cursor: move; 

   2.  设置鼠标在黑色遮罩盒子中间位置。

      - 让鼠标offsetX的值 - 盒子宽度的一半， 就是 黑色遮罩x的坐标
      - 让鼠标offsetY的值 - 盒子高度的一半， 就是 黑色遮罩y的坐标

   3. 限定遮罩盒子在中间盒子内

      1. 如果x小于0，则黑色遮罩就不移动了，可以设置x为0

      2. 如果x大于200，则黑色遮罩就不移动了，可以设置x为 200

      3. 如果y小于0，则黑色遮罩就不移动了，可以设置y为0

      4. 如果y大于200，则黑色遮罩就不移动了，可以设置x为 200

      5. 最后修改下 200数字，中间盒子宽度/高度 - 黑色盒子宽度/高度

         ​

**④：让大盒子图片跟随移动**

1.  中间盒子移动1px，大盒子图片移动2px，所以存在2倍的关系

~~~javascript
large.style.backgroundPosition = `${-2 * x}px ${-2 * y}px`
~~~



**全部代码：**

~~~html
 <script>
    // 放大镜案例制作
    (function () {
      const small = document.querySelector('.small')
      const middle = document.querySelector('.middle')
      const large = document.querySelector('.large')
      const layerBlack = middle.children[1]
      // 1. 鼠标经过小图片中等图片跟随变化
      // 1.1 利用事件委托给小图片添加鼠标经过事件  mouseover
      small.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'IMG') {
          // console.log(111)
          // 1.2 把当前的小图片地址给中图片
          console.log(e.target.src)
          // console.log(middle.children[0])
          middle.children[0].src = e.target.src
          // 1.3 小图片的爸爸添加 active类，其余的li移除类
          // 先移除其余li 的active 
          small.querySelector('.active').classList.remove('active')
          e.target.parentNode.classList.add('active')
        }
      })

      // 2. 鼠标经过/离开中盒子，大盒子显示和隐藏
      // 2.1 鼠标经过时显示大盒子，显示遮罩盒子，修改大盒子的图片
      let timerId = null
      middle.addEventListener('mouseenter', function () {
        large.style.display = 'block'
        large.style.backgroundImage = `url(${middle.children[0].src})`
        layerBlack.style.display = 'block'
        //关闭定时器
        clearTimeout(timerId)
      })
      // 2.2 鼠标离开时，隐藏大盒子，添加定时器，隐藏遮罩盒子
      middle.addEventListener('mouseleave', function () {
        timerId = setTimeout(function () {
          large.style.display = 'none'
        }, 200)
        layerBlack.style.display = 'none'
      })

      // 3. 黑色遮罩盒子跟随鼠标移动
      // 3.1 给中盒子添加鼠标移动事件 mousemove
      middle.addEventListener('mousemove', function (e) {
        // 3.2 把当前鼠标在盒子内的坐标给黑色遮罩盒子
        // console.log(e.offsetX, e.offsetY)
        let x = e.offsetX - layerBlack.offsetWidth / 2
        let y = e.offsetY - layerBlack.offsetHeight / 2

        // 3.3 限定遮罩盒子在中盒子内移动
        console.log(x, y)
        const maxX = middle.offsetWidth - layerBlack.offsetWidth
        const maxY = middle.offsetHeight - layerBlack.offsetHeight
        x = x < 0 ? 0 : x
        x = x > maxX ? maxX : x
        y = y < 0 ? 0 : y
        y = y > maxY ? maxY : y

        layerBlack.style.top = y + 'px'  // 千万不要忘记加px
        layerBlack.style.left = x + 'px'  // 千万不要忘记加px

        // 4. 大盒子图片跟随移动 存在2倍的关系
        large.style.backgroundPosition = `${-2 * x}px ${-2 * y}px`
      })

    })();


  </script>
~~~




# 个人实战文档2

 ![67584596729](./06-actual-combat-assets/1675845967294.png)

可以面向人编程也可以面向百度编程，但是不要抄袭

错了 没思路可以抄 基础思路可以抄 大型项目才需要不同的思路

完全靠自己 和 完全靠别人 都是不对的






