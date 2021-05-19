import React, { FC } from 'react';
import { Card, Row, Col, Button } from 'antd';
import stars from '../../../../public/img/stars.png';
import './SubCardsContainer1.css';

export type MySubCard1Type = {
  MySubCard1Items: MySubCard1ItemsType[];
  btnTxt: string;
};

type MySubCard1ItemsType = {
  imgSrc: string;
  imgHref: string;
  metaTitle: string;
  metaDes: string;
};

const { Meta } = Card;

export const MySubCard1: FC<MySubCard1Type> = ({ MySubCard1Items, btnTxt }) => {
  return (
    <div className="bg-gray-200 py-10 lg:py-32">
      <Row gutter={[32, 32]} style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xl={12} className="xl:order-1">
          <div className="xl:ml-16 xl:mr-32 text-center xl:text-left">
            <h2 className="text-4xl font-normal leading-10">
              Unique themes and templates for every budget and every project.
            </h2>
            <Button type="primary" size="large" className="mt-10 rounded-md hidden xl:block">
              {btnTxt}
            </Button>
          </div>
        </Col>
        <Col xl={12} className="bg-gray-200 xl:bg-white rounded-lg xl:order-0">
          <Row
            gutter={[24, 24]}
            style={{ borderRadius: 10 }}
            className="pl-0 xl:pl-24 py-6 pr-3"
            justify="center"
          >
            {MySubCard1Items.map(({ imgSrc, imgHref, metaTitle, metaDes }) => {
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

        <Col xl={0} className="mx-auto order-3">
          <Button type="primary" size="large" className="mt-2 mx-auto block rounded-md xl:hidden">
            {btnTxt}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
