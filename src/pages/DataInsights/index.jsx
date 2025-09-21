import React, { useState } from 'react';
import LeftNavigationPanel from '../../components/SidebarMenu';
import { useNavigate } from 'react-router-dom';
import { useColorScheme } from '../../context/AppTheme';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import SalesAnalyticsChart from '../../components/RevenueChart';
import RightPanel from '../../components/InfoSidebar';
import TopNavigationBar from '../../components/HeaderBar';

const BusinessAnalyticsView = () => {
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true);
  const [isNotificationPanelVisible, setIsNotificationPanelVisible] = useState(true);
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(true);
  const navigationRouter = useNavigate();
  const { darkModeEnabled, switchColorScheme } = useColorScheme();

  const monthlyProjectionsData = [
    { name: 'Jan', actual: 15000000, projected: 18000000 },
    { name: 'Feb', actual: 19000000, projected: 20000000 },
    { name: 'Mar', actual: 17000000, projected: 19000000 },
    { name: 'Apr', actual: 18000000, projected: 21000000 },
    { name: 'May', actual: 15000000, projected: 17000000 },
    { name: 'Jun', actual: 19000000, projected: 22000000 },
  ];

  const processedProjectionData = monthlyProjectionsData.map((dataPoint) => ({
    ...dataPoint,
    projectedDiff: dataPoint.projected - dataPoint.actual,
  }));

 
  const monthlyRevenueData = [
    { name: 'Jan', current: 12000000, previous: 10000000 },
    { name: 'Feb', current: 10000000, previous: 18000000 },
    { name: 'Mar', current: 12000000, previous: 15000000 },
    { name: 'Apr', current: 18000000, previous: 13000000 },
    { name: 'May', current: 22000000, previous: 19000000 },
    { name: 'Jun', current: 20000000, previous: 27000000 },
  ];


  const salesAnalyticsData = [
    { name: 'Direct', value: 300.56, color: '#1c1c1c' },
    { name: 'Affiliate', value: 135.18, color: '#C6F6D5' },
    { name: 'Sponsored', value: 154.02, color: '#B794F4' },
    { name: 'E-mail', value: 48.96, color: '#90CDF4' },
  ];

  
  const bestSellingProducts = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
  ];

  
  const locationRevenueData = [
    { city: 'New York', value: '72K' },
    { city: 'San Francisco', value: '39K' },
    { city: 'Sydney', value: '25K' },
    { city: 'Singapore', value: '61K' },
  ];

  const notificationList = [
    { id: 1, message: 'You have a bug that needs to be fixed.', time: 'Just now', type: 'bug' },
    { id: 2, message: 'New user registered', time: '59 minutes ago', type: 'user' },
    { id: 3, message: 'You have a bug that needs to be fixed.', time: '12 hours ago', type: 'bug' },
    {
      id: 4,
      message: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      type: 'subscription',
    },
  ];

  const activityList = [
    {
      id: 1,
      user: 'You',
      message: 'You have a bug that needs to be fixed.',
      time: 'Just now',
      avatar: '/images/img_3d05.png',
    },
    {
      id: 2,
      user: 'User',
      message: 'Released a new version',
      time: '59 minutes ago',
      avatar: '/images/img_female05.png',
    },
    {
      id: 3,
      user: 'You',
      message: 'Submitted a bug',
      time: '12 hours ago',
      avatar: '/images/img_3d08.png',
    },
    {
      id: 4,
      user: 'User',
      message: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      avatar: '/images/img_male07.png',
    },
    {
      id: 5,
      user: 'User',
      message: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      avatar: '/images/img_male11.png',
    },
  ];

  const contactList = [
    { id: 1, name: 'Natali Craig', avatar: '/images/img_female15.png' },
    { id: 2, name: 'Drew Cano', avatar: '/images/img_male08.png' },
    { id: 3, name: 'Orlando Diggs', avatar: '/images/img_male06.png' },
    { id: 4, name: 'Andi Lane', avatar: '/images/img_female08.png' },
    { id: 5, name: 'Kate Morrison', avatar: '/images/img_female09.png' },
    { id: 6, name: 'Koray Okumus', avatar: '/images/img_3d03.png' },
  ];

  const toggleLeftPanel = () => setIsLeftPanelVisible((prev) => !prev);
  const toggleNotificationPanel = () => setIsNotificationPanelVisible((prev) => !prev);
  const toggleRightPanel = () => setIsRightPanelVisible((prev) => !prev);

  return (
    <div className="flex flex-row w-full min-h-screen bg-global-7">
      {isLeftPanelVisible && <LeftNavigationPanel/>}

      
      <div
        className={`flex flex-col gap-[28px] justify-start items-center
          ${isLeftPanelVisible && isRightPanelVisible ? 'flex-1' : ''}
          ${isLeftPanelVisible && !isRightPanelVisible ? 'w-full' : ''}
          ${!isLeftPanelVisible && isRightPanelVisible ? 'flex-1' : ''}
          ${!isLeftPanelVisible && !isRightPanelVisible ? 'w-full' : ''}
        `}
      >
        <TopNavigationBar
          darkModeEnabled={darkModeEnabled}
          switchColorScheme={switchColorScheme}
          toggleLeftPanel={toggleLeftPanel}
          toggleNotificationPanel={toggleNotificationPanel}
          toggleRightPanel={toggleRightPanel}
        />

        <div className="flex flex-col gap-[16px] justify-start items-center w-full mr-[28px] ml-[28px] p-4">
          <div className="flex flex-row justify-start items-center w-full pr-[8px] pl-[8px]">
            <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
              eCommerce
            </span>
          </div>

          <div className="flex flex-col gap-[28px] justify-start items-center w-full">
            <div className="flex flex-col lg:flex-row gap-[28px] justify-start items-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[28px] w-full">
                <div className="flex flex-col gap-[8px] justify-start items-center w-full bg-global-4 rounded-[16px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-8">
                      Customers
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="flex flex-row justify-center items-center w-full">
                      <span className="text-[24px] font-inter font-semibold leading-[30px] text-left text-global-8 items-start">
                        3,781
                      </span>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-row justify-center items-center flex-1">
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-8">
                          +11.01%
                        </span>
                      </div>
                      <img
                        src="/images/img_arrowrise.svg"
                        className="w-[16px] h-[16px]"
                        alt="arrow rise"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-[8px] justify-start items-center w-full bg-global-6 rounded-[16px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]"
                  onClick={() => navigationRouter('/orders')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
                      Orders
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="flex flex-row justify-start items-center w-full">
                      <span className="text-[24px] font-inter font-semibold leading-[30px] text-left text-global-1 self-end">
                        1,219
                      </span>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-row justify-center items-center flex-1">
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                          -0.03%
                        </span>
                      </div>
                      <img
                        src="/images/img_arrowfall.svg"
                        className="w-[16px] h-[16px] themed-icon"
                        alt="arrow fall"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[8px] justify-start items-center w-full bg-global-6 rounded-[16px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
                      Revenue
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="flex flex-row justify-center items-center w-full">
                      <span className="text-[24px] font-inter font-semibold leading-[30px] text-left text-global-1">
                        $695
                      </span>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-row justify-center items-center flex-1">
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                          +15.03%
                        </span>
                      </div>
                      <img
                        src="/images/img_arrowrise.svg"
                        className="w-[16px] h-[16px] themed-icon"
                        alt="arrow rise"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[8px] justify-start items-center w-full bg-global-5 rounded-[16px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-8">
                      Growth
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center w-auto">
                    <div className="flex flex-row justify-center items-center w-auto">
                      <span className="text-[24px] font-inter font-semibold leading-[30px] text-left text-global-8">
                        30.1%
                      </span>
                    </div>
                    <div className="flex flex-row justify-center items-center w-auto">
                      <div className="flex flex-row justify-center items-center w-auto">
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-8">
                          +6.08%
                        </span>
                      </div>
                      <img
                        src="/images/img_arrowrise.svg"
                        className="w-[16px] h-[16px]"
                        alt="arrow rise"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[16px] justify-start items-center w-full bg-global-6 rounded-[16px] pt-[22px] pr-[22px] pb-[22px] pl-[22px]">
                <div className="flex flex-row justify-start items-center w-full">
                  <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
                    Projections vs Actuals
                  </span>
                </div>

                <div className="w-full h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={processedProjectionData}
                      role="img"
                      aria-label="Bar chart showing projections vs actuals"
                      barGap={0}
                      barSize={24}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                      />
                      <XAxis dataKey="name" axisLine={true} tickLine={false} />
                      <YAxis
                        tickFormatter={(value) => `${value / 1000000}M`}
                        domain={[0, 30000000]}
                        ticks={[0, 10000000, 20000000, 30000000]}
                        axisLine={true}
                        tickLine={false}
                      />
                      <Tooltip formatter={(value) => [`$${(value / 1000000).toFixed(1)}M`]} />

                      <Bar
                        dataKey="actual"
                        stackId="a"
                        fill="#a8c5da"
                        radius={[0, 0, 0, 0]}
                        name="Actual"
                      />
                      <Bar
                        dataKey="projectedDiff"
                        stackId="a"
                        fill="#C8DBE8"
                        radius={[4, 4, 0, 0]}
                        name="Projected"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-[28px] justify-start items-center w-full">
              <div className="flex flex-col gap-[16px] justify-start items-center w-full lg:w-[78%] bg-global-6 rounded-[16px] pt-[22px] pr-[22px] pb-[22px] pl-[22px]">
                <div className="flex flex-row gap-[8px] justify-center items-center w-full">
                  <div className="flex flex-row justify-center items-center w-auto">
                    <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
                      Revenue
                    </span>
                  </div>
                  <div className="flex flex-col justify-start items-end w-auto">
                    <span className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-2">
                      |
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center w-auto">
                    <img
                      src="/images/img_dot.svg"
                      className="w-[16px] h-[16px] themed-icon"
                      alt="dot"
                    />
                    <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1 ml-[4px]">
                      <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                        Current Week{' '}
                      </span>
                      <span className="text-[12px] font-inter font-semibold leading-[18px] text-left text-global-1">
                        $58,211
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center flex-1 pr-[12px] pl-[12px]">
                    <img
                      src="/images/img_dot_blue_gray_200.svg"
                      className="w-[16px] h-[16px] themed-icon"
                      alt="dot"
                    />
                    <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1 ml-[4px]">
                      <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                        Previous Week{' '}
                      </span>
                      <span className="text-[12px] font-inter font-semibold leading-[18px] text-left text-global-1">
                        $68,768
                      </span>
                    </span>
                  </div>
                </div>
                <div className="w-full h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyRevenueData}
                      role="img"
                      aria-label="Line chart showing revenue trends"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis
                        tickFormatter={(value) => `${value / 1000000}M`}
                        domain={[0, 30000000]}
                        ticks={[0, 10000000, 20000000, 30000000]}
                      />
                      <Tooltip formatter={(value) => [`$${(value / 1000000).toFixed(1)}M`]} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="current"
                        stroke={darkModeEnabled ? '#ffffff' : '#1c1c1c'}
                        strokeWidth={2}
                        name="Current Week"
                      />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke={darkModeEnabled ? '#8a8cd9' : '#a8c5da'}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Previous Week"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex flex-col gap-[16px] justify-start items-center w-full lg:w-[22%] bg-global-6 rounded-[16px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
                <div className="flex flex-row justify-center items-center w-auto">
                  <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
                    Revenue by Location
                  </span>
                </div>
                <img src="/images/img_world_map.svg" className="w-full h-[82px]" alt="world map" />
                <div className="flex flex-col gap-[16px] w-full">
                  {locationRevenueData?.map((locationItem, index) => (
                    <div key={index} className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                          <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                            {locationItem.city}
                          </span>
                          <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                            {locationItem.value}
                          </span>
                        </div>
                        <div className="w-full h-[2px] bg-global-3 rounded-[1px]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-[28px] justify-start items-center w-full">
              <div className="flex flex-col gap-[4px] justify-start items-center w-full lg:w-[78%] bg-global-6 rounded-[16px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
                <div className="flex flex-row justify-start items-center w-full">
                  <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
                    Top Selling Products
                  </span>
                </div>
                <div className="flex flex-row w-full overflow-x-auto">
                  <div className="flex flex-col justify-start items-center w-[224px] mb-[24px]">
                    <div className="flex flex-row justify-start items-center w-full border-b border-global-2 pt-[10px] pb-[10px]">
                      <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-3">
                        Name
                      </span>
                    </div>
                    {bestSellingProducts?.map((productItem, index) => (
                      <div
                        key={index}
                        className="flex flex-row justify-start items-center w-full pt-[10px] pb-[10px]"
                      >
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                          {productItem?.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-start items-center w-[130px] mb-[24px]">
                    <div className="flex flex-row justify-start items-center w-full border-b border-global-2 pt-[10px] pr-[12px] pb-[10px] pl-[12px]">
                      <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-3">
                        Price
                      </span>
                    </div>
                    {bestSellingProducts?.map((productItem, index) => (
                      <div
                        key={index}
                        className="flex flex-row justify-start items-center w-full pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
                      >
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                          {productItem?.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-start items-center w-[130px] mb-[24px]">
                    <div className="flex flex-row justify-start items-center w-full border-b border-global-2 pt-[10px] pr-[12px] pb-[10px] pl-[12px]">
                      <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-3">
                        Quantity
                      </span>
                    </div>
                    {bestSellingProducts?.map((productItem, index) => (
                      <div
                        key={index}
                        className="flex flex-row justify-start items-center w-full pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
                      >
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                          {productItem?.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-start items-center w-[130px] mb-[24px]">
                    <div className="flex flex-row justify-start items-center w-full border-b border-global-2 pt-[10px] pr-[12px] pb-[10px] pl-[12px]">
                      <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-3">
                        Amount
                      </span>
                    </div>
                    {bestSellingProducts?.map((productItem, index) => (
                      <div
                        key={index}
                        className="flex flex-row justify-start items-center w-full pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
                      >
                        <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-1">
                          {productItem?.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <SalesAnalyticsChart chartData={salesAnalyticsData} />
            </div>
          </div>
        </div>
      </div>

      {isRightPanelVisible && <RightPanel
        isNotificationVisible={isNotificationPanelVisible}
        notificationList={notificationList}
        activityList={activityList}
        contactList={contactList}
      />}
    </div>
  );
};

export default BusinessAnalyticsView;
