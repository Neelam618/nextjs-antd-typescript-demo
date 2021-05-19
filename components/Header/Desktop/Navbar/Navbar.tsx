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
  const [current, setCurrent] = useState('key1');
  return (
    <div
    className="navbarWrapper"
      style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '0.1rem 6rem' }}
      id="navbar"
    >
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        style={{ marginLeft: -20, backgroundColor: 'black', color: 'white', border: 0, fontSize: '1rem', fontWeight: 600 }}
      >
        {NavMenuItems.map(({ menuTxt, href, key }) => {
          return (
            <Menu.Item key={key} className="border-0" onClick={() => setCurrent(key)}>
              <a
                href={href}
                style={{color: '#afafaf'}}
                className={`navLink ${
                  key === current ? 'selectedMenuItem' : ''
                }`}
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
