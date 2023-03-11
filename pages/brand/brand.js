
Page({

    /**
     * 页面的初始数据
     */
    data: {
      bran:{},
    
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let bran=JSON.parse(options.bran)
        this.setData({
            bran:bran
        })
    },

})