import React, { FC } from 'react';
import { DrawerRight } from '../DrawerRight';
import { DrawerLeft } from '../DrawerLeft/DrawerLeft';
import './DrawerBar.less'

export type DrawerBarTypes = {
  imgSrcIconRight: string;
  imgSrcIconLeft: string;
  RightMenuItems: RightMenuItemsType[];
  SelectOptions: SelectOptionsType[];
  Panels: PanelsType[];
  logo: string;
};

type RightMenuItemsType = {
  menuTxt: string;
  href: string;
  iconImgSrc: string;
};

type SelectOptionsType = {
  optionTxt: string;
  href: string;
};

type PanelsType = {
  panelHeader: string;
  PanelChildren: PanelChildrenType[];
  key: string;
};

type PanelChildrenType = {
  panelLink: string;
  href: string;
};

export const DrawerBar: FC<DrawerBarTypes> = ({
  imgSrcIconLeft,
  SelectOptions,
  Panels,
  imgSrcIconRight,
  RightMenuItems,
  logo,
}) => {
  return (
    <div
    className="drawerBarWrapper"
    style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '0.5rem 1rem'}}  
    >

      <DrawerLeft imgSrcIconLeft={imgSrcIconLeft} SelectOptions={SelectOptions} Panels={Panels} />
      <img src={logo} alt="" style={{height: '1.2rem'}} />
      <DrawerRight imgSrcIconRight={imgSrcIconRight} RightMenuItems={RightMenuItems} />
    </div>
  );
};

export default DrawerBar;
