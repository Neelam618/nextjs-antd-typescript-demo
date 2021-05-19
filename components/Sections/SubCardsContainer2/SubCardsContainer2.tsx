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
        <Col xl={12} className="col2" 
        >
          <div className="content">
            <div style={{textAlign: 'right'}}>
              <h2 className="contentTitle">
                {title}
              </h2>
            </div>
            <div className="cardsContainer">
              <div className="cardBody"
              >
                <img style={{height: '3rem', alignSelf: 'flex-start'}} src={card1ImgSrc} alt="" />
                <div className="cardTxt">
                  {card1Txt}
                </div>
              </div>
              <div className="cardBody">
                <img style={{height: '3rem', alignSelf: 'flex-start'}} src={card2ImgSrc} alt="" />
                <div className="cardTxt">
                  {card2Txt}
                </div>
              </div>
              <div className="cardBody">
                <img style={{height: '3rem', alignSelf: 'flex-start'}} src={card3ImgSrc} alt="" />
                <div className="cardTxt">
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