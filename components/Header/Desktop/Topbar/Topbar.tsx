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
  dropdownTxt?: string;
};

export const Topbar: FC<TopbarTypes> = ({
  logo,
  menuIconTxt,
  dropdownTxt,
  Options,
  TopMenuItems,
}) => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div
      className="topbarWrapper"
        style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 60}}
        id="topbar"
      >
        <div>
          <img src={logo} alt="" style={{width: 170}} />
        </div>
        <Menu
          mode="horizontal"
          style={{ marginRight: -20, backgroundColor: 'black', color: '#afafaf', border: 0, fontSize: '1rem', fontWeight: 600 }}
        >
          {TopMenuItems.map(({ menuTxt, href }) => {
            return (
              <Menu.Item style={{border: 0}}>
                <a className="navLink" href={href} 
                >
                  {menuTxt}
                </a>
              </Menu.Item>
            );
          })}

          <SubMenu
            icon={<AppstoreOutlined />}
            title={dropdownTxt}
            style={{border: 0}}
            popupClassName="topbarPopup"
          >
            {Options.map(({ optionTxt, href, logoInOption }) => {
              return (
                <Menu.Item style={{ height: 'auto', width: '300px' }}>
                  <div style={{ margin: 10 }}>
                    <img src={logoInOption} alt="" style={{ height: 18, display: 'block' }} />
                    <a href={href} className="option-link" style={{ display: 'block', fontSize: '1rem' }}>
                      {optionTxt}
                    </a>
                  </div>
                </Menu.Item>
              );
            })}
            <hr />
            <div style={{padding: 20, height: 'auto', fontSize: '1rem'}}>
              <p style={{paddingBottom: 7, color: 'black'}}>Join the <a href="#">Envato community</a></p>
              <p style={{color: 'black'}}>Learn from others in <a href="#">the forums</a></p>
            </div>
          </SubMenu>

          <Menu.Item style={{border: 0, backgroundColor: '#252628', padding: '0 1em', borderRadius: 5}}>
            <IconFont type="icon-shoppingcart" />
            {menuIconTxt}
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Topbar;
