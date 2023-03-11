// custom-tab-bar/index.js

Component({
    data:{
        list:[
            {
                "pagePath": "/pages/home/home",
                "text": "首页",
                "icon":"home-o"
            },
            {
                "pagePath": "/pages/topic/topic",
                "text": "专题",
                "icon":"label-o"
            },
            {
                "pagePath": "/pages/categary/categary",
                "text": "分类",
                "icon":"apps-o"
            },
            {
                "pagePath": "/pages/cart/cart",
                "text": "购物车",
                "icon":"cart-o"
            },
            {
                "pagePath": "/pages/user/user",
                "text": "我的",
                "icon":"user-o"
            },
           

        ],
        active:0
    },
    methods:{
        onChange(e){
        
            let Token=wx.getStorageSync('Token')
           if(this.data.list[e.detail].pagePath=="/pages/cart/cart"&&!Token){ 
           getApp().globalData.logoisok=true
            getApp().globalData.logocart=true
           getApp().globalData.prevRoutes="/pages/cart/cart"
                wx.showToast({
                  title: '请先登陆',
                  duration:2000,
                  icon:"loading"
                })
            setTimeout(()=>{
                wx.switchTab({
                    url: '/pages/user/user',
                  })
            },1000)

            return
            }else{
                getApp().globalData.logoisok=false
            }
         wx.switchTab({
           url:this.data.list[e.detail].pagePath,
         })
        
        } 
    }
})