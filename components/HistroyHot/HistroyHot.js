// components/HistroyHot/HistroyHot.js
import {ClearHistoryapi} from '../../request/api'
Component({
  properties:{
    historyKeywordList:{
        type:Array,
        value:[]
    },
    hotKeywordList:{
        type:Array,
        value:[]
    },
  },
  methods:{
    //   清除历史记录
   async Clearsu(){
     let result=  await  ClearHistoryapi({methods:"POST"})
     console.log(result);
     wx.showToast({
       title: '清除成功',
       icon:"success"
     })
    },
    gotoProduct(val){
        this.triggerEvent('fn',{num:2,keyword:val.currentTarget.dataset.keyword})
    }
  }
})