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
    <div style={{backgroundColor: '#f5f5f5' }}>
      <div
      className="subNavbarWrapper"
      style={{display: 'flex', paddingTop: 4, paddingBottom: 4, borderBottom: '1px solid #e1e8ed' }}
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
    </div>
  );
};

export default SubNavbar;
