//   判断是否有登陆  跳回上一页的函数
const app = getApp();
export default ()=>{
    let token = wx.getStorageSync('Token')
if (!token) {
    //  获取当前页面路径
    let page = getCurrentPages()
    //   改变数据赋值
    let prevRoute = "/" + page[page.length - 1].route
       
    if (prevRoute === "/pages/details/details") {
        app.globalData.prevRoutes = prevRoute + "?id=" + app.globalData.id
        app.globalData.logoisok = true
    }

    wx.showToast({
        title: '请先登陆...',
        icon: "loading",
        duration: 2000
    })
    setTimeout(() => {
        wx.switchTab({
            url: '/pages/user/user',
        })
    }, 1000)
    return true
}
   return false
}