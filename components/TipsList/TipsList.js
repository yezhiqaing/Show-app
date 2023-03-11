Component({
 properties:{
    Tipslist:{
        type:Array,
        value:[]
    }
 },
 methods:{
    cellClick(e){

       this.triggerEvent("fn",{num:2,keyword:e.currentTarget.dataset.keyword})
    }
 }
})