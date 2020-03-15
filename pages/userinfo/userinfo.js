const app = getApp();
Page({
  data: {
    myOrder1: [
      '/image/userinfo/1.png'
    ],
    myOrder2: [
      '/image/userinfo/2.png'
    ],
    myOrder3: [
      '/image/userinfo/3.png'
    ],
    myOrder4: [
      '/image/userinfo/4.png'
    ],
    delivery: [
      '/image/userinfo/delivery.png'
    ],
    order: [
      '/image/userinfo/order.png'
    ],
    pay: [
      '/image/userinfo/pay.png'
    ],
    take: [
      '/image/userinfo/take.png'
    ]
  },
  onLoad: function(options) {
    var that = this;
    that.setData({
      userinfo: app.globalData.userInfo
    })
  }
})