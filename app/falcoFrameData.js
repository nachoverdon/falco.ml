var falco = {
  "jab": {
    "jab1": {
      "name": "Jab 1",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/JabAnimation.gif",
      "total": 17,
      "hit": [2, 3],
      "IASA": 16,
      "nextWindow": [3, 31],
      "nextStartASA": 6
    },
    "jab2": {
      "name": "Jab 2",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/Jab2Animation.gif",
      "total": 20,
      "hit": [3, 4],
      "IASA": 19,
      "nextWindow": [1, 20],
      "nextStartASA": 7
    },
    "jab3": {
      "name": "Jabs 3",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/JabRapidAnimation.gif",
      "total": 36,
      "hit": [[3, 4], [10, 11], [17, 18], [24, 25], [31, 32]]
    }
  },
  "dash": {
    "daskAttack": {
      "name": "Dash attack",
      "total": 39,
      "hit": [4, 17],
      "IASA": 36
    }
  },
  "tilt": {
    "fordward": {
      "name": "Fordward tilt",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/ForwardTiltAnimation.gif",
      "total": 26,
      "hit": [5, 9]
    },
    "fordwardUp": {
      "name": "Fordward tilt (Upwards)",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/ForwardTiltUpAnimation.gif",
      "total": 26,
      "hit": [5, 9]
    },
    "fordwardDown": {
      "name": "Fordward tilt (Downwards)",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/ForwardTiltDownAnimation.gif",
      "total": 26,
      "hit": [5, 9]
    },
    "up": {
      "name": "Up tilt",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/UpTiltAnimation.gif",
      "total": 23,
      "hit": [5, 11],
      "IASA": 23
    },
    "down": {
      "name": "Down tilt",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/DownTiltAnimation.gif",
      "total": 29,
      "hit": [7, 9],
      "IASA": 28
    }
  },
  "aerial": {
    "neutral": {
      "name": "Neutral air",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/NeutralAirAnimation.gif",
      "total": 49,
      "hit": [4, 31],
      "IASA": 42,
      "autoCancel": [3, 37],
      "landingLag": 15,
      "landingLagLCanceled": 7
    },
    "fordward": {
      "name": "Fordward air",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/ForwardAirAnimation.gif",
      "total": 59,
      "hit": [[6, 8], [16, 18], [24, 26], [33, 35], [43, 45]],
      "IASA": 53,
      "autoCancel": [5, 49],
      "landingLag": 22,
      "landingLagLCanceled": 11
    },
    "back": {
      "name": "Back air",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/BackAirAnimation.gif",
      "total": 39,
      "hit": [4, 19],
      "IASA": 38,
      "autoCancel": [3, 23],
      "landingLag": 20,
      "landingLagLCanceled": 10
    },
    "up": {
      "name": "Up air",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/UpAirAnimtion.gif",
      "total": 39,
      "hit": [[8, 9], [11, 14]],
      "IASA": 36,
      "autoCancel": [7, 26],
      "landingLag": 18,
      "landingLagLCanceled": 9
    },
    "down": {
      "name": "Down air",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/DownAirAnimation.gif",
      "total": 49,
      "hit": [4, 30],
      "IASA": 0,
      "autoCancel": [4, 30],
      "landingLag": 18,
      "landingLagLCanceled": 9
    }
  },
  "smash": {
    "fordward": {
      "name": "Fordward smash",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/ForwardSmashAnimation.gif",
      "total": 39,
      "hit": [12, 21],
      "IASA": 0,
      "charge": 7
    },
    "up": {
      "name": "Up smash",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/UpSmashAnimation.gif",
      "total": 43,
      "hit": [7, 15],
      "IASA": 0,
      "charge": 2,
      "invicible": [1, 10]
    },
    "down": {
      "name": "Down smash",
      "img": "http://img.photobucket.com/albums/v222/yjc1234/Falco%20Hitboxes/DownSmashAnimation.gif",
      "total": 49,
      "hit": [6, 10],
      "IASA": 46,
      "charge": 2,
      "invicible": [1, 6]
    }
  },
  "special": {
    "neutral": {
      "grounded": {
        "name": "Neutral B: Blaster (grounded)",
        "total": 57,
        "shot": 23,
        "repeat": 24,
        "laserLife": 99
      },
      "airborne": {
        "name": "Neutral B: Blaster (airborne)",
        "total": 42,
        "shot": 13,
        "repeat": 16,
        "laserLife": 99,
        "autoCancel": "on landing"
      }
    },
    "side": {
      "grounded": {
        "name": "Side B: Phantasm (grounded)",
        "total": 59,
        "moves": 17,
        "hit": [18, 21],
        "shorten": [[17, 18], [19], [20]],
        "edge": 25,
        "landingLag": 20,
        "LandFallSpecialLag": 3
      },
      "airborne": {
        "name": "Side B: Phantasm (airborne)",
        "total": 59,
        "moves": 17,
        "hit": [18, 21],
        "shorten": [[17, 18], [19], [20]],
        "edge": 25,
        "landingLag": 20,
        "LandFallSpecialLag": 3
      }
    },
    "up": {
      "name": "Up B: Firebird",
      "total": 84,
      "moves": 43,
      "hit": [43, 64],
      "edgeCharge": 16,
      "edgeMove": 65,
      "landingLag": 6,
      "LandFallSpecialLag": 3
    },
    "down": {
      "name": "Down B: Reflector (Shine)",
      "total": 39,
      "hit": 1,
      "invicible": 1,
      "reflects": [4, 21],
      "reflectsAfterRelease": 1,
      "release": 19,
      "jumpCanceled": [4, 21]
    }
  },
  "grab": {
    "standing": {
      "name": "Standing grab",
      "total": 30,
      "hit": [7, 8]
    },
    "dash": {
      "name": "Dash grab",
      "total": 40,
      "hit": [12, 13]
    },
  },
  "throw": {
    "fordward": {
      "name": "Fordward throw",
      "total": 33,
      "release": 11,
      "hit": [10, 13],
      "freezeFrames": [[3]]
    },
    "back": {
      "name": "Back throw",
      "total": 39,
      "release": 9,
      "lasers": [15, 18, 21]
    },
    "up": {
      "name": "Up throw",
      "total": 39,
      "release": 7,
      "lasers": [18, 20, 24]
    },
    "down": {
      "name": "Down throw",
      "total": 43,
      "release": 33,
      "lasers": [23, 25, 28, 31],
      "freezeFrames": [[3], [3], [3], [3]]
    }
  },
  "dodge": {
    "spot": {
      "name": "Spot dodge",
      "total": 22,
      "invicible": [2, 15]
    },
    "air": {
      "name": "Air dodge",
      "total": 49,
      "invicible": [4, 29]
    },
    "fordward": {
      "name": "Roll fordwards",
      "total": 31,
      "invicible": [4, 19]
    },
    "back": {
      "name": "Roll backwards",
      "total": 31,
      "invicible": [4, 19]
    }
  },
  "jump": {
    "first": {
      "full": {
        "squat": 5,
        "airTime": 51,
        "earliestFastFall": 27,
        "FastFallAirTime": 41
      },
      "short": {
        "squat": 5,
        "airTime": 25,
        "earliestFastFall": 14,
        "FastFallAirTime": 17
      }
    },
    "second": {
      "earliestFastFall": 24
    }
  },
  "tech": {
    "neutral": {
      "name": "Tech in place",
      "total": 26,
      "invicible": [1, 20]
    },
    "fordward": {
      "name": "Tech-roll fordward",
      "total": 40,
      "invicible": [1, 20]
    },
    "back": {
      "name": "Tech-roll backward",
      "total": 40,
      "invicible": [1, 20]
    },
    "wall": {
      "name": "Wall tech",
      "total": 31,
      "invicible": [1, 14],
      "IASA": 6
    },
    "wallJump": {
      "name": "Wall jump tech",
      "total": 40,
      "invicible": [1, 14],
      "IASA": 1
    },
    "ceiling": {
      "name": "Ceiling tech",
      "total": 26,
      "invicible": [1, 14]
    }
  },
  "nonTeched": {
    "floor": {
      "name": "Non-teched floor",
      "total": 26
    },
    "wall": {
      "name": "Non-teched wall",
      "total": 26,
      "invicible": [1, 14]
    },
    "ceiling": {
      "name": "Non-teched ceiling",
      "total": 26,
      "invicible": [1, 14]
    }
  },
  "getUp": {
    "attack": {
      "back": {
        "name": "Get-up attack (back)",
        "total": 49,
        "hit": [[17, 19], [24, 26]],
        "invicible": [1, 26]
      },
      "stomach": {
        "name": "Get-up attack (stomach)",
        "total": 49,
        "hit": [[19, 20], [25, 26]],
        "invicible": [1, 26]
      }
    },
    "neutral": {
      "back": {
        "name": "Neutral get-up (back)",
        "total": 30,
        "invicible": [1, 23]
      },
      "stomach": {
        "name": "Neutral get-up (stomach)",
        "total": 30,
        "invicible": [1, 23]
      }
    },
    "fordward": {
      "back": {
        "name": "Get-up roll fordward (back)",
        "total": 35,
        "invicible": [1, 19]
      },
      "stomach": {
        "name": "Get-up roll fordward (stomach)",
        "total": 35,
        "invicible": [1, 19]
      }
    },
    "backward": {
      "back": {
        "name": "Get-up roll backward (back)",
        "total": 35,
        "invicible": [12, 29]
      },
      "stomach": {
        "name": "Get-up roll backward (stomach)",
        "total": 35,
        "invicible": [1, 24]
      }
    }
  },
  "ledge": {
    "getUp": {
      "fast": {
        "total": 34,
        "invicible": [1, 30]
      },
      "slow": {
        "total": 59,
        "invicible": [1, 55]
      }
    },
    "roll": {
      "fast": {
        "total": 49,
        "invicible": [1, 34]
      },
      "slow": {
        "total": 79,
        "invicible": [1, 62]
      }
    },
    "attack": {
      "fast": {
        "total": 54,
        "invicible": [1, 21],
        "hit": [25, 34]
      },
      "slow": {
        "total": 69,
        "invicible": [1, 53],
        "hit": [57, 59]
      }
    },
    "jump": {
      "fast": {
        "total": 57,
        "invicible": [1, 14],
        "earliestFastFall": 39
      },
      "slow": {
        "total": 57,
        "invicible": [1, 19],
        "earliestFastFall": 44
      }
    }
  },
  "other": {
    "dashBecomesRun": 12,
    "turnJumpThreshold": 14,
    "runTurnaround": 24,
    "landingLag": 4,
    "taunt": {
      "total": 114,
      "sounds": [2, 18, 76]
    }
  }
}

module.exports = falco;