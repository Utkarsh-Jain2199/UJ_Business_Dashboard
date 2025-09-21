import React from 'react';

const ActivityFeed = ({ activityList }) => (
  <div className="flex flex-col gap-[6px] justify-start items-center w-full">
    <div className="flex flex-row justify-start items-center w-full pt-[8px] pb-[8px]">
      <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
        Activities
      </span>
    </div>
    <div className="flex flex-col gap-[8px] w-full mr-[8px] relative">
      <div className="flex flex-col gap-[8px] w-full">
        {activityList?.map((activityItem) => (
          <div
            key={activityItem?.id}
            className="flex flex-row gap-[8px] justify-start items-start w-full"
          >
            <img
              src={activityItem?.avatar}
              className="w-[24px] h-[24px] rounded-[12px]"
              alt="avatar"
            />
            <div className="flex flex-col justify-center items-start self-center w-full">
              <span className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-1 w-full">
                {activityItem?.message}
              </span>
              <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-3">
                {activityItem?.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-[16px] top-[40px] flex flex-col gap-[40px] justify-start items-center w-[1px]">
        <div className="w-full h-[14px] bg-global-2"></div>
        <div className="w-full h-[14px] bg-global-2"></div>
        <div className="w-full h-[14px] bg-global-2"></div>
        <div className="w-full h-[14px] bg-global-2"></div>
      </div>
    </div>
  </div>
);


export default ActivityFeed;
