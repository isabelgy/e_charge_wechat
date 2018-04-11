// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addmessage: "",
    lag:"",
    long: ""
  },
  bindSubmit: function (e) {
    let new_station = { latitude: this.data.lag, longitude: this.data.long}
    console.log(new_station)
    console.log(e)
    wx.request({
      url: 'http://e-charge.herokuapp.com/api/v1/stations/',
      method: 'POST',
      data: new_station,
      success: function () {
        wx.showToast({
          title: 'Done!',
          icon: 'success'
        })
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext("mapID100")
    this.mapCtx.getCenterLocation({
      success: function (res) {

        console.log(res)
      }
    })
    this.mapCtx.moveToLocation()
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

  btnChooseEventHandle: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          addmessage: res.address,
          lag: res.latitude,
          long: res.longitude
        })
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },

  // btnCenterEventHandle: function () {
  //   this.mapCtx.getCenterLocation({
  //     success: function (res) {

  //       console.log(res)
  //     }
  //   })
  //   this.mapCtx.moveToLocation()
  // }


})