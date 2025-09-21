
import React from 'react';

const TopNavigationBar = ({
  darkModeEnabled,
  switchColorScheme,
  toggleLeftPanel,
  toggleNotificationPanel,
  toggleRightPanel,
}) => (
  <div
    className="flex flex-row justify-between items-stretch w-full border-b border-global-2 px-4 py-5 min-h-[64px]"
  >
    <div className="flex items-center gap-4">
      <div className="hidden lg:block cursor-pointer" onClick={toggleLeftPanel}>
        <img
          src="/images/img_sidebar.svg"
          className="w-5 h-5 themed-icon"
          alt="sidebar"
        />
      </div>
      <div>
        <img
          src="/images/img_star.svg"
          className="w-5 h-5 themed-icon"
          alt="star"
        />
      </div>
      <div className="flex items-center flex-wrap gap-1 text-sm text-global-3">
        <span>Dashboards</span>
        <span className="text-global-2">/</span>
        <span className="text-global-1 dark:text-white font-medium">Default</span>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="relative w-[180px] sm:w-[220px] md:w-[250px]">
        <img
          src="/images/img_search.svg"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 themed-icon"
          alt="search"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-global-1 rounded-md py-1.5 pl-9 pr-10 text-sm text-global-2 outline-none"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-global-2 select-none pointer-events-none">
          ⌘/
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div onClick={switchColorScheme} className="cursor-pointer">
          <img
            src={darkModeEnabled ? '/images/img_sun.svg' : '/images/img_sun.svg'}
            className="w-5 h-5 themed-icon"
            alt="theme"
          />
        </div>
        <div onClick={() => window.location.reload()} className="cursor-pointer">
          <img
            src="/images/img_clockcounterclockwise.svg"
            className="w-5 h-5 themed-icon"
            alt="reload"
          />
        </div>
        <div onClick={toggleNotificationPanel} className="cursor-pointer">
          <img
            src="/images/img_bell.svg"
            className="w-5 h-5 themed-icon"
            alt="notification"
          />
        </div>
        <div className="hidden lg:block cursor-pointer" onClick={toggleRightPanel}>
          <img
            src="/images/img_sidebar.svg"
            className="w-5 h-5 themed-icon"
            alt="right sidebar"
          />
        </div>
      </div>
    </div>
  </div>
);

export default TopNavigationBar;
