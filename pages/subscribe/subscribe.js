// pages/subscribe/subscribe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenWidth: wx.getSystemInfoSync().windowWidth,
    screenHeight:wx.getSystemInfoSync().windowHeight,
    name: {
      icon:"/resource/location.png",
      title:"姓名",
    },
    telphone: {
      icon: "/resource/location.png",
      title: "联系电话",
    },
    chooseClass: {
      icon: "/resource/location.png",
      title: "所选课程",
      pullDownIcon:"/resource/location.png",
    },
    remark: {
      icon: "/resource/location.png",
      title: "备注",
      color: "gray",
    },
    array: ['美国美国美国', '中国中国中国', '巴西巴西巴西', '日本日本日本'],
    index:0,
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
})