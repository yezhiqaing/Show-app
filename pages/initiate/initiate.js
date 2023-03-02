
let time=null
Page({
 data: {
      count:3,
      mounth:'',
      timeStr:'',
     
    },
    // 点击跳转事件
    gotoindex(){
        clearInterval(time)
        wx.reLaunch({
            url:"/pages/index/index"
        })
    },
    // 获取事件
     getDate(){
       const now=new Date()
       const mounth=now.getMonth()
       const day=now.getDate()
       const data=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
       this.setData({
        mounth:data[mounth],
        timeStr:`${mounth}/${day}`
       })
     },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getDate()
        time=setInterval(()=>{
         if(this.data.count===1){
            clearInterval(time)
            wx.reLaunch({
                url:"/pages/index/index"
            })
         }
         this.setData({
            count:this.data.count-1
        })
     },1000)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})