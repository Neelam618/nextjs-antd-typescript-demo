import React, { FC } from 'react';
import { Card, Row, Col, Button } from 'antd';
import stars from '../../../img/stars.png';
import './SubCardsContainer1.less';

export type SubCardsContainer1Type = {
  SubCardsContainer1Items: SubCardsContainer1ItemsType[];
  btnTxt: string;
};

type SubCardsContainer1ItemsType = {
  imgSrc: string;
  imgHref: string;
  metaTitle: string;
  metaDes: string;
};

const { Meta } = Card;

export const SubCardsContainer1: FC<SubCardsContainer1Type> = ({ SubCardsContainer1Items, btnTxt }) => {
  return (
    <div id="subCardsContainer1">
      <Row gutter={[32, 32]} style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xl={12} className="col1">
          <div className="content">
            <h2 style={{fontSize: 32}}>
              Unique themes and templates for every budget and every project.
            </h2>
            <Button type="primary" size="large" className="DesktopBtn" style={{ boxShadow: '0 2px 0 hsl(87deg 58% 35%)', borderRadius: 5}}>
              {btnTxt}
            </Button>
          </div>
        </Col>
        <Col xl={12} className="col2" style={{borderRadius: 10}}>
          <Row
            gutter={[24, 24]}
            style={{ borderRadius: 10, padding: '1rem', paddingTop: '1.5rem' }}
            className="imgGrid"
            justify="center"
          >
            {SubCardsContainer1Items.map(({ imgSrc, imgHref, metaTitle, metaDes }) => {
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

        <Col xl={0} style={{margin: '0 auto', order: 3}} className="mobileBtn">
          <Button type="primary" size="large" style={{margin: '0 auto', marginTop: '0.5rem',  boxShadow: '0 2px 0 hsl(87deg 58% 35%)', borderRadius: 5}}>
            {btnTxt}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SubCardsContainer1