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
      imgUrls: [],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
    },
    // 地图栏
    mapLabel: {
      id:"map",
      leftIcon:"/resource/location.png",
      title: "北京市朝阳区芍药居甲31号院",
      rightIcon:"/resource/gotoNext.png",
      moreText: "",
    },
    // 模板
    moduls:{},
    /// 最新公告
    news: {},
    /// 推荐课程
    recommonLession: {
      title: {
        id: "recommonSession",
        leftIcon: "/resource/location.png",
        title: "推荐课程",
        rightIcon: "/resource/gotoNext.png",
        moreText: "更多",
      },
      details: {}
    },

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

    /// 学员风采
    studentShows: {
      title: {
        id: "studentShows",
        leftIcon: "/resource/location.png",
        title: "学员风采",
        rightIcon: "/resource/gotoNext.png",
        moreText: "更多",
      },
      details: {}
    }
  },
  
  // 点击标题
  clickTitle: function (e) {
    if (e.currentTarget.id == "map") {
      this.openMap()
    } else if (e.currentTarget.id == "recommonSession") {
      wx.navigateTo({
        url: 'curriculum/curriculum?id = 2'
      })
    } else if (e.currentTarget.id == "teachers") {
      wx.navigateTo({
        url: '../details/allTeachers/allTeachers'
      })
    } else if (e.currentTarget.id = "studentShows") {
      wx.navigateTo({
        url: '../details/allStudentShows/allStudentShows'
      })
    }
  },

  // 点击模板
  clickModuleView: function (e) {
    var url = ""
    if (e.currentTarget.id == "1") {
      url = '../details/schoolInfo/schoolInfo'
    } else if (e.currentTarget.id == "2") {
      url = 'curriculum/curriculum'
    } else if (e.currentTarget.id == "3") {
      url = '../details/allStudentShows/allStudentShows'
    }
    wx.navigateTo({
      url: url
    })
  },

  // 点击滚动图片
  clickImage: function(e) {
    var imageUrl = this.data.topScroll.imgUrls[e.currentTarget.dataset.index].imgUrl
    console.log(imageUrl)
  },
  
  // 点击最新公告
  clickNews: function(e) {
    wx.navigateTo({
      url: '../details/newActivity/newActivity'
    })
  },

  // 点击推荐课程详情
  clickRecommendCurriculumView: function(e) {
    wx.navigateTo({
      url: '../details/classInfo/classInfo'
    })
  },

  // 点击咨询按钮
  clickSuspendButton: function(e) {
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },

  //点击师资力量 
  clickTeachersView: function(e) {
    wx.navigateTo({
      url: '../details/teacherInfo/teacherInfo'
    })
  },

  // 点击学员风采
  clickStuendtShows: function(e) {
   
  },

  // 打开地图
  openMap: function () {
    wx.openLocation({
      latitude: 39.9833500000,
      longitude: 116.4375700000,
      name: this.data.mapLabel.title,
      scale: 28
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
    this.getNav()
    this.getNewNotice()
    this.getClasses()
    this.getTeachers()
    this.getStudentShows()
  },
  
  // 获取学员风采
  getStudentShows: function () {
    var url = this.getUrl("getfengcai")
    var that = this
    this.openUrl(url, function (data) {
      var items = {};
      for (var item in data) {
        var old = that.data.studentShows
        var dic = {
          id: data[item]["id"],
          imageUrl: data[item]["pic"],
        }
        items[item] = dic
      }
      old.details = items
      that.setData({
        studentShows:old
      })
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

  // 获取推荐课程
  getClasses: function () {
    var url = this.getUrl("getclass")
    var that = this
    this.openUrl(url, function (data) {
      var items = {};
      for (var item in data) {
        var old = that.data.recommonLession
        var dic = {
          id: data[item]["id"],
          bgImage: data[item]["img1"],
          width: (wx.getSystemInfoSync().windowWidth - 30) / 2.0,
          height: 100,
          title: data[item]["name"],
        }
        items[item] = dic
      }
      old.details = items
      that.setData({
        recommonLession: old
      })
    })
  },

  // 获取最新公告
  getNewNotice: function () {
    var url = this.getUrl("notice")
    var that = this
    this.openUrl(url, function (data) {
      var dic = {
        icon: data["head_pic"],
        title: data["title"],
        content: data["content"]
      }
      that.setData({
          news: dic,
        })
    })
  },
  // 获取导航
  getNav: function () {
    var url = this.getUrl("navi")
    var that = this
    this.openUrl(url, function (data) {
      for (var item in data) {
        var old = that.data.moduls
        var dic = {
          id: data[item]["id"],
          title: data[item]["title"],
          // icon: data[item]["img"]
          icon: "/resource/item" + data[item]["id"]+".png"
        }
        old[data[item]["id"]] = dic;
      }
      that.setData({
        moduls: old
      })
    })
  },

  // 获取轮播图
  getBanner:function() {
    var url = this.getUrl("banner")
    var that = this
    this.openUrl(url, function (data) {
      var images = [];
      var old = that.data.topScroll
      for(var item in data) {
        var image = {imgUrl:data[item]["pic"]}
        images[item] = image
      }
      old.imgUrls = images;
      that.setData({
        topScroll: old
      })
    })
  },

  // 打开接口
  openUrl: function(url,completed) {
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

  getUrl: function(path) {
    return 'https://www.qxyapp.com/index.php/Index/' + path
  },
})