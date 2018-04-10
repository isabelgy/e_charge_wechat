Page({
  data: {
    latitude: 31.223520,
    longitude: 121.455909,
    markers: [{
      id: 1,
      latitude: 31.220120,
      longitude: 121.443128,
      // name: 'T.I.T 创意园'
    },
      {
        id: 2,
        latitude: 31.219166,
        longitude: 121.443466,
        // name: 'T.I.T 创意园'
      },
      {
        id: 3,
        latitude: 31.227466,
        longitude: 121.463488,
        // name: 'T.I.T 创意园'
      },
      {
        id: 4,
        latitude: 31.222989,
        longitude: 121.451300,
        // name: 'T.I.T 创意园'
      }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      //iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      //iconPath: '/image/location.png'
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
  }
})
