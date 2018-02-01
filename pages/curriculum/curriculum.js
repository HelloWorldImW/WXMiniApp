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