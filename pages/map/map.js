// // pages/map/map.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     addmessage:"",
//   markers:[{
//     latitude: 31.2568,
//     longitude: 121.28621,
//     iconPath: "/image/icon.png",
//   }],
//   controls:[{
//     id: 1000,
//     position:{
//       left: 100,
//       top: 170
//     },iconPath: '/image/location.png',clickable: true
//   }]
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//   this.mapCtx = wx.createMapContext("mapID102")
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
  
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
  
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
  
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
  
//   },

//   controlsEventHandle(e) {
//     console.log(e)
//     this.setData({
//       controlId: e.controlId
//     })
//   },

//   btnGetEventHandle: function(){
//     wx.getLocation({
//       type: "wgs84",
//       success: function(res) {
//         console.log(res)
//       },
//       fail: function(){

//       },
//       complete: function(){

//       }
//     })
//   },


// btnChooseEventHandle: function(){
//   var that = this
//   wx.chooseLocation({
//     success: function (res) {
//       console.log(res)
//       that.setData({
//         addmessage: res.address
//       })
//     },
//     fail: function () {

//     },
//     complete: function () {

//     }
//   })
// },

// btnCenterEventHandle: function(){
//   this.mapCtx.getCenterLocation({
//     success:function (res){

//     console.log(res)
//     }
//   })
//   this.mapCtx.moveToLocation()
// },
 
//   moveToLocation: function () {
//   this.mapCtx.moveToLocation()
//   },
//   translateMarker: function () {
//     this.mapCtx.translateMarker({
//       markerId: 0,
//       autoRotate: true,
//       duration: 1000,
//       destination: {
//         latitude: 23.10229,
//         longitude: 113.3345211,
//     },
//     animationEnd() {
//       console.log('animation end')
//     }
//   }
// })