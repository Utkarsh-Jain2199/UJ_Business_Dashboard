import React from 'react';

const ContactList = ({ contactList }) => (
  <div className="flex flex-col gap-[8px] justify-start items-center w-full mb-[284px]">
    <div className="flex flex-row justify-start items-center w-full pt-[8px] pb-[8px]">
      <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
        Contacts
      </span>
    </div>
    <div className="flex flex-col gap-[8px] w-full">
      {contactList?.map((contactItem) => (
       
        <div key={contactItem?.id} className="flex flex-row justify-start items-center w-full">
          <div className="flex flex-row justify-start items-center w-full">
            <img
              src={contactItem?.avatar}
              className="w-[24px] h-[24px] rounded-[12px]"
              alt="avatar"
            />
            <div className="flex flex-row justify-start items-center flex-1 pr-[8px] pl-[8px]">
              <span className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-1">
                {contactItem?.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContactList;
