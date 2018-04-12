// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [ 'Charging Device is Broken', 'Station No Longer Exist', 'The QR code Does Not Work', 'Other'],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;
    const id = options.id
    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });
    wx.request({
      url: `http://e-charge.herokuapp.com/api/v1/stations/${id}`,
      method: 'GET',
      success(res) {
        var station = res.data;

        // Update local data
        page.setData(
          station
        );

        wx.hideToast();
      }
    });
  },

  bindSubmit: function (e) {

    //...

    let latitude = e.detail.value.latitude;
    let image = e.detail.value.image;
    let longitude = e.detail.value.longitude;
    let id = this.data.id;

    let station = {
      latitude: latitude,
      image: image,
      longitude: longitude
    }

    // Update api data
    wx.request({
      url: `http://localhost:3000/api/v1/stations/${id}`,
      method: 'PUT',
      data: station,
      success() {
        // set data on index page and show
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
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
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  },

  //  bindChange: function (e) {
  //   const val = e.detail.value
  //   this.setData({
  //     year: this.data.years[val[0]],
  //     month: this.data.months[val[1]],
  //     day: this.data.days[val[2]]
  //   })
  // }
})