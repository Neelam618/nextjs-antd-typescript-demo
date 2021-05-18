import React, { FC, useState } from 'react';
import { Drawer, Button } from 'antd';

export type DrawerRightTypes = {
  imgSrcIconRight: string;
  RightMenuItems: RightMenuItemsType[];
};

type RightMenuItemsType = {
  menuTxt: string;
  href: string;
  iconImgSrc: string;
};

export const DrawerRight: FC<DrawerRightTypes> = ({ imgSrcIconRight, RightMenuItems }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        className="mr-3 bg-gray-700 border-0 hover:bg-blue-400"
      >
        <img src={imgSrcIconRight} alt="" className="block h-4" />
      </Button>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        mask
        drawerStyle={{ backgroundColor: '#2d3748' }}
        bodyStyle={{ padding: 0 }}
      >
        {RightMenuItems.map(({ menuTxt, href, iconImgSrc }) => {
          return (
            <a
              href={href}
              style={{
                display: 'block',
                padding: '1rem 0',
                paddingLeft: 15,
                borderBottom: '1px solid #cbd5e0',
                color: '#cbd5e0',
                backgroundColor: '#3d4654',
              }}
            >
              {menuTxt}
              <span style={{ float: 'right', paddingRight: 15 }}>
                <img src={iconImgSrc} alt="" style={{ height: '14px' }} />
              </span>
            </a>
          );
        })}
      </Drawer>
    </>
  );
};
