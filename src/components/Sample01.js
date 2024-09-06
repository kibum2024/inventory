import React, { useState } from 'react';
import './Sample01.css';

const Sample01 = () => {
  const [date, setDate] = useState('2021-08-18');
  const [rows, setRows] = useState([
    { id: 1, code: '9876543', name: '기업은행 입출금통장', accountCode: '1089', accountName: '외상매출금', transactionCode: '', transactionName: '', amount: '', fee: '', note: '', additionalInfo: '입력' },
    { id: 2, code: '', name: '', accountCode: '', accountName: '', transactionCode: '', transactionName: '', amount: '', fee: '', note: '', additionalInfo: '입력' },
    { id: 3, code: '', name: '', accountCode: '', accountName: '', transactionCode: '', transactionName: '', amount: '', fee: '', note: '', additionalInfo: '입력' },
  ]);

  return (
    <div className="App">
      <h1>입금보고서</h1>
      <p>입금보고서에 임시저장된 내역이 있습니다. <a href="#">적용 삭제</a></p>
      <div className="form-group">
        <label>일자</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>첨언내용</label>
        <input type="text" placeholder="첨언내용" />
      </div>
      <table>
        <thead>
          <tr>
            <th>선택삭제</th>
            <th>찾기(F3)</th>
            <th>자금계획</th>
            <th>계좌입출금내역</th>
            <th>결제대행사내역</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td><button>선택</button></td>
              <td>{row.code}</td>
              <td>{row.name}</td>
              <td>{row.accountCode}</td>
              <td>{row.accountName}</td>
              <td>{row.transactionCode}</td>
              <td>{row.transactionName}</td>
              <td>{row.amount}</td>
              <td>{row.fee}</td>
              <td>{row.note}</td>
              <td><a href="#">{row.additionalInfo}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button>저장(F8)</button>
        <button>저장/전표(F7)</button>
        <button>다시 작성</button>
        <button>리스트</button>
        <button>웹자료올리기</button>
      </div>
    </div>
  );
}

export default Sample01;