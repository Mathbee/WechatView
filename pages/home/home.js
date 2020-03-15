Page({
  data: {
    bgswiper: [
      '/image/swiper/swiper1.jpg',
      '/image/swiper/swiper2.jpg',
      '/image/swiper/swiper3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  onLoad: function() {
    this.getProduceList();
  },
  getProduceList: function() {
    var that = this;
    wx.request({
      url: 'http://localhost:8090/getProduceList',
      data: {},
      method: "GET",
      success(res) {
        console.log(res.data.data);
        that.setData({
          bgphotos: res.data.data
        });
      }
    })
  },
  showProList: function() {
    wx.navigateTo({
      url: '/pages/prolist/prolist',
    })
  }
})