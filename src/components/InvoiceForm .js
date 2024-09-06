import React, { useState } from 'react';
import './InvoiceForm.css';

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    date: '2021-08-18',
    documentType: '세금계산서',
    taxType: '전자(세금)계산서-신규',
    transactionNumber: '202108181',
    supplier: '폴리',
    supplyAmount: 100000,
    taxAmount: 10000,
    details: '매출',
    salesAccount: '4049',
    salesAccountDescription: '제품매출',
    depositAccount: '1089',
    depositAccountDescription: '외상매출금',
    dueDate: '2021-09-30',
    fee: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="invoice-form">
      <div className="form-row">
        <label>전표일자</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>전표종류</label>
        <input type="text" name="documentType" value={formData.documentType} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>부가세유형</label>
        <input type="text" name="taxType" value={formData.taxType} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>거래처</label>
        <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>공급가액</label>
        <input type="number" name="supplyAmount" value={formData.supplyAmount} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>부가세</label>
        <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>적요</label>
        <input type="text" name="details" value={formData.details} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>매출계정</label>
        <input type="text" name="salesAccount" value={formData.salesAccount} onChange={handleChange} />
        <input type="text" name="salesAccountDescription" value={formData.salesAccountDescription} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>입금계좌</label>
        <input type="text" name="depositAccount" value={formData.depositAccount} onChange={handleChange} />
        <input type="text" name="depositAccountDescription" value={formData.depositAccountDescription} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>채권번호</label>
        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>수수료</label>
        <input type="number" name="fee" value={formData.fee} onChange={handleChange} />
      </div>
      <div className="form-buttons">
        <button type="submit">저장</button>
        <button type="button">저장/전표</button>
        <button type="button">다시 작성</button>
        <button type="button">리스트</button>
        <button type="button">웹자료올리기</button>
      </div>
    </form>
  );
};

export default InvoiceForm;