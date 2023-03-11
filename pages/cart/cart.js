 import {
     cartdata,
     checkadd,
     steepchecked,
     detailchecked
 } from "../../request/api"
 Page({

     /**
      * 页面的初始数据
      */
     data: {
         cartdata: [],
         resul: [],
         checked: false, //全选框
         counprice: 0, //总价格
         cartshoop: 0, // 购物车总数量
         isEditing: false, // 是否在编辑状态
         arr: [],
     },


     onLoad(options) {
         this.cartdata()
     },

     onShow() {
         this.getTabBar().setData({
             active: 3
         })
         //  this.cartdata()
     },
     //  单选
     async xuChange(e) {

         if (e.currentTarget.dataset.item.checked === 0) {

             this.data.arr.push(e.currentTarget.dataset.item)
         } else {
             this.data.arr.map(item => {
                 if (item.id === e.currentTarget.dataset.item.id) {
                     this.data.arr.splice(item, 1)
                     console.log(item);
                 }
             })
         }


         if (this.data.isEditing) {
             return
         }
         let {
             product_id,
             checked
         } = e.currentTarget.dataset.item
         let result = await checkadd({
             data: {
                 isChecked: checked === 1 ? 0 : 1,
                 productIds: product_id.toString()
             },
             method: "POST"
         })

         this.resobe(result)
     },
     //  全选
     async onquancheck() {
         if (!this.data.checked) {

             this.setData({
                 arr: [...this.data.cartdata]
             })
         } else {
             this.data.arr = []
         }
         let ids = this.data.cartdata.map(item => item.product_id)
         let result = await checkadd({
             data: {
                 isChecked: this.data.checked === true ? 0 : 1,
                 productIds: ids.join(',')
             },
             method: "POST"
         })
         this.resobe(result)




     },
     async onChange(event) {

         this.setData({
             resul: event.detail
         })


     },
     //  购物车数据
     async cartdata() {
         let result = await cartdata()
         //   数据 checked  选中的数据
         let arr = []
         //    循环数据 拿到选中的值 赋值给数组
         result.data.cartList.map(item => {
             if (item.checked) {
                 arr.push(item.product_id + "")
             }
         })

         //   改变价格保留2位小数
         result.data.cartList.forEach(item => {
             item.retail_price = item.retail_price.toFixed(2)
         })

         // 循环所有的checked 是否为1 为1的话就全选
         let isyes = result.data.cartList.every(item => {
             return item.checked
         })
         this.setData({
             cartdata: result.data.cartList,
             checked: isyes ? true : false,
             resul: arr,
             cartshoop: result.data.cartTotal.goodsCount,
             counprice: result.data.cartTotal.checkedGoodsAmount,
         })




     },
     // 编辑关闭
     bian() {
         this.setData({
             isEditing: !this.data.isEditing
         })
     },
     //  编辑
     async steeperchecked(e) {
         console.log(e);
         let {
             goods_id,
             id,
             product_id
         } = e.currentTarget.dataset.item
         let result = await steepchecked({
             data: {
                 goodsId: goods_id,
                 number: e.detail,
                 id: id,
                 productId: product_id
             },
             method: "POST"
         })
         this.resobe(result)
     },
     //  删除
     async deltecheck(e) {
         let {
             priid
         } = e.currentTarget.dataset

         let result = await detailchecked({
             data: {
                 productIds: priid.toString(),
             },
             method: "POST"
         })
         this.resobe(result)
     },
     //  赋值数据 和从新调用数据
     resobe(e) {
         this.cartdata()
         this.setData({
             counprice: e.data.cartTotal.checkedGoodsAmount,
         })
     },
     // 提交订单
     onClickButton() {

         let arr = JSON.stringify(this.data.arr)
         wx.navigateTo({
             url: `/pages/orders/orders?orditem=${arr}`,
         })
         this.setData({
             checked: false
         })
         this.setData({
             cartdata: [],
             counprice: 0
         })
     }

 })