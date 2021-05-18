import React, { FC } from 'react';
import { Topbar } from './Desktop/Topbar/Topbar';
import { Navbar } from './Desktop/Navbar/Navbar';
// import { DrawerBar } from './Mobile/DrawerBar';
import { SubNavbar } from './Desktop/SubNavbar/SubNavbar';

export type HeaderType = {
  logo: string;
  menuIconTxt: string;
  dropdownTxt: string;
  Options: OptionsType[];
  TopMenuItems: TopMenuItemsType[];
  NavMenuItems: NavMenuItemsType[];
  // imgSrcIconLeft: string;
  // RightMenuItems: RightMenuItemsType[];
  // SelectOptions: SelectOptionsType[];
  // Panels: PanelsType[];
  // imgSrcIconRight: string;
  DropdownItems: DropdownItemsType[];
};

type OptionsType = {
  optionTxt: string;
  href: string;
  logoInOption: string;
};

type NavMenuItemsType = {
  menuTxt: string;
  href: string;
  key: string;
};

type TopMenuItemsType = {
  menuTxt: string;
  href: string;
};
// type RightMenuItemsType = {
//   menuTxt: string;
//   href: string;
//   iconImgSrc: string;
// };

// type SelectOptionsType = {
//   optionTxt: string;
//   href: string;
// };

// type PanelsType = {
//   panelHeader: string;
//   PanelChildren: PanelChildrenType[];
//   key: string;
// };

// type PanelChildrenType = {
//   panelLink: string;
//   href: string;
// };

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

export const Header: FC<HeaderType> = ({
  logo,
  menuIconTxt,
  dropdownTxt,
  Options,
  TopMenuItems,
  NavMenuItems,
  // imgSrcIconLeft,
  // RightMenuItems,
  // SelectOptions,
  // Panels,
  // imgSrcIconRight,
  DropdownItems,
}) => {
  return (
    <div>
      <Topbar
        logo={logo}
        menuIconTxt={menuIconTxt}
        dropdownTxt={dropdownTxt}
        Options={Options}
        TopMenuItems={TopMenuItems}
      />
      <Navbar NavMenuItems={NavMenuItems} />
      {/* <DrawerBar
        imgSrcIconLeft={imgSrcIconLeft}
        SelectOptions={SelectOptions}
        Panels={Panels}
        imgSrcIconRight={imgSrcIconRight}
        RightMenuItems={RightMenuItems}
        logo={logo}
      /> */}
      <div className="mt-2">
        <SubNavbar DropdownItems={DropdownItems} />
      </div>
    </div>
  );
};

export default Header
