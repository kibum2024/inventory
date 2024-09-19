import React from 'react';

const KbInput = (widthProp) => {
  return (
    <div>
      <div
        // style={{
        //   width:'100px',
        //   height:'25px',
        // }}
      >
        <input 
          type="text" 
          style={{
            width: widthProp,
            height:'25px',
            borderRadius: '6px',
          }}
        />
      </div>
    </div>
  );
}

export default KbInput;