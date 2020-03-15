// pages/photoslist/photoslist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function() {
    this.getProduceList();
  },
  getProduceList: function() {
    var that = this;
    wx.request({
      url: 'http://localhost:8090/getProduceList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success(res) {
        console.log(res.data.data);
        that.setData({
          bgphotos: res.data.data
        });
      }
    })
  },
  showProinfo: function(res) {
    var pid = res.currentTarget.dataset.id;
    console.log(pid);
    wx.navigateTo({
      url: '/pages/proinfo/proinfo?pid=' + pid
    })
  }
})