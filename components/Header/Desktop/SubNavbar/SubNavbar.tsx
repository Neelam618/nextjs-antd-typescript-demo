import React, { FC } from 'react';
import { Menu } from 'antd';
import './SubNavbar.less';

const { SubMenu } = Menu;

type SubNavOptionsType = {
  optionTxt: string;
  href: string;
};

type DropdownItemsType = {
  dropdownTitle: string;
  SubNavOptions: SubNavOptionsType[];
};

export type SubNavbarTypes = {
  DropdownItems: DropdownItemsType[];
};

export const SubNavbar: FC<SubNavbarTypes> = ({ DropdownItems }) => {
  return (
    <div
    className="subNavbarWrapper"
    style={{display: 'flex', padding: '0.5rem 4rem', borderBottom: '1px solid #e1e8ed', backgroundColor: '#f5f5f5' }}
    id="subnav">
      <Menu mode="horizontal" style={{ marginLeft: -10 }}>
        {DropdownItems.map(({ dropdownTitle, SubNavOptions }) => {
          return (
            <SubMenu popupClassName="subNavPopup" title={dropdownTitle} className="submenu-title">
              {SubNavOptions.map(({ optionTxt, href }) => {
                return (
                  <Menu.Item>
                    <a href={href} style={{ display: 'block' }}>
                      {optionTxt}
                    </a>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};

export default SubNavbar;
