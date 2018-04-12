// pages/rental/rental.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: 0,
    
  },

  stopCharge: function(e) {
    wx.request({
      url: `http://e-charge.herokuapp.com/api/v1/stations/${station_id}/rentals/${id}`,
      method: 'PUT',
      data: {
        in_progress: false
      },
      success: function() {
        wx.reLaunch({
          url: '/pages/index/index',
          success: function () {
            wx.showToast({
              title: 'Stopped!',
              icon: 'success'
            })
          }
        })
      }
    })
    
  },

  timerSet: function (e) {
    this.setData({timer: e.detail.value})
    setTimeout(stopCharge, (timer * 60000))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    console.log(options)
    const station_id = options.station_id
    const page = this
    wx.request({

      // url: `http://localhost:3000/api/v1/stations/${station_id}/rentals/${id}`,
      url: `http://e-charge.herokuapp.com/api/v1/stations/${station_id}/rentals/${id}`,

      success: function (res) {
        
        page.setData(res.data);
        console.log(res.data)
      }
    })
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
  
  }
})