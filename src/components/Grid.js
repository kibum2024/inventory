import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


function Grid() {
  const gridRef = useRef(null); // Grid의 API에 접근하기 위한 ref
  const [columnDefs] = useState([
    { headerName: '선택', checkboxSelection: true, headerCheckboxSelection: true},
    { headerName: '제조사', field: 'make' },
    { headerName: '제품', field: 'model', sortable: true, width: 150},
    { headerName: '가격', field: 'price', filter: 'agNumberColumnFilter', cellClass: 'highlight-price', editable: true   }
  ]);

  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ]);

  // const [rowData] = useState([
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ]);

  // 선택된 행 삭제 함수
  const deleteSelectedRows = () => {
    const selectedRows = gridRef.current.api.getSelectedRows(); // 선택된 행 가져오기
    const newData = rowData.filter(row => !selectedRows.includes(row)); // 선택되지 않은 행만 남기기
    setRowData(newData); // 그리드 업데이트
  };

  return (
    <div>
      <button onClick={deleteSelectedRows}>Delete Selected Rows</button>
      <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
        <AgGridReact
          ref={gridRef} // gridRef를 설정하여 그리드 API에 접근
          rowData={rowData} // 데이터
          columnDefs={columnDefs} // 컬럼 정의
          rowSelection="multiple" // 여러 행 선택 가능
          pagination={true} // 페이징 활성화
          paginationPageSize={5} // 페이지당 10개 행 표시
        />
      </div>
    </div>
  );
}

export default Grid;
