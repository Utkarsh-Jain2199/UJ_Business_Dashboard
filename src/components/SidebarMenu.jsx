
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeftNavigationPanel = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Default');
  const [openDropdownMenus, setOpenDropdownMenus] = useState({ 'User Profile': false });
  const navigationRouter = useNavigate();

  const handleDropdownToggle = (menuItemName) => {
    setOpenDropdownMenus(prev => ({
      ...prev,
      [menuItemName]: !prev?.[menuItemName]
    }));
  };

  const selectMenuItem = (menuItemName, linkUrl) => {
    setActiveMenuItem(menuItemName);
    if (linkUrl) navigationRouter(linkUrl);
  };

  const dashboardMenuItems = [
    { name: 'Default', icon: '/images/img_chartpieslice.svg', href: '/', selectable: true },
    { name: 'eCommerce', icon: '/images/img_shoppingbagopen.svg', href: '/analytics', selectable: true },
    { name: 'Projects', icon: '/images/img_foldernotch.svg', href: '#', selectable: true },
    { name: 'Online Courses', icon: '/images/img_bookopen.svg', href: '#', selectable: true }
  ];

  const pagesMenuItems = [
    {
      name: 'User Profile', icon: '/images/img_identificationbadge.svg', href: '#', selectable: true, isDropdown: true,
      children: [
        { name: 'Overview', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Campaigns', href: '#' },
        { name: 'Documents', href: '#' },
        { name: 'Followers', href: '#' }
      ]
    },
    { name: 'Account', icon: '/images/img_identificationcard.svg', href: '#', selectable: true },
    { name: 'Corporate', icon: '/images/img_usersthree.svg', href: '#', selectable: true },
    { name: 'Blog', icon: '/images/img_notebook.svg', href: '#', selectable: true },
    { name: 'Social', icon: '/images/img_chatsteardrop.svg', href: '#', selectable: true }
  ];


  const renderMenuElement = (menuItem, isInsideDropdown = false) => {
    const isCurrentlySelected = activeMenuItem === menuItem?.name;
    const isCurrentlyExpanded = openDropdownMenus?.[menuItem?.name];

    if (menuItem?.isDropdown) {
      return (
        <div key={menuItem?.name}>
          <div className="flex items-center w-full cursor-pointer" onClick={() => {
            handleDropdownToggle(menuItem?.name);
            if (menuItem?.selectable) selectMenuItem(menuItem?.name);
          }}>
            <div className="p-[2px]">
              <img src={isCurrentlyExpanded ? '/images/img_arrow_down.svg' : '/images/img_arrowlineright.svg'} alt="arrow" className="w-[16px] h-[16px] themed-icon" />
            </div>
            <div className="flex items-center flex-1">
              <img src={menuItem?.icon} alt={menuItem?.name} className="w-[20px] h-[20px] themed-icon" />
              <span className="text-[14px] font-inter ml-[4px] text-global-1 truncate">{menuItem?.name}</span>
            </div>
          </div>
          {isCurrentlyExpanded && menuItem?.children && (
            <div className="flex flex-col gap-[4px] w-full mb-[12px]">
              {menuItem?.children?.map((childItem) => (
                <div key={childItem?.name} className="cursor-pointer" onClick={() => selectMenuItem(childItem?.name)}>
                  <div className="pl-[16px]">
                    <span className="text-[14px] font-inter text-global-1 ps-8 truncate">{childItem?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={menuItem?.name}
        className={`flex items-center w-full cursor-pointer ${isCurrentlySelected ? 'bg-global-1 rounded-[8px]' : ''}`}
        onClick={() => selectMenuItem(menuItem?.name, menuItem?.href)}
      >
        <div className="p-[2px]">
          <img src={isCurrentlySelected ? '/images/img_selected.svg' : '/images/img_arrowlineright.svg'} alt="icon" className="w-[16px] h-[16px] themed-icon" />
        </div>
        <div className="flex items-center flex-1">
          <img src={menuItem?.icon} alt={menuItem?.name} className="w-[20px] h-[20px] themed-icon" />
          <span className="text-[14px] font-inter ml-[4px] text-global-1 truncate">{menuItem?.name}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[24px] w-full sm:w-[35%] md:w-[25%] lg:w-[18%] min-w-[180px] border-r border-global-2 p-[20px] overflow-y-auto">
      <div className="flex items-center mb-[16px]">
        <img src="/images/img_byewind.png" alt="ByeWind" className="w-[24px] h-[24px] rounded-[12px]" />
        <span className="ml-[8px] text-[14px] font-inter text-global-1 truncate">ByeWind</span>
      </div>

      <div className="flex flex-col gap-[4px] mb-[16px]">
        <div className="flex">
          <span className="text-[14px] font-inter text-global-3">Favorites</span>
          <span className="ml-[8px] text-[14px] font-inter text-global-2">Recently</span>
        </div>
        <div className="flex flex-col gap-[4px] mb-[12px]">
          {["Overview", "Projects"].map(name => (
            <div key={name} className="flex items-center">
              <img src="/images/img_dot.svg" alt="dot" className="w-[16px] h-[16px] themed-icon" />
              <span className="ml-[4px] text-[14px] font-inter text-global-1 truncate">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[4px] mb-[12px]">
        <span className="px-[12px] text-[14px] font-inter text-global-3">Dashboards</span>
        <div className="flex flex-col gap-[4px]">
          {dashboardMenuItems.map(menuItem => renderMenuElement(menuItem))}
        </div>
      </div>

      <div className="flex flex-col gap-[4px] mb-auto">
        <span className="px-[12px] text-[14px] font-inter text-global-3">Pages</span>
        <div className="flex flex-col gap-[4px]">
          {pagesMenuItems.map(menuItem => renderMenuElement(menuItem))}
        </div>
      </div>
    </div>
  );
};


export default LeftNavigationPanel;