import React, { FC } from 'react';
import { DrawerRight } from './DrawerRight';
import { DrawerLeft } from './DrawerLeft/DrawerLeft';

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
    <div className="flex xl:hidden justify-between items-center bg-gray-800 py-2">
      <DrawerLeft imgSrcIconLeft={imgSrcIconLeft} SelectOptions={SelectOptions} Panels={Panels} />
      <img src={logo} alt="" className="h-5" />
      <DrawerRight imgSrcIconRight={imgSrcIconRight} RightMenuItems={RightMenuItems} />
    </div>
  );
};

export default DrawerBar;
