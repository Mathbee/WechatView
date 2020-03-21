const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      userinfo: app.globalData.userInfo
    })
    console.log(that.data.userinfo)
    wx.request({
      url: 'http://localhost:8090/shopcar/getShopCarList',
      data: {
        openId: that.data.userinfo.openId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success(res) {
        console.log(res.data.data);
        that.setData({
          shopcar: res.data.data
        });
      }
    })
  },
  toHomePage: function() {
    wx.navigateTo({
      url: '/pages/prolist/prolist',
    })
  },
  showProinfo: function(res) {
    var pid = res.currentTarget.dataset.id;
    console.log(pid);
    wx.navigateTo({
      url: '/pages/proinfo/proinfo?pid=' + pid
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