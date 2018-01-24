// pages/aboutUs/aboutUs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 顶部滚动栏
    imgUrls: [
      { imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',imageKey:"key1"},
      { imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',imageKey: "key2"}
    ],
    imageWidth: wx.getSystemInfoSync().windowWidth,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    // 地图栏
    mapLabel: {
      leftIcon:"success",
      title: "我爱北京天安门东大街西边",
      rightIcon: "success",
    } 
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})