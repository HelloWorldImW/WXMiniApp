// pages/details/allTeachers/allTeachers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      /// 师资力量
      teachers: {
          title: {
              id: "teachers",
              leftIcon: "/resource/location.png",
              title: "师资力量",
              rightIcon: "/resource/gotoNext.png",
              moreText: "更多",
          },
          details: {}
      },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getTeachers();
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
  
  },
  //点击师资力量 
  clickTeachersView: function (e) {
      wx.navigateTo({
          url: '../teacherInfo/teacherInfo?str=' + e.currentTarget.id
      })
  },
  // 获取师资力量
  getTeachers: function () {
      var url = this.getUrl("getteacher")
      var that = this
      this.openUrl(url, function (data) {
          var items = {};
          for (var item in data) {
              var old = that.data.teachers
              var dic = {
                  id: data[item]["id"],
                  userImage: data[item]["img"],
                  name: data[item]["name"],
                  title: data[item]["level"],
              }
              items[item] = dic
          }
          old.details = items
          that.setData({
              teachers: old
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