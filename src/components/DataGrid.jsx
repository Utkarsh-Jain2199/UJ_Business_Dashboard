import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTransactions } from '../store/ordersSlice';

const DataTable = ({ transactionList, selectedRowIds, handleSelectAllRows, handleRowSelection }) => {
  const storeDispatcher = useDispatch();
  const [activeActionMenu, setActiveActionMenu] = useState(null);
  const removeTransaction = (transactionId) => {
    const filteredTransactions = transactionList.filter((transaction) => transaction.id !== transactionId);
    storeDispatcher(updateTransactions(filteredTransactions));
    setActiveActionMenu(null);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-[40px_100px_200px_200px_1fr_180px_100px_60px] gap-0 bg-global-6">
        <div className="contents">
          <div className="bg-global-7 p-3 border-b border-global-2">
            <input 
              type="checkbox" 
              checked={selectedRowIds?.length === transactionList?.length}
              onChange={handleSelectAllRows}
              className="w-4 h-4 themed-icon"
            />
          </div>
          {['Order ID', 'User', 'Project', 'Address', 'Date', 'Status', ''].map(header => (
            <div key={header} className="bg-global-7 p-3 border-b border-global-2">
              <span className="text-xs font-inter text-global-3">{header}</span>
            </div>
          ))}
        </div>

        {transactionList?.map((transaction) => (
          <div key={transaction.id} className="contents">
            <div className="p-3 border-b border-global-1">
              <input 
                type="checkbox" 
                checked={selectedRowIds?.includes(transaction.id)}
                onChange={() => handleRowSelection(transaction.id)}
                className="w-4 h-4 themed-icon"
              />
            </div>

            <div className="p-3 border-b border-global-1">
              <span className="text-xs font-inter text-global-1">{transaction.id}</span>
            </div>

            <div className="p-3 border-b border-global-1">
              <div className="flex items-center gap-2">
                <img src={transaction.user.avatar} alt="" className="w-6 h-6 rounded-full" />
                <span className="text-xs font-inter text-global-1">{transaction.user.name}</span>
              </div>
            </div>

            <div className="p-3 border-b border-global-1">
              <span className="text-xs font-inter text-global-1">{transaction.project}</span>
            </div>

            <div className="p-3 border-b border-global-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-inter text-global-1">{transaction.address}</span>
              </div>
            </div>

            <div className="p-3 border-b border-global-1">
              <div className="flex items-center gap-1">
                <img src="/images/img_calendarblank.svg" alt="" className="w-4 h-4 themed-icon" />
                <span className="text-xs font-inter text-global-1">{transaction.date}</span>
              </div>
            </div>

            <div className="p-3 border-b border-global-1">
              <div className="flex items-center gap-1">
                <img src={transaction.status.icon} alt="" className="w-4 h-4 themed-icon" />
                <span 
                  className="text-xs font-inter"
                  style={{ color: transaction.status.color }}
                >
                  {transaction.status.type}
                </span>
              </div>
            </div>

            <div className="relative p-3 border-b border-global-1">
              <img
                src="/images/img_dotsthreeoutlinevertical.svg"
                alt="actions"
                className="w-4 h-4 cursor-pointer themed-icon"
                onClick={() => setActiveActionMenu(activeActionMenu === transaction.id ? null : transaction.id)}
              />
              {activeActionMenu === transaction.id && (
                <div className="absolute right-0 top-6 z-50 bg-white border border-gray-200 rounded shadow-md min-w-[80px] p-0">
                  <button
                    className="w-full text-left px-2 py-1 text-xs text-red-600 hover:bg-gray-100"
                    onClick={() => removeTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
