// pages/curriculum/curriculum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 课程
    curriculums: {}
  },

  clickCurriculumView:function(e) {
    console.log(e.currentTarget.id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllClasses()
  },
  // 获取所有课程
  getAllClasses: function () {
    var url = this.getUrl("getclasslist")
    var that = this
    this.openUrl(url, function (data) {
      var items = {};
      for (var item in data) {
        var old = that.data.curriculums
        var dic = {
          id: data[item]["id"],
          iconUrl: data[item]["img1"],
          title: data[item]["name"],
          content: data[item]["tedian"],
          age: "data[item]",
          time: "data[item]olrdernum",
          money: data[item]["price"],
          itemWidth: wx.getSystemInfoSync().windowWidth,
        }
        items[item] = dic
      }
      old = items
      that.setData({
        curriculums: old
      })
    })
  },

  // 打开接口
  openUrl: function (url, completed) {
    wx.request({
      url: url,
      data: {
        'aid': '3',
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        completed(res.data)
      }
    })
  },

  getUrl: function (path) {
    return 'https://www.qxyapp.com/index.php/Index/' + path
  },
})