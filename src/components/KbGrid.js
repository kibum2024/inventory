import React, { useEffect, useState } from 'react';
import Kbbutton from './KbButton';
import KbPagination from './KbPagination';
import { KbGridConfig } from './KbGridConfig';
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import './KbGrid.css';


const KbGrid = ({ columnDefsProp, rowDataProp, rowSelectionProp, paginationProp, paginationPageSizeProp }) => {
  // const config = { ...KbGridConfig };
  const config = KbGridConfig;
  const [columnDefs] = useState(columnDefsProp);
  const [rowDatas, setRowDatas] = useState(rowDataProp);
  const [columnSelected, setColumnSelected] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]); // 여러 행 선택 관리
  const [isHeaderChecked, setIsHeaderChecked] = useState(false); // 헤더 체크박스 상태
  const [clickCount, setClickCount] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [editCell, setEditCell] = useState(null); // 수정 중인 셀 정보
  const [inputSearchName, setInputSearchName] = useState('');
  const [searchColumns, setSearchColumns] = useState([]);
  const itemsPerPage = paginationPageSizeProp; // 페이지당 항목 수
  let totalPages = null;
  let currentItems = null;

  const handleInputChange = (index, field, value) => {
    const newData = [...rowDatas];
    newData[index][field] = value;
    setRowDatas(newData);
  };

  const formatNumber = (value) => {
    if (isNaN(value) || value === '') return value;
    return Number(value).toLocaleString();
  };

  const totalWidth = columnDefs.reduce((sum, columnDef) => {
    return sum + (columnDef.width ? columnDef.width + 11.5 : 161.5); // 기본값 150px
  }, 0);

  const rowSelectedClick = (rowIndex) => {
    if (rowSelectionProp) { // 멀티 선택 여부 확인
      if (selectedRows.includes(rowIndex)) {
        const updatedSelectedRows = selectedRows.filter(index => index !== rowIndex);
        setSelectedRows(updatedSelectedRows);
        setIsHeaderChecked(false); // 헤더 체크박스 해제
      } else {
        const updatedSelectedRows = [...selectedRows, rowIndex];
        setSelectedRows(updatedSelectedRows);
        if (updatedSelectedRows.length === rowDatas.length) {
          setIsHeaderChecked(true);
        }
      }
    } else {
      setSelectedRows([rowIndex]);
    }
  };

  const handleHeaderCheckboxClick = () => {
    if (isHeaderChecked) {
      setSelectedRows([]); // 전체 해제
      setIsHeaderChecked(false);
    } else {
      const allRows = rowDatas.map((_, index) => index);
      setSelectedRows(allRows); // 전체 선택
      setIsHeaderChecked(true);
    }
  };

  const columnSortClick = (field) => {
    setColumnSelected(field);
    setClickCount(prevCount => (prevCount + 1) % 3);
  };

  useEffect(() => {
    setClickCount(1);
  }, [columnSelected]);

  const sortedData = [...rowDatas].sort((a, b) => {
    const fieldA = a[columnSelected];
    const fieldB = b[columnSelected];

    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      if (clickCount === 1) return fieldA.localeCompare(fieldB); // 오름차순
      if (clickCount === 2) return fieldB.localeCompare(fieldA); // 내림차순
    } else if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      if (clickCount === 1) return fieldA - fieldB; // 오름차순
      if (clickCount === 2) return fieldB - fieldA; // 내림차순
    }
    return 0;
  });

  if (paginationProp) {
    totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  } else {
    currentItems = sortedData;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCellEdit = (rowIndex, field) => {
    setEditCell({ rowIndex, field });
  };

  const handleCellBlur = () => {
    setEditCell(null);
  };

  const handleCellChange = (event, chartype) => {
    const { value } = event.target;
    const { rowIndex, field } = editCell;
    if (chartype === 'number') {
      const numericValue = value === '' ? 0 : Number(value);
      handleInputChange(rowIndex, field, numericValue);
    } else {
      handleInputChange(rowIndex, field, value);
    }
  };

  useEffect(() => {
    // search 속성이 true인 열의 필드를 수집하여 상태에 저장
    const columnsWithSearch = columnDefs
      .filter(columnDef => columnDef.search)
      .map(columnDef => columnDef.field);
  
    setSearchColumns(columnsWithSearch);
  }, [columnDefs]); 

  const inputSearchChange = (e) => {
    setInputSearchName(e.target.value);
  }

  const inputSearch = () => {
    if (inputSearchName.trim() === '') {
      // 검색어가 없으면 원래 데이터를 표시
      setRowDatas(rowDataProp);
    } else {
      const filteredData = rowDatas.filter(data =>
        searchColumns.some(column => {
          const fieldValue = data[column];
          return fieldValue && fieldValue.toString().includes(inputSearchName);
        })
      );
  
      setRowDatas(filteredData);  // 필터링된 데이터로 업데이트
    }
    setCurrentPage(1); 
  }

  const InputDataEnterKey = (e) => {
    if (e.key === 'Enter') {
      inputSearch();
    }
  }

  return (
    <div>
      <div className="kb-search-content"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: `${totalWidth}px`,
          height: config.height,
          margin: '10px 0px',
        }}
      >
        <input  
          type="text" 
          className='kb-search-input' 
          placeholder="  검색어를 입력하세요" 
          onChange={inputSearchChange} 
          onKeyDown={InputDataEnterKey} 
          style={{
            height: config.height,
            borderRadius: config.borderRadius,
          }}
        />
        <Kbbutton type="searchButton" onClick={() => inputSearch()} />
      </div>
      <div style={{ display: 'flex', width: `${totalWidth}px`, height: config.height, lineHeight: config.height }}>
        {columnDefs.map((columnDef, index) => {
          return (
            <div key={index} className='kb-header-cell'
              tabIndex="-1"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: config.fontWeight,
                border: config.headBorder,
                backgroundColor: config.headBackgroundColor,
                cursor: 'pointer',
                padding: '0px 5px',
                userSelect: 'none',
                ...(columnDef.width ? { width: `${columnDef.width}px` } : { width: '150px' })
              }}
              onClick={() => { columnSortClick(columnDef.field) }}
            >
              {columnDef.checkboxSelection && columnDef.headerCheckboxSelection ? (
                <div>
                  <input
                    type="checkbox"
                    checked={isHeaderChecked}
                    onChange={handleHeaderCheckboxClick} // 전체 선택/해제
                  />
                </div>
              ) : ( columnDef.numbering ? 
                  <div className="kb-header-cell-label">
                    <span className="kb-header-cell-text">{columnDef.headerName}</span>
                  </div>  
                  :
                  <div  className="kb-header-cell-label"  
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                  >
                    <div className="kb-header-cell-text">{columnDef.headerName}</div>
                    {columnSelected === columnDef.field && clickCount === 1 && (
                      <div className="kb-icon-asc" style={{ height: config.iconHeight, lineHeight: config.iconHeight }}>
                        &nbsp;<IoCaretUp style={{ width: config.iconWidth, height: config.iconHeight, lineHeight: config.iconHeight }}/>
                      </div>
                    )}
                    {columnSelected === columnDef.field && clickCount === 2 && (
                      <div className="kb-icon-desc" style={{ height: config.iconHeight, lineHeight: config.iconHeight }}>
                        &nbsp;<IoCaretDown style={{ width: config.iconWidth, height: config.iconHeight, lineHeight: config.iconHeight }}/>
                      </div>
                    )}
                  </div>
              )}
            </div>
          )
        })}
      </div>
      <div>
        {currentItems.map((rowData, rowIndex) => {
          const actualIndex = (currentPage - 1) * itemsPerPage + rowIndex;
          return (
            <div key={rowIndex}
              className={`kb-row ${(rowIndex + 1) % 2 === 0 ? 'kb-even-color' : ''} ${selectedRows.includes(actualIndex) ? 'kb-row-selected' : ''}`}
              style={{ display: 'flex', width: `${totalWidth}px`, height: config.height, lineHeight: config.height }}
              onClick={() => { rowSelectedClick(actualIndex) }}
            >
              {columnDefs.map((columnDef, colIndex) => (
                <div key={colIndex}
                  className='kb-cell'
                  tabIndex="-1"
                  style={{
                    border: config.border,
                    padding: '0px 5px',
                    ...(columnDef.width ? { width: `${columnDef.width}px` } : { width: '150px' }),
                    ...(columnDef.align ? { textAlign: `${columnDef.align}` } : {}),
                  }}
                >
                  {columnDef.checkboxSelection ? (
                    <div>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(actualIndex)}
                        onChange={() => rowSelectedClick(actualIndex)} // 선택할 때 체크박스와 행 클릭 연동
                      />
                    </div>
                  ) : columnDef.editable ? (
                    editCell && editCell.rowIndex === actualIndex && editCell.field === columnDef.field ? (
                      <input
                        type="text"
                        value={rowData[columnDef.field]}
                        onBlur={handleCellBlur}
                        onChange={(e) => handleCellChange(e, columnDef.chartype)}
                        autoFocus
                        style={{
                          width: `${columnDef.width || 150}px`, // 필드 크기에 맞게 조정
                          height: '38px', // 높이를 맞추기
                          border: 'none',
                          boxSizing: 'border-box',
                        }}
                        onFocus={(e) => e.target.select()} // 클릭 시 기존 값 선택
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.target.blur() } }}
                      />
                    ) : (
                      <div onClick={() => handleCellEdit(actualIndex, columnDef.field)}>
                        {columnDef.separator ? formatNumber(rowData[columnDef.field]) : rowData[columnDef.field]}
                      </div>
                    )
                  ) : columnDef.numbering ? (
                    <div>{formatNumber(actualIndex + 1)}</div>
                  ) : columnDef.separator ? (
                    <div>{formatNumber(rowData[columnDef.field])}</div>
                  ) : (
                    <div>{rowData[columnDef.field]}</div>
                  )}
                </div>
              ))}
            </div>
          )
        })}
      </div>

      {paginationProp && (
        <div className='kb-grid-page'
          style={{
            width: `${totalWidth}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <KbPagination
            currentPageProp = {currentPage}
            totalPagesProp = {totalPages}
            pageLimitProp = {5}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default KbGrid;
