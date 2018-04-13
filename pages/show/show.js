// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qr_result: "",
    address: ""
  },

  scan: function (e) {
    // console.log(e.currentTarget.dataset.id)
    const page = this
    console.log('pressed scan')
    // console.log(page.data)
    var that = this
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        wx.request({

          //url: `http://localhost:3000/api/v1/stations/${page.data.id}/rentals`,

          url: `http://e-charge.herokuapp.com/api/v1/stations/${page.data.id}/rentals`,
          method: 'POST',
          data: {user_id: (wx.getStorageSync('user_id')), station_id:   page.data.id},
          success: function (res) {
            console.log(res.data)
            wx.navigateTo({
              url: `../rental/rental?id=${res.data.id}&station_id=${res.data.station_id}`,
            })
            wx.showToast({
              title: 'Done!',
              icon: 'success'
            })
          }})
        // if (page.data.id == res.result) {
        //   console.log('testpassed')
          // wx.navigateTo({
          //   url: `../show/show?id=${job.id}`
          // })
        }
        // page.setData({
        //   qr_result: res.result
        // // })
        // console.log(res.result)
        // console.log(page.data.id)

        })
      },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;
    // loading specific station data from api
    const id = options.id

    wx.request({
//       url: `http://localhost:3000/api/v1/stations/${id}`,
      url: `http://e-charge.herokuapp.com/api/v1/stations/${id}`,
      success: function (res) {
        page.setData(res.data);
      }
    })
  },

  editStation: function (e) {
    console.log(e)
    let page = this;
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  showMap: function (e) {
    // console.log(e)
    const lat = Number(e.currentTarget.dataset.id[0])
    const long = Number(e.currentTarget.dataset.id[1])
    const address = e.currentTarget.dataset.id[2]
    let page = this;
    // wx.getLocation({
    //   type: 'gcj02',
    //   sucess: function(res){
    //     wx.openLocation({
    //       latitude: lat,
    //       longitude: long,
    //       scale: 28,
    //       address: address
    //   })
    //     console.log(e)
    // }
    // })

    wx.openLocation({
      latitude: lat,
      longitude: long,
      scale: 28,
      address: address
    })
    // wx.navigateBack({


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


})
