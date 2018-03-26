// pages/details/newActivity/newActivity.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.notice();
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
  // 打开接口
  openUrl: function (url, data, completed) {
      wx.request({
          url: url,
          data: data,
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
  //   获取教师详情
  notice: function (str) {
      let url = this.getUrl("notice");
      let data = {
          'aid': '3',
      }
      this.openUrl(url, data, (data) => {
          console.log(data);
        //   let imageArray = []
        //   for (let i = 0; i < data.prize.length; i++) {
        //       let obj = {
        //           "id": i,
        //           "imageUrl": data.prize[i]
        //       }
        //       imageArray.push(obj);
        //   }
          let time = new Date(parseInt(data.addtime) * 1000);
           data.addtime = util.formatTime(time);
          this.setData({
              data:data
          });
      });
  }
})