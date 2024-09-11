import React, { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline, IoPencil, IoSearch, IoCloseCircleOutline } from 'react-icons/io5';
import { KbButtonConfig } from './KbButtonConfig';

const Kbbutton = ({ type, onClick }) => {
  const config = KbButtonConfig[type];  // 'deleteButton' 또는 'addButton' 타입에 따라 설정값 가져오기
  const [isHovered, setIsHovered] = useState(false);  // hover 상태 관리

  const iconMap = {
    IoRemoveCircleOutline: IoRemoveCircleOutline,
    IoAddCircleOutline: IoAddCircleOutline,
    IoPencil: IoPencil,
    IoSearch: IoSearch,
    IoCloseCircleOutline: IoCloseCircleOutline
  };

  const IconComponent = iconMap[config.icon];

  const buttonStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: config.width, 
    height: config.height, 
    lineHeight: config.height, 
    border: config.border, 
    backgroundColor: isHovered ? config.hover.backgroundColor : config.backgroundColor,
    borderRadius: config.borderRadius,
    color: isHovered ? config.hover.color : config.color,
    userSelect: 'none',
    cursor: 'pointer'
  };

  return (
    <div>
      <div 
        style={buttonStyle}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}  // 마우스가 버튼 위로 갈 때
        onMouseLeave={() => setIsHovered(false)}  // 마우스가 버튼을 벗어날 때
      >
        <div style={{ width: config.iconWidth, height: config.iconHeight }}><IconComponent style={{ width: config.iconWidth, height: config.iconHeight }}/></div>
        &nbsp;&nbsp;
        <div>{config.text}</div>
      </div>
    </div>
  );
}

export default Kbbutton;