// pages/topic/topic.js
import {Specialdata} from "../../request/api"
Page({

    /**
     * 页面的初始数据
     */
    data: {
       page:1,
       size:10,
       Special:[],
       count:1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.Specialdata()
    },
    onShow() {
        this.getTabBar().setData({
            active: 1
        })
    },
  async  Specialdata(){
         let result= await Specialdata({data:{
            page:this.data.page,
            size:this.data.size
        }})
        // console.log(result);
         let {data,count}=result.data
         this.setData({
            Special:data ,
            count:count  
        })
    },
    onclick(e){
        let {isok}= e.currentTarget.dataset
        if(isok==="true"){
            this.data.page--
            if(this.data.page<=0){
           
                wx.showToast({
                  title: '已经没数据',
                  icon:"error"
                })
                return
            }
            this.Specialdata()
        }else{
            if(this.data.page*this.data.size>=this.data.count){
                wx.showToast({
                    title: '已经没数据',
                    icon:"error"
                  })
                return
            }
            this.data.page++
            this.Specialdata()

        }
    }
})