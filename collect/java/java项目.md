# java项目
```css
<style>
    /* 自定义分割线样式 */
    hr {
        border: 2px solid gray; 
    }
</style>
```

##  1.  第一次作业 第一次作业JDBC实现增删改查的4个代码
### 在DemoTest1中编写了增删改查四个 数据库方法

>   第一个方法是 一个插入的方法 
    
    因为第一个方法 和 第二个方法 都是使用psvm启动 会有冲突

    所以先注释掉一个才能使用另一个方法

::: info 这行代码可以看到连接的是student-sys的数据库

    String url = "jdbc:mysql://localhost:3306/student-sys?

    serverTimezone=Asia/Shanghai&useUnicode=true&

    characterEncoding=utf-8";
:::
    

::: info 连接的是tb_student的数据表进行操作

    String sql = "insert into tb_student

    (id,name, age, address, email) values
    
    (4,'李大明', 30, '广州', 'lidaning@qq.com')";
:::

    

>   第二个方法是修改数据 使用psvm启动

    连接的是tb_student的数据表进行操作

    修改数据不用返回数据 修改完成后直接显示 修改成功或失败就行

>   第三个方法是 testquery方法
     
    用来将tb_student表的所有数据输出出来

>   第四个方法是 testdelete方法
    
    用来删除tb_student表 id为1的数据 
```html
   <font style="color:red;font-weight:bold;">先改到这里</font> 
```
<br/><br/>



##  2.第二次作业 jdbc工具类+studentDBFun工具类+键盘录入实现登录功能
### DemoTest4.java键盘输入类 和 数据库中的数据进行对比

-   第二次作业这个是 六步全的一个数据库查找方法
    1. 注册驱动 JBDCUtils 工具类 
    2. 读取链接
    3. 获取statement
    4. 编写sql
    5. 执行Sql
    6. 处理结果集 并返回

>   键盘输入类逻辑：

    首先输入用户名和密码 然后new 出一个Student变量类 用student来设置用户名和密码

    然后将用户名和密码发送给StudentDBFun中的findStudentByNameAndPassword方法

    去数据库中查找数据 返回的结果集为空 显示登录失败 账号不存在 
    
    如果返回的结果为空 
    
    或者为一个特殊情况就是当键盘输入的和数据库中的用户名和密码一致就说明登录成功



<br/><br/>



##  3.  第三次作业 自己做的登录注册、 数据回显
### 登录注册在demo-test文件夹：
-   Login.html用到的页面

    - Login.html
    - LoginServlet.java
    - UserSearch.java

-   Register.html用到的页面

    - Register.html
    - RegisterServlet.java
    - UserInsert.java


####    首先一进去就会到index.jsp文件 可以选择跳转到Login.html 或 Register.html

>  Login.html的逻辑

    当在你Login.html填完表单 数据就会提交到LoginServlet.java 

    然后LoginServlet.java把用户和密码 发送给UserSearch.java去数据库查找用户名和密码

    然后把结果返回给userFromDB 之后再取出来 

    然后就是 把取出来的 和 之前输出的进行对比如果一致 就会在页面打印登录成功


>  Register.html的逻辑

    这个注册逻辑和登录也是差不多的 当你填完表单 Register.html

    Register.html就会把数据发送到RegisterServlet.java 

    然后RegisterServlet.java调用UserInsert.java把数据插入到数据库当中 

    不过这一次 如果插入成功返回数据给RegisterServlet.java

    如果不成功(插入失败)返回空 


### 数据回显在Shop文件夹：

-   数据回显 用到的页面

    - EchoServlet.java
    - TestRunSearchClass.java
    - index.jsp  
    - header.jsp

>   数据回显的逻辑是

    header.jsp中有表单和脚本(触发器) 发送is_hot给EchoServlet.java

    而EchoServlet.java 使用is_hot 去TestRunSearchClass.java查询数据库 然后return回EchoServlet.java

    EchoServlet.java获得数据库数据之后 把数据发送给index.jsp页面进行加载


