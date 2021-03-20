var APP_DATA = {
  "scenes": [
    {
      "id": "0-360-test-3",
      "name": "360 test 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4148513375894236,
          "pitch": -0.7221889099783638,
          "rotation": 0,
          "target": "1-y-360-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-y-360-2",
      "name": "Y 360 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6417087091216409,
          "pitch": 0.8665727358342412,
          "rotation": 0,
          "target": "0-360-test-3"
        },
        {
          "yaw": -0.7637651906931424,
          "pitch": 0.63650194821561,
          "rotation": 0,
          "target": "1-y-360-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-y-360",
      "name": "Y 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
