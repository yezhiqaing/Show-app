 

项目介绍
《叩丁严选》项目是受新中产喜爱的生活方式品牌，覆盖居家生活、服饰鞋包、美食酒水、个护清洁、母婴亲子、运动户外、数码加点、严选全球8大品类。该项目是一个使用Vant-weapp搭建的微信小程序商城。包含 模块









         
      
          2、对wx.request进行网络请求，并结合promise对请求进行封装；

3、封装api.js，对项目所有api请求进行统一管理；

4、使用async+await处理封装过的异步请求，将异步函数同步化，请求时不使用回调函数的写法；

5、实现自定义tabbar，使用custom-tab-bar，结合Vant Weapp中的组件进行自定义；

6、实现搜索功能节流防止多次发请求

7、 实现购物车修改商品的数量，规格，以及全选，单选结算功能

8、封装强制登录跳转的工具函数，实现登录后返回原来页面的功能，利用globalData存储是否需要返回原来页面的标志；

9、针对自定义的tabbar不能使用navigate的相关操作，利用globalData存储是否是来自自定义tabbar的跳转，从而区分返回原来页面是tabbar的切换还是普通页面的跳转；

10、使用wx.setStorageSync和wx.getStorageSync对token对用户信息和token进行存储和操作；

11、使用wxs对价格等数据的格式进行过滤和重复利用；

12、使用template对相同布局的结构进行抽取和重复利用；

13、使用rich-text渲染后端返回的富文本；

14、使用less预编译语言对项目样式进行快速开发；


          
          
          
  项目截图
  ----
  首页
  ----
  
![屏幕截图 2023-03-11 115744](https://user-images.githubusercontent.com/111115896/224466233-a1de9a12-4f31-442e-a646-cd8ac28058f7.png)

专题页
----

 ![屏幕截图 2023-03-11 115846](https://user-images.githubusercontent.com/111115896/224466274-4680de66-d92f-4eb4-acf6-7fae84dcdce8.png)

分类页
----
![屏幕截图 2023-03-11 115924](https://user-images.githubusercontent.com/111115896/224466292-06871884-48ad-4edc-9d1a-e2edb610739c.png)

购物页
----
![屏幕截图 2023-03-11 120126](https://user-images.githubusercontent.com/111115896/224466308-7eb776eb-86cc-47a8-b48d-f047ab8efc7b.png)

我的页
----
![屏幕截图 2023-03-11 120146](https://user-images.githubusercontent.com/111115896/224466317-dffb0bd7-f55e-4f27-aeed-69c49e336d52.png)

搜索页
----
![屏幕截图 2023-03-11 120210](https://user-images.githubusercontent.com/111115896/224466327-1d30087a-ad3e-43ed-9311-b1b397c4bb6b.png)

商品列表页
----
![屏幕截图 2023-03-11 120238](https://user-images.githubusercontent.com/111115896/224466358-adfdc47b-bf48-46f5-9474-3d77e23cfad7.png)

分类跳转页面
----
![屏幕截图 2023-03-11 120316](https://user-images.githubusercontent.com/111115896/224466439-8e2b0668-b8bb-4cda-99b4-26fb0a3f3df0.png)

商品详情页
----
![屏幕截图 2023-03-11 120523](https://user-images.githubusercontent.com/111115896/224466449-0f08ee48-a4be-436d-b51d-3020540c5aba.png)

订单页
----
![屏幕截图 2023-03-11 120417](https://user-images.githubusercontent.com/111115896/224466455-b11ac525-b01e-445b-b512-295886644e97.png)






