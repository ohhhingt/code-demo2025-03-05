## AJAX是什么
![10251](../images/10月/10-25/1.png){width=600px}

![10252](../images/10月/10-25/2.png){width=600px}

## axios的使用
![10253](../images/10月/10-25/3.png){width=600px}

请求 获取 渲染使用
![10254](../images/10月/10-25/4.png){width=600px}

## url 统一资源定位符
![10255](../images/10月/10-25/5.png){width=600px}

![10256](../images/10月/10-25/6.png){width=600px}

![10257](../images/10月/10-25/7.png){width=600px}

![10258](../images/10月/10-25/8.png){width=600px}

![10259](../images/10月/10-25/9.png){width=600px}

注意右边的返回数据 上面和下面是不同的

因为axios返回的数据是包装过的
![102510](../images/10月/10-25/10.png){width=600px}

![102511](../images/10月/10-25/11.png){width=600px}

## params查询参数 获取想要的指定资源
![102512](../images/10月/10-25/12.png){width=600px}

![102513](../images/10月/10-25/13.png){width=600px}

![102514](../images/10月/10-25/14.png){width=600px}

## 请求方法 和 注册(提交POST)
![102515](../images/10月/10-25/15.png){width=600px}

![102516](../images/10月/10-25/16.png){width=600px}

## 错误信息处理返回
![102517](../images/10月/10-25/17.png){width=600px}

## 请求报文
![102518](../images/10月/10-25/18.png){width=600px}

第一行是请求行
由请求方式 请求地址 和协议构成

第二部分 一大段都是请求头
中间只关注Content-Type:application/json数据即可
Content-Type:application/json要求我们发一个JSON数据过去 告诉服务器 我们发送的是一个什么数据过去

第三部分 是空行 分隔请求头 空行之后的是发送给服务器的资源

第四部分 发送的资源
![102519](../images/10月/10-25/19.png){width=600px}

这里标头就是 请求报文
![102520](../images/10月/10-25/20.png){width=600px}

请求报文在第三个部分

然后一开始显示的数据是浏览器处理过的

可以点原始看原来的数据
![102521](../images/10月/10-25/21.png){width=600px}

点开原始可以看到 请求行和请求头

但是没有空行 空行在新版浏览器中被去掉了
![102522](../images/10月/10-25/22.png){width=600px}

而请求体就是这个载荷

这里面的数据也是被浏览器处理过的

点查看源代码 就会看到原来的数据是JSON字符串
JSON字符串 键和值都被双引号包起来了
![102523](../images/10月/10-25/23.png){width=600px}

总结
![102525](../images/10月/10-25/25.png){width=600px}

## 如何查看请求报文 入口
控制台 => 网络

Fetch/XHR就是网络资源请求 也可以看全部

register就是资源地址
url: 'http://hmajax.itheima.net/api/register'
就像这一段后面那个

标头就是报文
![102524](../images/10月/10-25/24.png){width=600px}
## 请求报文 - 错误排查 
多了一个错误排查方法 对比控制台
![102526](../images/10月/10-25/26.png){width=600px}

注意:要先打开控制台再进行操作 不然控制台没数据

先看请求行中的 post 和 地址 看看也没有错
![102527](../images/10月/10-25/27.png){width=600px}

看看发送过去的数据有没有错
![102528](../images/10月/10-25/28.png){width=600px}

## 响应报文
也叫状态行、状态头、状态体
HTTP/1.1是协议

400是HTTP响应状态码

Requset是状态信息

返回的数据不在载荷 在响应里

也可以看预览 预览是浏览器处理过的响应信息
![102529](../images/10月/10-25/29.png){width=600px}

400错误说明就是我们的错误

200错误表示成功

500错误一般和后端有关
![102530](../images/10月/10-25/30.png){width=600px}

![102531](../images/10月/10-25/31.png){width=600px}

## 接口文档
query表示是 查询参数 用params

string是字符型
![102532](../images/10月/10-25/32.png){width=700px}

query表示要填一个值在url ?后面

或者使用代码params
![102533](../images/10月/10-25/33.png){width=600px}

body参数就是请求体参数

四个必须的选项参数
![102534](../images/10月/10-25/34.png){width=600px}

post请求方式 url地址

body要求请求体参数

要求两个值username 和 password
![102535](../images/10月/10-25/35.png){width=600px}

## 经典用户登录案例
![102536](../images/10月/10-25/36.png){width=600px}

## 我注册的it黑马账号
密码是123456
![102537](../images/10月/10-25/37.png){width=600px}

## 收集表单数据的插件
input必须有name属性
![102538](../images/10月/10-25/38.png){width=600px}

## 聊天机器人
![102539](../images/10月/10-25/39.png){width=600px}

## bootstrap弹框
有属性控制 和 js控制 

js相对来讲更好控制 不仅可以设置显示隐藏
还可以在显示前 和 隐藏后做一些事情
![10281](../images/10月/10-28/1.png){width=600px}

# 图书案例

## 渲染列表
创建一个函数 并在打开时就执行一次

在函数中使用axios获取服务器资源并渲染到ul列表中
![10282](../images/10月/10-28/2.png){width=600px}

## 新增图书
![10283](../images/10月/10-28/3.png){width=600px}

## 删除图书
![10284](../images/10月/10-28/4.png){width=600px}

## 编辑图书(回显表单+编辑数据)
![10285](../images/10月/10-28/5.png){width=600px}

## 图片上传 并且修改背景图片
![10286](../images/10月/10-28/6.png){width=600px}

## 个人信息渲染
![10287](../images/10月/10-28/7.png){width=600px}

