import React, { useState } from 'react';
import SearchInput from '../../components/SearchField';
import Button from '../../components/ActionButton';
import LeftNavigationPanel from '../../components/SidebarMenu';
import DataTable from '../../components/DataGrid';
import { useColorScheme } from '../../context/AppTheme';
import TopNavigationBar from '../../components/HeaderBar';
import TransactionCreationModal from '../../components/NewOrderDialog';
import { useSelector, useDispatch } from 'react-redux';
import { appendTransaction } from '../../store/ordersSlice';

const OrdersManagementView = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectedTransactionIds, setSelectedTransactionIds] = useState([]);
  const { darkModeEnabled, switchColorScheme } = useColorScheme();
  const [isNotificationPanelVisible, setIsNotificationPanelVisible] = useState(true);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const storeDispatcher = useDispatch();
  const transactionList = useSelector((state) => state.transactions.transactions);

  const handleTransactionRowSelection = (transactionId) => {
    setSelectedTransactionIds((prev) =>
      prev?.includes(transactionId) ? prev?.filter((id) => id !== transactionId) : [...prev, transactionId]
    );
  };

  const handleSelectAllTransactions = () => {
    setSelectedTransactionIds(
      selectedTransactionIds?.length === transactionList?.length ? [] : transactionList?.map((transaction) => transaction?.id)
    );
  };

  const handleTransactionCreation = (newTransaction) => {
    storeDispatcher(appendTransaction(newTransaction));
  };
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true);

  const toggleLeftPanel = () => setIsLeftPanelVisible((prev) => !prev);
  const toggleNotificationPanel = () => setIsNotificationPanelVisible((prev) => !prev);

  return (
    <div className="flex flex-row w-full min-h-screen bg-global-7">
      {isLeftPanelVisible && <LeftNavigationPanel/>}

      <div className={`flex flex-col gap-[28px] justify-start items-center ${isLeftPanelVisible ? 'flex-1' : 'w-full'}`}>
        <TopNavigationBar
          menuOpen={isMenuExpanded}
          setMenuOpen={setIsMenuExpanded}
          darkModeEnabled={darkModeEnabled}
          switchColorScheme={switchColorScheme}
          toggleLeftPanel={toggleLeftPanel}
          notificationVisible={isNotificationPanelVisible}
          toggleNotificationPanel={toggleNotificationPanel}
        />

        <div className="flex flex-col gap-[12px] justify-start items-center w-full mx-[28px]">
          <div className="flex flex-row justify-start items-center w-full px-[8px]">
            <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
              Order List
            </span>
          </div>

          <div className="flex flex-row justify-start items-center w-full bg-global-6 rounded-[8px] pt-[8px] pr-[8px] pb-[8px] pl-[8px]">
            <div className="flex flex-row gap-[4px] justify-center items-center flex-1">
              <div className="flex flex-col justify-start items-center w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px] cursor-pointer" onClick={() => setIsTransactionModalOpen(true)}>
                <img
                  src="/images/img_add.svg"
                  alt="add"
                  className="w-[20px] h-[20px] themed-icon"
                />
              </div>

              <div className="flex flex-col justify-start items-end w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px]">
                <img
                  src="/images/img_funnelsimple.svg"
                  alt="filter"
                  className="w-[20px] h-[20px] themed-icon"
                />
              </div>

              <div className="flex flex-col justify-start items-start flex-1 px-[8px] pt-[4px] pb-[4px]">
                <img
                  src="/images/img_arrowsdownup.svg"
                  alt="sort"
                  className="w-[20px] h-[20px] themed-icon"
                />
              </div>
            </div>

            <SearchInput
              placeholder="Search"
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e?.target?.value)}
              className="w-full sm:w-[14%] themed-icon"
            />
          </div>

          <DataTable
            transactionList={transactionList}
            selectedRowIds={selectedTransactionIds}
            handleSelectAllRows={handleSelectAllTransactions}
            handleRowSelection={handleTransactionRowSelection}
          />

          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-col justify-start items-end flex-1">
              <img
                src="/images/img_arrowlineleft.svg"
                alt="previous"
                className="w-[20px] h-[20px] themed-icon"
              />
            </div>

            <Button variant="primary" size="medium" className="ml-[8px]">
              1
            </Button>

           <Button variant="secondary" size="medium" className="ml-[8px]">
              2
            </Button>
            <Button variant="secondary" size="medium" className="ml-[8px]">
              3
            </Button>

            <Button variant="secondary" size="medium" className="ml-[8px]">
              4
            </Button>

            <Button variant="secondary" size="medium" className="ml-[8px]">
              5
            </Button>

            <div className="flex flex-col justify-start items-end w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px]">
              <img
                src="/images/img_arrowlineright.svg"
                alt="next"
                className="w-[20px] h-[20px] themed-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <TransactionCreationModal isOpen={isTransactionModalOpen} onModalClose={() => setIsTransactionModalOpen(false)} onFormSubmit={handleTransactionCreation} />
    </div>
  );
};

export default OrdersManagementView;
