import {brotherCategory,goodsList} from "../../request/api"
Page({

    /**
     * 页面的初始数据
     */
    data: {
       id:null,  //分类页传来的id
       parent_id:null,//分类页传来的parent_id
       brotherCategory:[],  // tab栏数组
       currentCategory:{},
       active:null,
       Goodslist:[],
       index:0

    },

    /**
     * 生命周期函数--监听页面加载
     */
  async onLoad(options) {
    
     let item= JSON.parse(options.item)
    
     
   this.setData({
            id:item.id,
            active:item.name,
            currentCategory:item
          })
        this.brotherCategory()
      
    }, 
    // 分类的tab
 async   brotherCategory(){
      let result=await   brotherCategory({data:{
         id:this.data.id
      }})

      this.setData({
        brotherCategory:result.data.brotherCategory,
        currentCategory:result.data.currentCategory
      })

    },

    // 商品列表
   async acticheck(e){
   
        let result= await  goodsList({
           data:{
            categoryId:this.data.brotherCategory[e.detail.index].id,
            page:1,
            size:10
           }
        })
        // console.log(result);
        this.setData({
            Goodslist:result.data.goodsList,
            id:this.data.brotherCategory[e.detail.index].id
        })
        this.brotherCategory()
        
    },
 
   
})