## 个人信息渲染-头像修改
![10288](../images/10月/10-28/8.png){width=600px}

## XMLHttpRequest
![10291](../images/10月/10-29/1.png){width=600px}

![10292](../images/10月/10-29/2.png){width=600px}

![10293](../images/10月/10-29/3.png){width=600px}

## 使用原生XML对象 结合 查询参数 发起请求
![10294](../images/10月/10-29/4.png){width=600px}

![10295](../images/10月/10-29/5.png){width=600px}

## Promise
![10296](../images/10月/10-29/6.png){width=600px}

![10297](../images/10月/10-29/7.png){width=600px}

## Promise的三种状态
![10298](../images/10月/10-29/8.png){width=600px}

![10299](../images/10月/10-29/9.png){width=600px}

## Promise + XHR 获取省份列表
![102910](../images/10月/10-29/10.png){width=600px}

## 封装简易axios 获取省份列表
在上一个案例的基础上 把Promise和四步 封装起来
![102911](../images/10月/10-29/11.png){width=600px}

## 封装简易axios 携带查询参数
![102912](../images/10月/10-29/12.png){width=600px}

## 封装简易axios 注册
通过调用反推 应该要传什么数据

以及怎么封装这些数据

发现是封装XML四步中的 第四步发送可以使用if判断
是否有data参数 如果有那么设置请求头和处理数据
然后将处理好的数据填进send()括号中发送

如果没有data那么照常发送
![102913](../images/10月/10-29/13.png){width=600px}

![102914](../images/10月/10-29/14.png){width=600px}

## 封装简易axios 注册-成功失败的处理
![102915](../images/10月/10-29/15.png){width=600px}

## 同步代码和异步代码
![10291](../images/10月/10-30/1.png){width=600px}

![10292](../images/10月/10-30/2.png){width=600px}

## 回调地狱
![10293](../images/10月/10-30/3.png){width=600px}

![10294](../images/10月/10-30/4.png){width=600px}

## Promise链式调用 解决回调地狱问题
![10295](../images/10月/10-30/5.png){width=600px}

![10296](../images/10月/10-30/6.png){width=600px}

## async await  简化Promise的.then方法
![10311](../images/10月/10-31/1.png){width=600px}

## async await 处理错误信息
async await 是用来 替代 Promoise 的成功状态的then函数的

所以失败用try...catch处理
![10312](../images/10月/10-31/2.png){width=600px}

## 事件循环
第一个图好理解 132

但是第二个图就是123吗 不是的 是132
因为要定时器是一个异步任务 所以需要先等同步任务
完成后 在执行异步任务
![10313](../images/10月/10-31/3.png){width=600px}

![10314](../images/10月/10-31/4.png){width=600px}

这里可以发现谷歌浏览器用了14个进程 是多进程
![10315](../images/10月/10-31/5.png){width=600px}

执行顺序分别为

调用栈执行同步任务(1)

任务队列等待 宿主环境处理好的任务(2)

宿主环境执行异步任务(3)

执行顺序

首先调用栈先执行console.log(1)

然后将setTimeout(() => {
    console.log(2)
}, 0)放到宿主环境中

然后将console.log(3)放到 调用栈中执行

然后将setTimeout(() => {
    console.log(4)
}, 2000)放到宿主环境中

然后将console.log(5)放到 调用栈中执行

此时135已经执行 而宿主环境中有两个定时器
一个0秒定时器 一个2秒定时器 

而0秒定时器转移到任务队列中 而调用栈疯狂查看任务队列
中有没有任务 而0秒定时器刚好出现 因此执行0秒定时器

在等待了2秒后 2秒定时器也被转移到任务队列中 然后再
转移到调用栈执行

所以最后的执行顺序为13524
![10316](../images/10月/10-31/6.png){width=600px}

调用栈处理同步任务 宿主环境收集异步任务 而调用栈空闲时
反复调用任务队列的机制 叫事件循环 这个循环往复的过程叫
事件循环
![10317](../images/10月/10-31/7.png){width=600px}
JS是单线程的 所以将异步代码放到宿主中执行
这个宿主不一定是浏览器 这里是 node也是一种宿主环境
![10318](../images/10月/10-31/8.png){width=600px}

## 宏任务和微任务
根据这张图可以知道 .then是微任务
![10319](../images/10月/10-31/9.png){width=600px}
script也是一个任务 是宏任务
![103110](../images/10月/10-31/10.png){width=600px}
然后开始执行 

先输出console.log(1)

将然后将setTimeout(() => {
    console.log(2)
}, 0)放到宿主环境中

const p = new Promise((resolve, reject) => {
    console.log(3)
    resolve(4)
})
中先执行console.log(3) 然后发现了resoleve调用
.then方法 而.then方法是微任务 因此放进微任务队列中

然后我们输出console.log(5)

然后发现剩下一个微任务和异步任务

所以先执行微任务 (所以不是什么都会进微任务 只有.then会)

然后异步任务转移到宏任务队列 然后再去调用栈执行
![103111](../images/10月/10-31/11.png){width=600px}

一个解题好方法
![103112](../images/10月/10-31/12.png){width=400px}

宏任务中先执行同步代码 然后将微任务(.then)放进微任务队列中
直到当前的同步和微任务执行完 

再去执行下一个宏任务
![103113](../images/10月/10-31/13.png){width=600px}

## Promise.all()静态方法
![103114](../images/10月/10-31/14.png){width=600px}

## 商品分类案例 
![103115](../images/10月/10-31/15.png){width=600px}

## 填省份城市地区案例
async await返回数据 解构出数据 赋值给dom
![103116](../images/10月/10-31/16.png){width=600px}