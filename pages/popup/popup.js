import {Gethistroyapi,goodsSearch,Tipslist} from '../../request/api'

let timer=null
Page({

    data: {
        // 控制组件的显示
        blockShow:1,
        defaultKeyword:"",
        // 历史搜索列表
        historyKeywordList:[],
        // 热门列表
        hotKeywordList:[],
        keyword:"",
        // 商品数据
        Goodslist:[],
        // 分类表数据
        filterCategory:[],
        filterCategoryId:0,
        page:1,
        size:10,
        order:"desc",
        categoryId:0,
        sort:"id",
        count:0, //总数据多少条

        // 实时搜索数据
         Tipslist:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.Gethistroyapi()
    },
    //  取消
    onCancel(){
        wx.navigateBack({
            url:"/pages/home/home"
        })
    },
    //  搜索框数据 历史记录  热门记录
   async Gethistroyapi(){
      let result= await  Gethistroyapi('/search/index')
      let {defaultKeyword,historyKeywordList,hotKeywordList}=result.data
      this.setData({
        defaultKeyword,historyKeywordList,hotKeywordList
      })
     
    },
    // 子组件 点击热门记录 触发
    chanblockShow(val){
        this.setData({
            blockShow:val.detail.num,
            keyword:val.detail.keyword
        })
        this.goodsSearchFn()
    },
    //  商品列表请求
  async  goodsSearchFn(){
      let result=  await  goodsSearch({data:{keyword:this.data.keyword,page:this.data.page,size:this.data.size,order:this.data.order,categoryId:this.data.categoryId,sort:this.data.sort}})
       let {goodsList,filterCategory,count}=result.data
        // 改造数据在传给子
      let arr= filterCategory.map(item=>{
           return {text:item.name,value:item.id}
       })
    //    筛选数据 给 子 下拉分类
     let cid = filterCategory.filter(item=> item.checked)    
      this.setData({
        Goodslist:[...goodsList,...this.data.Goodslist],
        filterCategory:arr,
        count:count,
        filterCategoryId:cid[0].id
      })
    },
    //  输入框回车事件
    onSearch(e){
     this.setData({
        blockShow:2,
        keyword:e.detail,
        categoryId:0
     })
     this.goodsSearchFn()
    },
    // 分类的改变
    categoryChange(e){
    
       this.setData({
           keyword:this.data.keyword,
            categoryId:e.detail,
            sort:"id"
        })
       this.goodsSearchFn()
    },
    //  价格的 自定义事件
    ProceChang(e){
        console.log(e);
        this.setData({
        
               keyword:this.data.keyword,
                categoryId:0,
                order:e.detail,
                sort:"price"
            })
           this.goodsSearchFn()
    },
    // 实时搜索功能
 onChange(e){
    this.setData({
        blockShow:3
       })
      if(timer){
           clearTimeout(timer)
      }
    timer=setTimeout(async ()=>{
        let result= await  Tipslist({data:{keyword:e.detail}})
         this.setData({
            Tipslist:result.data
         })
       },500)
    
    } ,
    //  上拉加载更多
    onReachBottom(){
        if(this.data.page*this.data.size>=this.data.count){
            wx.showToast({
              title: '商品加载完毕',
            })
            return
        }
     this.setData({
         page:this.data.page+1
     })
     this.goodsSearchFn()
    },
})