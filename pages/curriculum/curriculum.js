// pages/curriculum/curriculum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 课程
    curriculums: {
      item1: {
        id: "课程1",
        iconUrl: "/resource/location.png",
        title: "超感创作力训练",
        content: "开拓思维，让写作成为快乐",
        age: "10-18周岁",
        time: "7天集中训练+50课时进阶训练(有效期一年)",
        money: "5000",
        itemWidth: wx.getSystemInfoSync().windowWidth,
      },
      item2: {
        id: "课程2",
        iconUrl: "/resource/location.png",
        title: "超感创作力训练",
        content: "开拓思维，让写作成为快乐",
        age: "10-18周岁",
        time: "7天集中训练+50课时进阶训练(有效期一年)",
        money: "5000",
        itemWidth: wx.getSystemInfoSync().windowWidth,
      },
      item3: {
        id: "课程4",
        iconUrl: "/resource/location.png",
        title: "超感创作力训练",
        content: "开拓思维，让写作成为快乐",
        age: "10-18周岁",
        time: "7天集中训练+50课时进阶训练(有效期一年)",
        money: "5000",
        itemWidth: wx.getSystemInfoSync().windowWidth,
      },
      item4: {
        id: "课程4",
        iconUrl: "/resource/location.png",
        title: "超感创作力训练",
        content: "开拓思维，让写作成为快乐",
        age: "10-18周岁",
        time: "7天集中训练+50课时进阶训练(有效期一年)",
        money: "5000",
        itemWidth: wx.getSystemInfoSync().windowWidth,
      },
    }
  },

  clickCurriculumView:function(e) {
    console.log(e.currentTarget.id)
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