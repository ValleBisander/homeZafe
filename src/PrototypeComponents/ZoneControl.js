import React, { useState } from 'react';

const zones = {
  focus: {
    name: "Focus",
    lighting: "Brighter lights",
    sounds: "Nature sounds",
    curtains: "Curtains ope",
  },
  chill: {
    name: "Chill",
    lighting: "Cosy lights",
    sounds: "Calm music",
    curtains: "Curtains by the bed closed",
  },
  clean: {
    name: "Cleaning",
    lighting: "All lights on full brightness",
    sounds: "Upbeat music",
    curtains: "All curtains open",
  }
};

const ZoneControl = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneChange = (zone) => {
    setSelectedZone(zones[zone]);
    
    console.log(`Activate zone: ${zones[zone].name}`);
  };

  return (
    <div>
      <h1>Choose your current zone</h1>
      <div>
        <button onClick={() => handleZoneChange('focus')}>Zon Fokus</button>
        <button onClick={() => handleZoneChange('chill')}>Zon Chilla</button>
        <button onClick={() => handleZoneChange('clean')}>Zon Städa</button>
      </div>

      {selectedZone && (
        <div>
          <h2>Active zone: {selectedZone.name}</h2>
          <p>Light setting: {selectedZone.lighting}</p>
          <p>sound: {selectedZone.sounds}</p>
          <p>curtains: {selectedZone.curtains}</p>
        </div>
      )}
    </div>
  );
};

export default ZoneControl;
