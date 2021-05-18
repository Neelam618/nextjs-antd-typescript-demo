import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { SearchInput } from './SearchInput/SearchInput';
import './Hero.less'

export type HeroType = {
  headingTxt: string;
  paraTxt: string;
  imgSrc: string;
  imgAlt: string;
  btnTxt: string;
  placeholder: string;
};

export const Hero: FC<HeroType> = ({
  headingTxt,
  paraTxt,
  imgSrc,
  imgAlt,
  placeholder,
  btnTxt,
}) => {
  return (
    <div id="hero">
      <Row gutter={[48, 0]} justify="space-between" align="middle">
        <Col xl={12}>
          <h1
            className="heroHeading"
            style={{ lineHeight: '50px' }}
          >
            {headingTxt}
          </h1>
          <p className="heroPara">{paraTxt}</p>
          <div className="mt-8">
            <SearchInput placeholder={placeholder} btnTxt={btnTxt} />
          </div>
        </Col>
        <Col xl={12}>
          <img src={imgSrc} alt={imgAlt} />
        </Col>
      </Row>
    </div>
  );
};

export default Hero
