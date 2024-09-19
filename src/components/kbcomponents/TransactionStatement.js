import React, { useRef, useState } from 'react';
import * as XLSX from 'xlsx';

const TransactionStatement = () => {
  const printRef = useRef();
  const [scale, setScale] = useState(1); // 화면 확대/축소 비율

  // 거래명세서 출력 함수
  const handlePrint = () => {
    const printContent = printRef.current;
    const windowPrint = window.open('', '', 'width=800,height=600');
    windowPrint.document.write('<html><head><title>Print Transaction Statement</title>');
    windowPrint.document.write('<style>body{font-family:Arial,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #000;padding:8px;text-align:center;}th{background-color:#f2f2f2;}h1{text-align:center;font-size:24px;}</style>');
    windowPrint.document.write('</head><body>');
    windowPrint.document.write(printContent.innerHTML);
    windowPrint.document.write('</body></html>');
    windowPrint.document.close();
    windowPrint.focus();
    windowPrint.print();
    windowPrint.close();
  };

  // 거래명세서를 Excel 파일로 저장하는 함수
  const handleSaveAsFile = () => {
    const tableData = [
      ['날짜', '품목', '규격', '수량', '단가', '공급가액', '세액', '비고'],
      ['05.08', '기타 등록', '1', '1', '10,000,000', '10,000,000', '1,000,000', ''],
      ['05.08', '그 외', '1', '1', '500,000', '500,000', '50,000', ''],
      ['05.08', '쌀', '3', '3', '1,000,000', '3,000,000', '300,000', '']
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transaction');
    XLSX.writeFile(workbook, 'Transaction_Statement.xlsx');
  };

  // 화면 확대 함수
  const handleZoomIn = () => {
    setScale(prevScale => prevScale + 0.1);
  };

  // 화면 축소 함수
  const handleZoomOut = () => {
    setScale(prevScale => (prevScale > 0.2 ? prevScale - 0.1 : prevScale)); // 최소 축소 비율을 0.2로 설정
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* 거래명세서 내용 */}
      <div ref={printRef} style={{ width: '800px', margin: '0 auto', padding: '20px', border: '1px solid #000', transform: `scale(${scale})`, transformOrigin: 'top center' }}>
        <h1>거래명세서</h1>
        <table className="info-table" style={{ marginBottom: '20px', width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <th style={{ border: '1px solid black' }}>등록번호</th>
              <td style={{ border: '1px solid black' }}>120-86-15854</td>
              <th style={{ border: '1px solid black' }}>등록번호</th>
              <td style={{ border: '1px solid black' }}>123-45-67890</td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>상호</th>
              <td style={{ border: '1px solid black' }}>(주) 파토스</td>
              <th style={{ border: '1px solid black' }}>상호</th>
              <td style={{ border: '1px solid black' }}>적격세무회계</td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>사업장 주소</th>
              <td style={{ border: '1px solid black' }}>서울 영등포구 여의대로 24</td>
              <th style={{ border: '1px solid black' }}>사업장 주소</th>
              <td style={{ border: '1px solid black' }}>서울특별시 영등포구 여의대로 24</td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>업태</th>
              <td style={{ border: '1px solid black' }}>서비스/건설업</td>
              <th style={{ border: '1px solid black' }}>업태</th>
              <td style={{ border: '1px solid black' }}>시설물유지관리</td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>종목</th>
              <td style={{ border: '1px solid black' }}>건설업, 서비스</td>
              <th style={{ border: '1px solid black' }}>종목</th>
              <td style={{ border: '1px solid black' }}>종 시설물 유지 관리</td>
            </tr>
          </tbody>
        </table>

        <table className="product-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black' }}>날짜</th>
              <th style={{ border: '1px solid black' }}>품목</th>
              <th style={{ border: '1px solid black' }}>규격</th>
              <th style={{ border: '1px solid black' }}>수량</th>
              <th style={{ border: '1px solid black' }}>단가</th>
              <th style={{ border: '1px solid black' }}>공급가액</th>
              <th style={{ border: '1px solid black' }}>세액</th>
              <th style={{ border: '1px solid black' }}>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black' }}>05.08</td>
              <td style={{ border: '1px solid black' }}>기타 등록</td>
              <td style={{ border: '1px solid black' }}>1</td>
              <td style={{ border: '1px solid black' }}>1</td>
              <td style={{ border: '1px solid black' }}>10,000,000</td>
              <td style={{ border: '1px solid black' }}>10,000,000</td>
              <td style={{ border: '1px solid black' }}>1,000,000</td>
              <td style={{ border: '1px solid black' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black' }}>05.08</td>
              <td style={{ border: '1px solid black' }}>그 외</td>
              <td style={{ border: '1px solid black' }}>1</td>
              <td style={{ border: '1px solid black' }}>1</td>
              <td style={{ border: '1px solid black' }}>500,000</td>
              <td style={{ border: '1px solid black' }}>500,000</td>
              <td style={{ border: '1px solid black' }}>50,000</td>
              <td style={{ border: '1px solid black' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black' }}>05.08</td>
              <td style={{ border: '1px solid black' }}>쌀</td>
              <td style={{ border: '1px solid black' }}>3</td>
              <td style={{ border: '1px solid black' }}>3</td>
              <td style={{ border: '1px solid black' }}>1,000,000</td>
              <td style={{ border: '1px solid black' }}>3,000,000</td>
              <td style={{ border: '1px solid black' }}>300,000</td>
              <td style={{ border: '1px solid black' }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 버튼들 */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePrint} style={{ marginRight: '10px' }}>Print</button>
        <button onClick={handleSaveAsFile} style={{ marginRight: '10px' }}>Save as Excel</button>
        <button onClick={handleZoomIn} style={{ marginRight: '10px' }}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default TransactionStatement;
