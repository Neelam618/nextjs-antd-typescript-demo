import React, { FC } from 'react';
import { Card, Row, Col } from 'antd';
import stars from '../../../img/stars.png';
import './SubCardsContainer2.less';

export type SubCardsContainer2Type = {
  SubCardsContainer2Items: SubCardsContainer2ItemsType[];
  title: string;
  card1Txt: string;
  card1ImgSrc: string;
  card2Txt: string;
  card2ImgSrc: string;
  card3Txt: string;
  card3ImgSrc: string;
};

type SubCardsContainer2ItemsType = {
  imgSrc: string;
  imgHref: string;
  metaTitle: string;
  metaDes: string;
};

const { Meta } = Card;

export const SubCardsContainer2: FC<SubCardsContainer2Type> = ({
  SubCardsContainer2Items,
  title,
  card1Txt,
  card1ImgSrc,
  card2Txt,
  card2ImgSrc,
  card3Txt,
  card3ImgSrc,
}) => {
  return (
    <div className="subCardsContainer2">
      <Row gutter={[32, 32]} style={{ marginLeft: 0, marginRight: 0, justifyContent: 'center' }}>
      <Col xl={12} className="col1" style={{borderRadius: 10}}>
          <Row
            gutter={[24, 24]}
            style={{ borderRadius: 10, padding: '1rem', paddingTop: '1.5rem' }}
            className="imgGrid"
            justify="center"
          >
            {SubCardsContainer2Items.map(({ imgSrc, imgHref, metaTitle, metaDes }) => {
              return (
                <Col md={12}>
                  <Card
                    cover={
                      <a href={imgHref}>
                        <img
                          alt={metaTitle}
                          src={imgSrc}
                          title={metaTitle}
                          style={{position: 'relative', margin: '0 auto', width: '100%'}}
                        />
                      </a>
                    }
                    bodyStyle={{ background: 'white', padding: 9 }}
                  >
                    <Meta
                      title={metaTitle}
                      description={metaDes}
                      avatar={<img src={stars} alt="" style={{height: 14}}/>}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xl={12} className="col2 w-full" 
        // style={{width: '100%', position: 'relative'}}
        >
          <div className="xl:mr-32 content">
            <div style={{textAlign: 'right'}}>
              <h2 className="contentTitle text-4xl font-normal text-center xl:text-right leading-10 mb-8">
                {title}
              </h2>
            </div>
            <div className="cardsContainer flex justify-center lg:flex-nowrap flex-row items-center xl:-ml-16">
              <div className="cardBody w-410px mx-4 lg:ml-0 bg-white p-6 rounded-lg shadow-xl relative z-10 flex lg:flex-col mb-8 xl:mb-0"
              // style={{position: 'relative', zIndex: 10}}
              >
                <img className="h-12 self-start" style={{height: '3rem', alignSelf: 'flex-start'}} src={card1ImgSrc} alt="" />
                <div className="cardTxt self-start text-sm text-gray-700 ml-6 lg:ml-0 lg:mt-4">
                  {card1Txt}
                </div>
              </div>
              <div className="cardBody w-410px mx-4 bg-white p-6 rounded-lg shadow-xl flex lg:flex-col mb-8 xl:mb-0">
                <img className="h-12 self-start" style={{height: '3rem', alignSelf: 'flex-start'}} src={card2ImgSrc} alt="" />
                <div className="cardTxt self-start text-sm text-gray-700 ml-6 lg:ml-0 lg:mt-4">
                  {card2Txt}
                </div>
              </div>
              <div className="cardBody w-410px mx-4 lg:mr-0 bg-white p-6 rounded-lg shadow-xl flex lg:flex-col mb-8 xl:mb-0">
                <img className="h-12 self-start" style={{height: '3rem', alignSelf: 'flex-start'}} src={card3ImgSrc} alt="" />
                <div className="cardTxt self-start text-sm text-gray-700 ml-6 lg:ml-0 lg:mt-4">
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

export default SubCardsContainer2