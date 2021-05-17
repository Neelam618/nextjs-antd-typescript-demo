import React, { FC } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, createFromIconfontCN } from '@ant-design/icons';
import './Topbar.less';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ],
});

const { SubMenu } = Menu;

type OptionsType = {
  optionTxt: string;
  href: string;
  logoInOption: string;
};

type TopMenuItemsType = {
  menuTxt: string;
  href: string;
};

export type TopbarTypes = {
  logo: string;
  menuIconTxt?: string;
  Options: OptionsType[];
  TopMenuItems: TopMenuItemsType[];
  dropDownTxt?: string;
};

export const Topbar: FC<TopbarTypes> = ({
  logo,
  menuIconTxt,
  dropDownTxt,
  Options,
  TopMenuItems,
}) => {
  return (
    <div
      style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '0.5rem 4rem'}}
      id="topbar"
    >
      <div>
        <img src={logo} alt="" style={{width: 150}} />
      </div>
      <Menu
        mode="horizontal"
        style={{ marginRight: -20, backgroundColor: 'black', color: 'gray', border: 0 }}
      >
        {TopMenuItems.map(({ menuTxt, href }) => {
          return (
            <Menu.Item style={{border: 0}}>
              <a href={href} style={{color: 'gray'}}>
                {menuTxt}
              </a>
            </Menu.Item>
          );
        })}

        <SubMenu
          icon={<AppstoreOutlined />}
          title={dropDownTxt}
          style={{border: 0}}
          popupClassName="topbarPopup"
        >
          {Options.map(({ optionTxt, href, logoInOption }) => {
            return (
              <Menu.Item style={{ height: 'auto', width: '300px' }}>
                <div style={{ margin: 10 }}>
                  <img src={logoInOption} alt="" style={{ height: 18, display: 'block' }} />
                  <a href={href} className="option-link" style={{ display: 'block' }}>
                    {optionTxt}
                  </a>
                </div>
              </Menu.Item>
            );
          })}
        </SubMenu>

        <Menu.Item style={{border: 0, backgroundColor: 'black', padding: '0 1em', borderRadius: 10}}>
          <IconFont type="icon-shoppingcart" />
          {menuIconTxt}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Topbar;