### 附加事项：

    fun中多出了TestRunInsertClass 和 TestRunSearchClass 两个java文件
    用来测试数据库的连接 但是在第四次作业中发现可以在一个页面中使用@Test注解的方式
    在一个.java页面中测试多个数据库操作方法



<br/><br/><br/>



## 4.  第四次作业 商品列表和商品详情、用户登录和用户注册
### 这两个功能都在 shop-sys文件夹
-   商品列表页面

    - product_list.jsp
    - taggle.jsp
    - ReceiveAllDataServlet.java
    - DBUtilsTest的ReceiveAllDataTestMethod方法

-   商品详情页面

    - product_info.jsp
    - taggletwo.jsp
    - productdetaildataservlet.java
    - DBUtilsTest的QueryPidTestMethod方法
    
    <br/>
    商品列表和商品详情的逻辑

    ！先说一下product_list.jsp在header.jsp的一个列表中 

    只有当用户点击商品列表页面的时候 进入了product_list.jsp后 

    taggle.jsp触发器才会启动

>   商品列表的逻辑：

    首先product_list.jsp 引入了 taggle.jsp 

    然后在taggle.jsp中有一个触发器 发送product字符串 给
    
    ReceiveAllDataServlet.java接受到后 
    
    发给DBUtilsTest的ReceiveAllDataTestMethod方法获取 数据库的数据后

    转发给product_list.jsp页面进行显示

>   商品详情的逻辑：

    当商品列表加载出来之后用户会点击 列表中的商品 

    然后当用户点击某一个商品的时候就会发送对应的pid
    
    给productdetaildataservlet页面
    
    然后productdetaildataservlet去DBUtilsTest找QueryPidTestMethod方法
    
    去获取数据库中对应的数据 然后Return回productdetaildataservlet 
    
    之后将数据发送给product_info.jsp
  


<hr>




-   用户登录页面

    - login.jsp
    - LoginServlet.java
    - DBUtilsTest的LoginTestMethod方法

-   用户注册页面

    - register.jsp
    - RegisterServlet.java
    - DBUtilsTest的RegisterTestMethod方法

>   验证码功能 和 点击跳转登录或注册页面

    这一次还添加了验证码的功能

    验证码的逻辑是 获取前端输入的验证码后 和 后端Servlet产生的验证码进行比较

    项目启动后运行到index.jsp首页 然后可以点击登录或注册

    分别对应login.jsp 和 register.jsp两个页面


>   用户登录的逻辑：

    填完login.jsp数据发送到LoginServlet.java

    LoginServlet.java 把数据发送到DBUtilsTest的LoginTestMethod方法

    去数据库寻找用户名和密码 之后返回出来 如果不为空 继续

    碰到用户的姓名 和 用户的密码 是否一致 如果一致 就跳转到首页

>   用户注册的逻辑：

    填完register.jsp数据发送到RegisterServlet.java 

    然后将将用户输入的数据发给DBUtilsTest的RegisterTestMethod方法 
    
    该方法没有返回值 最终跳转回首页

>   用户注册 收集表单数据的特殊处理：

    这一次使用了 由上到下 由外到内的判断逻辑 方法是

    先判断表单中的两次密码是否一致 然后判断电话号码是否为空

    然后判断性别是否为空 把sex1 和 sex0 进行判断 最终赋值给sex

    然后就是验证码 
    String verificationMessage = (!randomCode.equalsIgnoreCase(mycode)) ? "Incorrect verification code" : "";
    if (verificationMessage.isEmpty()) 

    randomCode 和 mycode 不相等 则为true 表示验证码不匹配 Incorrect verification code
    如果相等 验证码匹配 赋值为空

    if (verificationMessage.isEmpty()) 判断 verificationMessage 是否为空字符串。
    如果 verificationMessage 为空字符串，意味着验证码匹配成功

    
    
    



