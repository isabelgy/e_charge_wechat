Page({
  data: {
    latitude: 31.223520,
    longitude: 121.455909,
    markers: [{
      id: 1,
      latitude: 31.220120,
      longitude: 121.443128,
      iconPath: '/image/pin.png',
      // name: 'T.I.T 创意园'
    },
      {
        id: 2,
        latitude: 31.219166,
        longitude: 121.443466,
        iconPath: '/image/pin.png',
        // name: 'T.I.T 创意园'
      },
      {
        id: 3,
        latitude: 31.227466,
        longitude: 121.463488,
        iconPath: '/image/pin.png',
        // name: 'T.I.T 创意园'
      },
      {
        id: 4,
        latitude: 31.222989,
        longitude: 121.451300,
        iconPath: '/image/pin.png',
        // name: 'T.I.T 创意园'
      }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      // iconPath: '/image/pin.jpg'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      // iconPath: '/image/pin.jpg'
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
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 31.223520,
        longitude: 121.455909,
      }, {
        latitude: 31.023520,
        longitude: 121.055909,
      }]
    })
  },
  // onLoad: function (options) {
  //   let page = this;
  //   wx.request({
  //     url: "https://easy-mock.com/mock/5acc974ffbaa0f54f4d6a502/stations",
  //     method: 'GET',
  //     success(res) {
  //       const stations = res.data.stations;
  //       const markers = [{
  //         id: stations.id,
  //         latitude: stations.latitude,
  //         longitude: stations.longitude,
  //         iconPath: '/image/pin.png',
  //       }]
  //     },

  //       page.setData({
  //         markers: markers
  //       });
  //       wx.hideToast();
  //     }
  // }
})
