// pages/details/schoolInfo/schoolInfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      address:"",
      name:"",
      tel:"",
      schoolInfo:{},
      current:0,
      screenWidth: wx.getSystemInfoSync().windowWidth,
      show:false,
      showViewNum:1,
      marginLeft:0,
      introduce:'',
      power:'',
      navigationButtonArray: [
         { 
            id:1,
            text:"资质",
            color:'red'
          },
         {
             id: 2,
             text: "奖项",
             color: 'green'
         },
         { 
             id: 3,
             text: "实力",
             color: 'blue'
         }
      ],
      imageArray: [
          {
              id:0,
              imageUrl:'http://pic.58pic.com/58pic/13/20/61/89B58PIC5Nz_1024.jpg'
          },
          {
              id: 1,
              imageUrl: 'http://pic33.nipic.com/20130928/4420504_005335593000_2.jpg'
          },

      ],
  },
    // 导航点击
    onItemButtonClick: function (e) {
        this.setData({
            marginLeft: (e.target.id - 1) / 3 * wx.getSystemInfoSync().windowWidth,
            showViewNum: e.target.id
        })
    },
    onHideImage: function () {
        this.setData({
            show: false,
        })
    },
    onImageClick: function(e) {
        this.setData({
            show: true,
            current: e.target.id
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getschoolinfo();
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
  getschoolinfo: function (str) {
      let url = this.getUrl("getschoolinfo");
      let data = {
          'aid': '3',
      }
      this.openUrl(url, data, (data) => {
          console.log(data);
          let imageArray = []
          for (let i = 0; i < data.prize.length;i++){
            let obj = {
                "id":i,
                "imageUrl": data.prize[i]
            }
            imageArray.push(obj);
          }
          this.setData({
              address: data.address,
              name: data.name,
              tel: data.tel,
              introduce: data.zizhi,
              imageArray: imageArray,
              power: data.shili
          });
      });
  }
})