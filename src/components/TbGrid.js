import React, { useState } from 'react';

const TbGrid = () => {
  // 컬럼 정의와 행 데이터
  const [columnDefs] = useState([
    { headerName: '선택', checkboxSelection: true },
    { headerName: '제조사', field: 'make', editable: true },
    { headerName: '제품', field: 'model', sortable: true, width: 150, editable: true },
    { headerName: '가격', field: 'price', editable: true }
  ]);

  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ]);

  // 편집 가능한 셀 업데이트 함수
  const handleInputChange = (index, field, value) => {
    const newData = [...rowData];
    newData[index][field] = value;
    setRowData(newData);
  };

  return (
    <table border="1" style={{ borderCollapse: 'collapse', width: '600px', textAlign: 'left' }}>
      <thead>
        <tr>
          {columnDefs.map((col, index) => (
            <th key={index}>{col.headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* 체크박스 렌더링 */}
            {columnDefs[0].checkboxSelection && (
              <td>
                <input type="checkbox" />
              </td>
            )}
            {/* 데이터 필드 렌더링 */}
            {columnDefs.slice(1).map((col, colIndex) => (
              <td key={colIndex}>
                {col.editable ? (
                  <input
                    type="text"
                    value={row[col.field]}
                    onChange={(e) => handleInputChange(rowIndex, col.field, e.target.value)}
                  />
                ) : (
                  row[col.field]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TbGrid;
