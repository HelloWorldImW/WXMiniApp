// pages/aboutUs/aboutUs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 顶部滚动栏
    imgUrls: [
      { imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',imageKey:"key1"},
      { imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',imageKey:"key2"}
    ],
    windowHeight: wx.getSystemInfoSync().windowHeight,
    imageWidth: wx.getSystemInfoSync().windowWidth,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    // 地图栏
    mapLabel: {
      id:"map",
      leftIcon:"/resource/location.png",
      title: "我爱北京天安门东大街西边",
      rightIcon:"/resource/gotoNext.png",
    },
    school: {
      id: "1",
      title: "学校",
      icon: "/resource/location.png"
    },
    school1: {
      id: "2",
      title: "学校1",
      icon: "/resource/location.png"
    },
    school2: {
      id: "3",
      title: "学校2",
      icon: "/resource/location.png"
    }
  },
  
  // 点击标题
  clickTitle: function () {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  // 点击模板
  clickModuleView: function (e) {
    if (e.currentTarget.id == "1") {
      console.log("1")
    } else if (e.currentTarget.id == "2") {
      console.log("2")
    } else if (e.currentTarget.id == "3") {
      console.log("3")
    }
  },

  // 点击滚动图片
  clickImage: function(e) {
    var imageUrl = this.data.imgUrls[e.currentTarget.dataset.index].imgUrl
    console.log(imageUrl)
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