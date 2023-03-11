import {
    GetLogo
} from '../../request/api'
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
const app = getApp();
Page({


    data: {
        assets: "../../assets/default_avatar.png", //登陆图片
        name: wx.getStorageSync('Token') ? JSON.parse(wx.getStorageSync("UserInfo")).nickname : "点击登陆",
        show: false, // 控制弹层
        logio_username: false, //控制 校验
        logio_password: false, //控制 校验
        username: "",
        pwd: "",
        Token: wx.getStorageSync('Token'),
        iconArr: [{
                icon: "label-o",
                text: "我的订单"
            },
            {
                icon: "bill-o",
                text: "优惠卷"
            },
            {
                icon: "goods-collect-o",
                text: "礼品卡"
            },
            {
                icon: "location-o",
                text: "我的收藏"
            },
            {
                icon: "flag-o",
                text: "我的足迹"
            },

            {
                icon: "contact",
                text: "会员福利"
            },
            {
                icon: "aim",
                text: "地址管理"
            },
            {
                icon: "warn-o",
                text: "账号安全"
            },
            {
                icon: "service-o",
                text: "联系客服"
            },
            {
                icon: "question-o",
                text: "意见反馈"
            },

        ]
    },
    onShow() {
        this.getTabBar().setData({
            active: 4
        })

    },
    // 点击登陆
    goToLogin() {
        if (this.data.Token) {
            return
        }
        this.setData({
            show: true,
        })
    },
    // 关闭弹框
    onClose() {
        this.setData({
            show: false
        })
    },
    // 账号事件
    Inputusername(e) {
        this.setData({
            username: e.detail,
            logio_username: false

        })
        if (!this.data.username) {
            this.setData({
                logio_username: true
            })
        }

    },
    // 密码框事件
    Inputpassword(e) {
        this.setData({
            pwd: e.detail,
            logio_password: false
        })
        if (!this.data.pwd) {
            this.setData({
                logio_password: true
            })
        }
    },
    // 登陆事件 
    async Login() {

        // 校验
        if (!this.data.username) {
            this.setData({
                logio_username: true,
            })
        }
        if (!this.data.pwd) {
            this.setData({
                logio_password: true
            })
        }
        //  判断账号和密码 都输入才发起请求
        if (this.data.username || this.data.pwd) {
            let result = await GetLogo({
                data: {
                    username: this.data.username,
                    pwd: this.data.pwd
                },
                method: "POST"
            })
            wx.showToast({
                title: '登陆成功',
                icon: "success",
                mask: true
            })
            wx.setStorageSync('Token', result.data.token)
            wx.setStorageSync('UserInfo', JSON.stringify(result.data.userInfo))
            setTimeout(() => {
                this.setData({
                    assets: result.data.userInfo.avatar,
                    name: result.data.userInfo.nickname,
                    icon: "cross",
                    show: false,
                    Token: result.data.token,
                    username: "",
                    pwd: ""
                })
            }, 1000)
            if (app.globalData.logoisok) {
                if (app.globalData.logocart) { 
                    wx.switchTab({
                        url:app.globalData.prevRoutes,
                    })

                } else {
                    wx.navigateTo({
                        url: app.globalData.prevRoutes
                    })
                }

                app.globalData.logoisok = false
                app.globalData.logoisok=false
            }

        }

    },
    // 退出登陆
    logout() {
        if (!this.data.Token) {
            return
        }
        Dialog.confirm({
                title: '退出账号确认',
                message: '您是否要退出当前账号',
            })
            .then(() => {
                wx.clearStorageSync(),
                    this.setData({
                        name: "点击登陆",
                        assets: "../../assets/default_avatar.png",
                        Token: ""
                    })
            })
            .catch(() => {});
    }

})