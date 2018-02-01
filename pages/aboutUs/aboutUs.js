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
      title: "我爱北京天安门东大街西边",
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
        id: "recommonSession",
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

  // 打开地图
  openMap: function () {
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
        console.log(data[item])
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
          icon: data[item]["img"]
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