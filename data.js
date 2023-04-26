var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom",
      "name": "BedRoom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.084181689313624,
        "pitch": 0.1879559410340903,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.0497209683275468,
          "pitch": 0.013945653392948287,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.01642113802528833,
        "pitch": 0.1650871735355075,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.12676966680860602,
          "pitch": 0.026059913167056692,
          "rotation": 0,
          "target": "0-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dona Paula 3rd Floor Final",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
