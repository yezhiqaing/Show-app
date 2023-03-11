// pages/orders/orders.js
import {
    getaie
} from "../../request/api.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        options: [],
        show: false,
        arrobj: {},
        time: null,
        ding: Math.random().toFixed(15).slice(-15), // 随机生成六位数
        count: 0

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let oreitem = JSON.parse(options.orditem)
        let price=0
        oreitem.map(item => {
            price+= item.number * item.market_price
        })
        this.setData({
            count: price,
            options: oreitem,
            arrres: [],
            time: new Date().toLocaleString()
        })
        this.getaie()
    },
    // 获取地址
    async getaie() {
        let result = await getaie({})
        this.setData({
            arrres: result.data
        })
    },
    // 关闭弹层 
    addrClose() {
        this.setData({
            show: false
        })
    },
    //  地址改变时触发
    onChange(e) {
        this.setData({
            arrobj: this.data.arrres[e.detail],
            show: false
        })
    },
    addshow() {
        console.log('eee');
        this.setData({
            show: true
        })
    }

})