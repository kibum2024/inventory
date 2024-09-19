import React from 'react';
import KbButton from '../kbcomponents/KbButton';

const Form3 = ({ formData, setFormData }) => {
  const buttonClick = (buttonType) => {
    console.log(`${buttonType} 버튼이 클릭되었습니다.`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div>
        <h2>3번째 폼 등록</h2>
        <div>X</div>
      </div>
      <div>
        <div>
          <div>취득구분</div>
          <div>
            <KbButton typeProp="deleteButton" textProp={""} onClick={() => buttonClick('삭제')} />
            <input
              type="text"
              name="acquisitionType"
              value={formData.acquisitionType || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <div>자산명</div>
          <input
            type="text"
            name="assetName"
            value={formData.assetName || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>취득금액</div>
          <input
            type="number"
            name="acquisitionAmount"
            value={formData.acquisitionAmount || ''}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Form3;
