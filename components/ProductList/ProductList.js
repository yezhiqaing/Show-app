Component({
    properties:{
        Goodslist:{
            type:Array,
            value:[],
        },
        filterCategory:{
            type:Array,
            value:[]
        },
        filterCategoryId:{
            type:Number,
            value:0
        }
    },
  data:{
    option1: [
        { text: '价格由高到低', value: "desc" },
        { text: '价格由低到高', value: "asc" },
    
      ],
   
      value1: "asc",
      value2: 1005000,
  },
  methods:{
    //   分类的自定义事件
    cateChange(e){
      this.triggerEvent('fn',e.detail)
    },
    //   价格的自定义事件
    priceChane(e){
        this.triggerEvent('fn2',e.detail)
   
    }
  }
})