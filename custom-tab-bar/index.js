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
            this.setData({
                active:e.detail
            })
         wx.switchTab({
           url:this.data.list[e.detail].pagePath,
         })
        
        } 
    }
})