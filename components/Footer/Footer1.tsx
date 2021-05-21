import React, { FC } from 'react';
import './Footer1.less'

type hrefWithimgSrcType = {
  href: string;
  imgSrc: string;
};

export type Footer1Types = {
  /** Add social icon links with img src url */
  HrefsWithImgSrcs: hrefWithimgSrcType[];

  /** Enter copyright text */
  copyRightTxt: string;
};

export const Footer1: FC<Footer1Types> = ({ copyRightTxt, HrefsWithImgSrcs }) => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div className="footerContainer">
      <div className="copyRightTxt">{copyRightTxt}</div>
        <div className="flex justify-center order-1 lg:order-2" style={{display: 'flex'}}>
          {HrefsWithImgSrcs.map(({ href, imgSrc }) => {
            return (
              <a href={href} className="socialLinks" target="_blank">
                <img src={imgSrc} className="h-3" style={{height: '0.75rem'}} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer1;
