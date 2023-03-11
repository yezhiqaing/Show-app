const baseUrl="http://kumanxuan1.f3322.net:8001"

export default function request(url,params={}){
      return new Promise((resolve,reject)=>{
          let toheard={}
          let Token =wx.getStorageSync('Token')
           if(Token){
           if(params.header){
            params.header["X-Nideshop-Token"]=Token
           }else{
            //    登陆了 没传
              toheard={
                 "X-Nideshop-Token":Token
             }
           }
           }
        wx.showLoading({
            title:"加载中..."
        })
        
          wx.request({
            url:baseUrl+url,
            data:params.data||{},
            header:params.header||toheard,
            method:params.method||'GET',
            success:function(res){
                wx.hideLoading()
                   if(res.data.errno===0){
                    resolve(res.data)
                   }else{
                       wx.showToast({
                         title:res.data.errmsg,
                         icon:"error",
                         duration:2000
                       })
                   }
                 
            },
            fail:function(err){
                reject(err)
                wx.showToast({
                    title:err||'请求错误！'
                })
            }
          })
      })
}