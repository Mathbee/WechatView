// pages/proinfo/proinfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var pid = options.pid;
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
    wx.request({
      url: 'http://localhost:8090/getProimgListByPid',
      data: {
        pid: pid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function(res) {
        console.log(res);
        that.setData({
          proimg: res.data.data
        })
      }
    });
  },
  showPropay(e) {
    var pid = e.currentTarget.dataset['index'];
    wx.navigateTo({
      url: '/pages/propay/propay?pid=' + pid
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})