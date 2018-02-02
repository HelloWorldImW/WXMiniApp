// pages/subscribe/subscribe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenWidth: wx.getSystemInfoSync().windowWidth,
    screenHeight:wx.getSystemInfoSync().windowHeight,
    name: {
      icon:"/resource/location.png",
      title:"姓名",
    },
    telphone: {
      icon: "/resource/location.png",
      title: "联系电话",
    },
    chooseClass: {
      icon: "/resource/location.png",
      title: "所选课程",
      pullDownIcon:"/resource/location.png",
    },
    remark: {
      icon: "/resource/location.png",
      title: "备注",
      color: "gray",
    },
    classId:"",
    subName:"",
    telNum:"",
    remarkDetail:"",
    array: [],
    showdata:[],
    index:0,
  },

  bindPickerChange: function (e) {
    var classItem = this.data.array[e.detail.value]
    this.setData({
      index: e.detail.value,
      classId:classItem.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getclasslist()
  },

  nameInput:function(e) {
    this.setData({
      subName: e.detail.value,
    })
  },

  telInput: function (e) {
    this.setData({
      telNum: e.detail.value,
    })
  },

  remarkInput: function (e) {
    this.setData({
      remarkDetail: e.detail.value,
    })
  },


  clickSubmit: function(e) {
    if (this.isEmpty(this.data.subName)) {
      wx.showToast({
        title: '姓名不能为空',
        icon: "none"
      })
      return
    } else if (this.isEmpty(this.data.telNum)) {
      wx.showToast({
        title: '联系电话不能为空',
        icon: "none"
      })
      return
    } else if (this.isEmpty(this.data.classId)) {
      wx.showToast({
        title: '所选课程不能为空',
        icon: "none"
      })
      return
    } else if (this.isEmpty(this.data.remarkDetail)) {
      wx.showToast({
        title: '备注不能为空',
        icon: "none"
      })
      return
    } else {
      console.log("Hello")
    }
  },

  isEmpty: function(str) {
    if (str==null||str.length==0) {
      return true
    } else {
      return false
    }
  },

  // 获取轮播图
  getclasslist: function () {
    var url = this.getUrl("getclasslist")
    var that = this
    this.openUrl(url, function (data) {
      var array = {}
      var items = []
      for (var item in data) {
        array[item] = {
          name:data[item]["name"],
          id: data[item]["id"]
        }
        items[item] = data[item]["name"]
      }
      that.setData({
        array:array,
        showdata:items,
        classId: data[0]["id"]
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