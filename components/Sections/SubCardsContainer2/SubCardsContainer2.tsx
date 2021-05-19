import React, { FC } from 'react';
import { Card, Row, Col } from 'antd';
import stars from '../../../../public/img/stars.png';
import './SubCardsContainer2.css';

export type MySubCard2Type = {
  MySubCard2Items: MySubCard2ItemsType[];
  title: string;
  card1Txt: string;
  card1ImgSrc: string;
  card2Txt: string;
  card2ImgSrc: string;
  card3Txt: string;
  card3ImgSrc: string;
};

type MySubCard2ItemsType = {
  imgSrc: string;
  imgHref: string;
  metaTitle: string;
  metaDes: string;
};

const { Meta } = Card;

export const MySubCard2: FC<MySubCard2Type> = ({
  MySubCard2Items,
  title,
  card1Txt,
  card1ImgSrc,
  card2Txt,
  card2ImgSrc,
  card3Txt,
  card3ImgSrc,
}) => {
  return (
    <div className="bg-gray-200 py-10 lg:py-32">
      <Row gutter={[32, 32]} style={{ marginLeft: 0, marginRight: 0, justifyContent: 'center' }}>
        <Col xl={12} className="bg-gray-200 xl:bg-white rounded-lg hidden xl:block">
          <Row
            gutter={[24, 24]}
            style={{ borderRadius: 10 }}
            className="pl-0 xl:pl-24 py-6 pr-3"
            justify="center"
          >
            {MySubCard2Items.map(({ imgSrc, imgHref, metaTitle, metaDes }) => {
              return (
                <Col md={12}>
                  <Card
                    cover={
                      <a href={imgHref}>
                        <img
                          alt={metaTitle}
                          src={imgSrc}
                          title={metaTitle}
                          className="relative mx-auto"
                        />
                      </a>
                    }
                    bodyStyle={{ background: 'white', padding: 9 }}
                  >
                    <Meta
                      title={metaTitle}
                      description={metaDes}
                      avatar={<img src={stars} alt="" className="w-40" />}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xl={12} className="w-full">
          <div className="xl:mr-32">
            <h2 className="text-4xl font-normal text-center xl:text-right leading-10 mb-8">
              {title}
            </h2>
            <div className="cards flex justify-center lg:flex-nowrap flex-row items-center xl:-ml-16">
              <div className="w-410px mx-4 lg:ml-0 bg-white p-6 rounded-lg shadow-xl relative z-10 flex lg:flex-col mb-8 xl:mb-0">
                <img className="h-12 self-start" src={card1ImgSrc} alt="" />
                <div className="self-start text-sm text-gray-700 ml-6 lg:ml-0 lg:mt-4">
                  {card1Txt}
                </div>
              </div>
              <div className="w-410px mx-4 bg-white p-6 rounded-lg shadow-xl flex lg:flex-col mb-8 xl:mb-0">
                <img className="h-12 self-start" src={card2ImgSrc} alt="" />
                <div className="self-start text-sm text-gray-700 ml-6 lg:ml-0 lg:mt-4">
                  {card2Txt}
                </div>
              </div>
              <div className="w-410px mx-4 lg:mr-0 bg-white p-6 rounded-lg shadow-xl flex lg:flex-col mb-8 xl:mb-0">
                <img className="h-12 self-start" src={card3ImgSrc} alt="" />
                <div className="self-start text-sm text-gray-700 ml-6 lg:ml-0 lg:mt-4">
                  {card3Txt}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
