Page({
  data: {
    latitude: 31.223520,
    longitude: 121.455909,
    // markers: [{
    //   id: 1,
    //   latitude: 31.220120,
    //   longitude: 121.443128,
    //   iconPath: '/image/green_marker.png',
    //   // name: 'T.I.T 创意园'
    // },
    //   {
    //     id: 2,
    //     latitude: 31.219166,
    //     longitude: 121.443466,
    //     iconPath: '/image/green_marker.png',
    //     // name: 'T.I.T 创意园'
    //   },
    //   {
    //     id: 3,
    //     latitude: 31.227466,
    //     longitude: 121.463488,
    //     iconPath: '/image/green_marker.png',
    //     // name: 'T.I.T 创意园'
    //   },
    //   {
    //     id: 4,
    //     latitude: 31.222989,
    //     longitude: 121.451300,
    //     iconPath: '/image/green_marker.png',
    //     // name: 'T.I.T 创意园'
    //   }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      //iconPath: '/image/red_marker.jpg'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      // iconPath: '/image/green_marker.jpg'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  // translateMarker: function () {
  //   this.mapCtx.translateMarker({
  //     markerId: 1,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude: 23.10229,
  //       longitude: 113.3345211,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },
  // includePoints: function () {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [{
  //       latitude: 31.223520,
  //       longitude: 121.455909,
  //     }, {
  //       latitude: 31.023520,
  //       longitude: 121.055909,
  //     }]
  //   })
  // },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  
  click: function (e) {
    let page = this;
    const id = e.markerId
    let show_station = { address: page.data.address, latitude: page.data.latitude, longitude: page.data.longitude }
   
    console.log(show_station)
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },
  // onLoad: function (options) {
  //   let page = this;
  //   wx.request({
  //     //url: "http://localhost:3000/api/v1/stations",
  //     // url: "https://easy-mock.com/mock/5acc974ffbaa0f54f4d6a502/stations",
  //     url: "https://e-charge.herokuapp.com/api/v1/stations",
  //     method: 'GET',
  //     success(res) {
  //       const stations = res.data.stations;
  //       const markers = []

  //       stations.map(station => {
  //         const mark = {}
  //           mark.id= station.id,
  //           // console.log(mark.id)
  //           mark.latitude= station.latitude,
  //           mark.longitude = station.longitude,
  //           mark.availability = station.availability
  //           if (mark.availability === true){
  //             mark.iconPath = '/image/green_marker.png';
  //           } else {
  //             mark.iconPath = '/image/red_marker.png'
  //           }
            
  //           markers.push(mark)
  //       })
  //       page.setData({markers: markers})
  //       console.log(page.data.markers)
  //     }
  //   })
  // },

 
  
  
  onShow: function () {
    let page = this;
    wx.request({
//       url: "http://localhost:3000/api/v1/stations",
      // url: "https://easy-mock.com/mock/5acc974ffbaa0f54f4d6a502/stations",
      url: "https://e-charge.herokuapp.com/api/v1/stations",
      method: 'GET',
      success(res) {
        
        const stations = res.data.stations;
        const markers = []

        stations.map(station => {
          const mark = {}
          mark.id = station.id,
            // console.log(mark.id)
            mark.latitude = station.latitude,
            mark.longitude = station.longitude,

            mark.availability = station.availability
            mark.address = station.address
            if (mark.availability === true){
              mark.iconPath = '/image/green_marker.png';
            } else {
              mark.iconPath = '/image/red_marker.png'
            }
            markers.push(mark)

        })
        page.setData({ markers: markers })
        console.log(page.data.markers)
      }
    })
  },
  
})
