// pages/aboutUs/aboutUs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: wx.getSystemInfoSync().windowHeight,
    imageWidth: wx.getSystemInfoSync().windowWidth,
    topScroll: {
      // 顶部滚动栏
      imgUrls: [
        { imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', imageKey: "key1" },
        { imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', imageKey: "key2" }
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
    },
    // 地图栏
    mapLabel: {
      id:"map",
      leftIcon:"/resource/location.png",
      title: "我爱北京天安门东大街西边",
      rightIcon:"/resource/gotoNext.png",
      moreText: "",
    },
    // 模板
    moduls:{
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
      }, 
    },
    /// 最新公告
    news: {
      icon:"/resource/location.png",
      title:"Hello World"
    },
    /// 推荐课程
    recommonLession: {
      title: {
        id: "recommonSession",
        leftIcon: "/resource/location.png",
        title: "推荐课程",
        rightIcon: "/resource/gotoNext.png",
        moreText: "更多",
      },
      details: {
        item1: {
          id: "id1",
          bgImage: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          width: (wx.getSystemInfoSync().windowWidth-30)/2.0,
          height: 100,
          title: "数学",
        },
        item2: {
          id: "id2",
          bgImage: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          width: (wx.getSystemInfoSync().windowWidth - 30) / 2.0,
          height: 100,
          title: "地理",
        },
        item3: {
          id: "id3",
          bgImage: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          width: (wx.getSystemInfoSync().windowWidth - 30) / 2.0,
          height: 100,
          title: "自然",
        },
        item4: {
          id: "id4",
          bgImage: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          width: (wx.getSystemInfoSync().windowWidth - 30) / 2.0,
          height: 100,
          title: "语文",
        }, 
      }
    },

    /// 师资力量
    teachers: {
      title: {
        id: "recommonSession",
        leftIcon: "/resource/location.png",
        title: "师资力量",
        rightIcon: "/resource/gotoNext.png",
        moreText: "更多",
      },
      details: {
        item1: {
          id: "张山",
          userImage:"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          name: "张山",
          title: "教授",
        },
        item2: {
          id: "张大山",
          userImage: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          name: "张大山",
          title: "学者",
        },
        item3: {
          id: "王小三",
          userImage: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          name: "王小三",
          title: "副教授",
        },
        item4: {
          id: "李大山",
          userImage: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          name: "李大山",
          title: "专家",
        },
      }
    },

    /// 学员风采
    studentShows: {
      title: {
        id: "recommonSession",
        leftIcon: "/resource/location.png",
        title: "学员风采",
        rightIcon: "/resource/gotoNext.png",
        moreText: "更多",
      },
      details: {
        item1: {
          id: "111",
          imageUrl:"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        },
        item2: {
          id: "222",
          imageUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        },
        item3: {
          id: "333",
          imageUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        },
        item4: {
          id: "444",
          imageUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        },
      }
    }
  },
  
  // 点击标题
  clickTitle: function (e) {
    if (e.currentTarget.id == "map") {
      this.openMap()
    } else if (e.currentTarget.id == "recommonSession") {
      console.log("recommonSession")
    } else if (e.currentTarget.id == "3") {
      console.log("3")
    }
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
    var imageUrl = this.data.topScroll.imgUrls[e.currentTarget.dataset.index].imgUrl
    console.log(imageUrl)
  },
  
  // 点击最新公告
  clickNews: function(e) {
    console.log("点击最新公告")
  },

  // 点击推荐课程详情
  clickRecommendCurriculumView: function(e) {
    console.log(e.currentTarget.id)
  },

  // 点击咨询按钮
  clickSuspendButton: function(e) {
    console.log("点击了咨询按钮")
  },

  //点击师资力量 
  clickTeachersView: function(e) {
    console.log(e.currentTarget.id)
  },

  // 点击学员风采
  clickStuendtShows: function(e) {
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

  },
  // 打开地图
  openMap: function() {
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
  }
})