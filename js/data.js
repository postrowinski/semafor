const active = 'active';
const blinking = 'blinking'

const signals = [
    { 
        id: 'S1', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: null,
        centerLigth: active,
        bottomCenterLigth: null,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S2', 
        topPlateActive: false, 
        topLigth: active,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: null,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S3', 
        topPlateActive: false, 
        topLigth: blinking,
        topCenterLigth: { active: false, blinking: false },
        centerLigth: { active: false, blinking: false },
        bottomCenterLigth: { active: false, blinking: false },
        bottomLigth: { active: false, blinking: false },
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S3a', 
        topPlateActive: false, 
        topLigth: blinking,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: null,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S4', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: null,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S4a', 
        topPlateActive: true, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: null,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S5', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: active,
        centerLigth: null,
        bottomCenterLigth: null,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S6', 
        topPlateActive: false, 
        topLigth: active,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S6a', 
        topPlateActive: false, 
        topLigth: active,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: true,
        centerIconActive: true,
        bottomIconActive: true,
    },
    { 
        id: 'S7', 
        topPlateActive: false, 
        topLigth: blinking,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
        oldBottomPlateActive: { greenLine: true }
    },
    { 
        id: 'S7a', 
        topPlateActive: false, 
        topLigth: blinking,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: true,
        centerIconActive: true,
        bottomIconActive: true,
    },
    { 
        id: 'S8', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
        oldBottomPlateActive: { greenLine: true }
    },
    { 
        id: 'S8a', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: true,
        centerIconActive: true,
        bottomIconActive: true,
    },
    { 
        id: 'S8b', 
        topPlateActive: true, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: true,
        centerIconActive: true,
        bottomIconActive: true,
    },
    { 
        id: 'S9', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: active,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: null,
        topIconActive: true,
        centerIconActive: true,
        bottomIconActive: true,
    },
    { 
        id: 'S9a', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: active,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: true,
        centerIconActive: true,
        bottomIconActive: true,
    },
    { 
        id: 'S10', 
        topPlateActive: false, 
        topLigth: active,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: true,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S10a', 
        topPlateActive: false, 
        topLigth: active,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
        oldBottomPlateActive: { orangeLine: true }
    },
    { 
        id: 'S11', 
        topPlateActive: false, 
        topLigth: blinking,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: true,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S11a', 
        topPlateActive: false, 
        topLigth: blinking,
        topCenterLigth: null,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
        oldBottomPlateActive: { orangeLine: true }
    },
    { 
        id: 'S12', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: true,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S12a', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
        oldBottomPlateActive: { orangeLine: true }
    },
    { 
        id: 'S12b', 
        topPlateActive: true, 
        topLigth: null,
        topCenterLigth: blinking,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: true,
        centerIconActive: true,
        bottomIconActive: true,
    },
    { 
        id: 'S13', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: active,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: false,
        topIconActive: true,
        centerIconActive: false,
        bottomIconActive: false,
    },
    { 
        id: 'S13a', 
        topPlateActive: false, 
        topLigth: null,
        topCenterLigth: active,
        centerLigth: null,
        bottomCenterLigth: active,
        bottomLigth: null,
        bottomPlateActive: true,
        topIconActive: false,
        centerIconActive: false,
        bottomIconActive: false,
        oldBottomPlateActive: { orangeLine: true }
    },
];