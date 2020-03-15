var app = getApp();
Page({
  onLoad: function(options) {
    var that = this;
    var pid = options.pid;
    var userinfo = app.globalData.userInfo;
    wx.request({
      url: 'http://localhost:8090/getDefaultAddressByOpenId',
      data: {
        openId: userinfo.openId
      },
      success: function(res) {
        console.log(res);
        that.setData({
          address: res.data.data
        })
      }
    })
    wx.request({
      url: 'http://localhost:8090/getProduceById',
      data: {
        pid: pid
      },
      method: "GET",
      success: function(res) {
        console.log(res.data.data);
        that.setData({
          proinfo: res.data.data
        })
      }
    });
  }
})