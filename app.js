App({
  onLaunch: function() {
    console.log("进入app.js");
    var that = this;
    // getSetting()返回用户授权结果
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，获取用户信息，不会弹框
          wx.login({
            success: res => {
              if (res.code) {
                wx.request({
                  url: 'http://localhost:8090/onLogin',
                  data: {
                    codeId: res.code
                  },
                  success: res => {
                    wx.getUserInfo({
                      success: function(e) {
                        var userinfo = e.userInfo
                        userinfo['openId'] = res.data;
                        //保存用户信息到session中
                        that.globalData.userInfo = userinfo;
                        //跳转到主页
                        that.toHomePage(res);
                      }
                    })
                  }
                })
              }
            },
            fail: res => {
              console.log(res)
            }
          })
        } else if (!res.authSetting['scope.userInfo']) {
          that.showSettingModal();
        } else {
          that.showSettingModal();
        }
      }
    })
  },
  showSettingModal: function() {
    wx.showModal({
      title: '提示',
      content: '请点击进入主页按钮进行授权！'
    })
  },
  toHomePage(res) {
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    if (this.userInfoReadyCallback) {
      this.userInfoReadyCallback(res)
    }
    // 设定一个定时器。（执行的方法，延迟的时间）
    setTimeout(() => {
      //关闭所有页面，打开到应用内的某个页面
      wx.reLaunch({
        url: '/pages/home/home'
      });
    }, 300)
  },
  globalData: {
    userInfo: null
  }
})