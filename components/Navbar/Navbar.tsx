import React, { FC, useState } from 'react';
import { Menu } from 'antd';
import './Navbar.less'

type NavMenuItemsType = {
  menuTxt: string;
  href: string;
  key: string;
};

export type NavbarTypes = {
  NavMenuItems: NavMenuItemsType[];
};

export const Navbar: FC<NavbarTypes> = ({ NavMenuItems }) => {
  const [current, setCurrent] = useState('0');
  return (
    <div
      style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '0.5rem 4rem' }}
      id="navbar"
    >
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        style={{ marginLeft: -20, backgroundColor: 'black', color: 'white', border: 0 }}
      >
        {NavMenuItems.map(({ menuTxt, href, key }) => {
          return (
            <Menu.Item key={key} className="border-0" onClick={() => setCurrent(key)}>
              <a
                href={href}
                style={{color: 'gray'}}
                className={`
                  key === current ? 'selectedMenuItem' : ''
                `}
              >
                {menuTxt}
              </a>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default Navbar;