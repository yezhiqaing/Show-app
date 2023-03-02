const baseUrl="http://kumanxuan1.f3322.net:8001"

export default function request(url,params={}){
      return new Promise((resolve,reject)=>{
        wx.showLoading({
            title:"加载中..."
        })
          wx.request({
            url:baseUrl+url,
            data:params.data||{},
            method:params.method||'GET',
            success:function(res){
                wx.hideLoading()
                   if(res.data.errno===0){
                    resolve(res.data)
                   }else{
                       wx.showToast({
                         title: '数据请求失败',
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