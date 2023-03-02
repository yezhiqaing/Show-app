// pages/popup/popup.js
Page({

    data: {
        blockShow:1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    //  取消
    onCancel(){
        wx.navigateBack({
            url:"/pages/home/home"
        })
    }
  
})