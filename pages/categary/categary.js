import {Catery,getCat} from "../../request/api"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        categoryList:[],
        activeKey: 0,
        currentCategory:{}  //当前分类页第一项
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
         this.catego()
       
    },
    onShow() {
        this.getTabBar().setData({
            active:2
        })
    },
    //  侧边栏数据
   async  catego(){
        let result=await Catery()
        this.setData({
            categoryList:result.data.categoryList,
            currentCategory:result.data.currentCategory
        })

     },
     search(){
        wx.navigateTo({
          url: '/pages/popup/popup',
        })
     },
    //  分类栏点击事件
   async  onsidebarChange(e){
        let result= await getCat({data:{id:e.currentTarget.dataset.id}})
           this.setData({
            currentCategory:result.data.currentCategory
           })
        
     },
     gotoditai(e){
      
       let item=JSON.stringify(e.currentTarget.dataset.item)
       wx.navigateTo({
        url:`/pages/brotherCategory/brotherCategory?item=${item}`
    })
     }

    
})