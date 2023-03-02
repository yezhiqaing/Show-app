// pages/home/home.js
import {GethomeData} from '../../request/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
   async onLoad(options) {
     this.GethomeData()
    },
   async GethomeData(){
        let result= await GethomeData("/index/index")
          let {banner}=result.data
          this.setData({
              banner:banner
          })
    },
    gopopup(){
        wx.navigateTo({
            url:"/pages/popup/popup"
        })
    }
})