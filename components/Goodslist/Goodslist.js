Component({
    properties:{
        Goodslist:{
            type:Array,
            value:[]
        }
    },

   methods:{
       
    goTodetail(e){
     let id=e.currentTarget.dataset.id

        wx.navigateTo({
            url:`/pages/details/details?id=${id}`
        })
    }
   }

 
})
