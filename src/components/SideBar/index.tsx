import React from 'react';
import NewFeed from './NewFeed';
import Followings from './Followings';
import ChatAndSettings from './ChatAndSettings';

function Sidebar() {
  return (
    <div className="fixed top-0 h-screen left-0 sm:px-5 flex flex-col gap-10 py-10 overflow-y-auto">
      <h1 className="text-white uppercase text-2xl font-bold text-center">
        Wave
      </h1>
      <NewFeed />
      <Followings />
      <ChatAndSettings />
    </div>
  );
}

export default Sidebar;
