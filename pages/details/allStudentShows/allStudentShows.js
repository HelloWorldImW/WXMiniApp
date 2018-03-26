// pages/details/allStudentShows/allStudentShows.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      show:false,
      current:0,
      windowWidth: wx.getSystemInfoSync().windowWidth,
      imageArray: [ ],
  },
  onShowImage:function(e){
    this.setData({
        current:e.target.id,
        show:true
    });
  },
  onHideImage:function(e) {
      this.setData({
          show: false
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getfengcailist();
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
  //   获取学院风采列表
  getfengcailist: function () {
      let url = this.getUrl("getfengcailist");
      let data = {
          'aid': '3',
      }
      this.openUrl(url, data, (data) => {
          console.log(data);
          let imageArray = []
          for (let i = 0; i < data.length; i++) {
              let obj = {
                  ...data[i],
                  "id": i,
                  "imageUrl": data[i].pic,
                  "lookId": data[i].id,
              }
              imageArray.push(obj);
          }
          this.setData({
              imageArray:imageArray
          });
          console.log(this.data.imageArray);
      });
  }
})