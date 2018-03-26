//app.js
App({
  globalData: {
    windowWidth: 0,
    windowHeight: 0
  },
  onLaunch: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.windowWidth = res.windowWidth,
        that.globalData.windowHeight = res.windowHeight
      }
    }) 
  }
})