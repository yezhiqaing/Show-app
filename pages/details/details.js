 import {
     Getdetail,
     Goodlistx,
     addCart,
     cartshu
 } from "../../request/api"
 import molog from "../../utils/mestbetlogo"

 const app = getApp();
 Page({

     /**
      * 页面的初始数据
      */
     data: {
         id: "",
         banner: [],
         info: {},
         attribute: [],
         issue: [],
         Goodslist: [],
         isOk: false, //控制收藏的值
         show: false, //控制弹层的值
         skustep: 1, // 加入购物车数量
         productList: [],
         carttotal: null, //购物车数量

     },

     /**
      * 生命周期函数--监听页面加载
      */
     onLoad(options) {
         console.log(options.id);
         app.globalData.id = options.id
         this.setData({
             id: options.id
         })
         this.Getdetail()
         this.Goodlistx()
         this.cartshu()
     },
     //  详情页数据
     async Getdetail() {
         let result = await Getdetail({
             data: {
                 id: this.data.id
             }
         })

         let {
             gallery,
             info,
             attribute,
             issue,
             productList
         } = result.data
         info.goods_desc = info.goods_desc.replace(/<img/g, '<img class="img"')
         this.setData({
             banner: gallery,
             info: info,
             attribute: attribute,
             issue: issue,
             productList: productList
         })

     },
     //  相关产品
     async Goodlistx() {
         let result = await Goodlistx({
             data: {
                 id: this.data.id
             }
         })

         this.setData({
             Goodslist: result.data.goodsList
         })
     },
     // 收藏
     collection() {
         if (molog()) {
             return
         }
         this.setData({
             isOk: !this.data.isOk
         })
     },

     onShowSku() {
         this.setData({
             show: true
         })
     },
     onClose() {
         this.setData({
             show: false
         })
     },
     // 点击加入购物车
     async addTocart() {
         if (this.data.show) {
             //    如果true的话就关闭和发起请求
             let result = await addCart({
                 data: {
                     goodsId: this.data.id,
                     productId: this.data.productList[0].id,
                     number: this.data.skustep
                 },
                 method: "POST"
             })
             this.setData({
                 carttotal: result.data.cartTotal.goodsCount
             })
             this.onClose()

         } else {
             this.onShowSku()
         }
     },
     //   记录数量
     onChange(e) {
         this.setData({
             skustep: e.detail
         })
     },
     // 点击购物车
     goToCart() {
         if (molog()) {
             return
         }
         wx.switchTab({
             url: '/pages/cart/cart',
         })
     },
     // 购物车图标数量请求
     async cartshu() {

         let result = await cartshu({
             header: {
                 "X-Nideshop-Token": wx.getStorageSync('Token')
             },
         })
         this.setData({
             carttotal: result.data.cartTotal.goodsCount
         })

     },
    //  去往 订单页面
    gotoorders(){
        if(this.data.show){
    let {name,retail_price,list_pic_url}=this.data.info
           let orditem=JSON.stringify([
            {
                name:name,
                number:this.data.skustep,
                market_price:retail_price,
                list_pic_url:list_pic_url
               }
           ])
          wx.navigateTo({
            url: `/pages/orders/orders?orditem=${orditem}`,
          })
        }else{
            this.onShowSku()
        }
     
     }

 })