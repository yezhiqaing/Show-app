// pages/home/home.js
import {GethomeData} from '../../request/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner:[],
        channel:[],
        brandList:[],
        hotGoodsList:[],
        categoryList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
   async onLoad(options) {
     this.GethomeData()
    },
   async GethomeData(){
        let result= await GethomeData("/index/index")
          let {banner,channel,brandList,newGoodsList,hotGoodsList,categoryList}=result.data
          channel.map(item=>{
              item.url=""
          })
          this.setData({
              banner:banner,
              channel:channel,
              brandList:brandList,
              newGoodsList:newGoodsList,
              hotGoodsList:hotGoodsList,
              categoryList:categoryList

          })
    },
    gopopup(){
        wx.navigateTo({
            url:"/pages/popup/popup"
        })
    },
    gotobro(e){
   let item=JSON.stringify(e.currentTarget.dataset.item)
        wx.navigateTo({
         url:`/pages/brotherCategory/brotherCategory?item=${item}`
     })
    },

    gotobrid(e){
        let bran=JSON.stringify(e.currentTarget.dataset.bran)
        wx.navigateTo({
          url: `/pages/brand/brand?bran=${bran}`,
        })
    },
    // 去详情
    gotoditail(e){
        let {id}=e.currentTarget.dataset
         wx.navigateTo({
           url: `/pages/details/details?id=${id}`,
         })
    }
})