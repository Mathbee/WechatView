var app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    console.log('进入index.js');
  },
  bindGetUserInfo(e) {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'http://localhost:8090/onLogin',
            data: {
              codeId: res.code
            },
            success: res => {
              wx.getUserInfo({
                success: function(e) {
                  //获取用户信息
                  var userinfo = e.userInfo
                  userinfo['openId'] = res.data;
                  //保存用户信息到session中
                  app.globalData.userInfo = userinfo;
                  wx.request({
                    header: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: 'http://localhost:8090/insUserInfo',
                    data: userinfo,
                    method: 'POST',
                    success: res => {
                      console.log(res);
                      if (res.msg = 200) {
                        wx.reLaunch({
                          url: '/pages/home/home',
                        })
                      }
                    },
                    fail: res => {
                      console.log(res);
                    }
                  })
                }
              });
            },
            fail: res => {
              console.log(res);
            }
          })
        } else {
          console.log(res)
        }
      }
    });
  }
})