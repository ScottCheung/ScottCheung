/** @format */

import React from 'react';
import { FloatingDock } from '../ui/floating-dock';
import Database from '../data/Database.json';
import { useLanguage } from '../help/helpFunction';
const data = Database.PersonalInfo.Contacts;
function ContactDocker({ themeColor }) {
  const items = data.items.map(({ type, icon, blank, link }) => ({
    title: type[useLanguage()],
    icon,
    blank,
    href: link,
  }));
  return (
    <div className=' lg:flex hidden items-center justify-center h-[20rem] w-full'>
      <FloatingDock
        mobileClassName='' // only for demo, remove for production
        items={items}
        themeColor={themeColor}
      />
    </div>
  );
}

export default ContactDocker;
