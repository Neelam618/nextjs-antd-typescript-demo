import React, { FC } from 'react';
import { Card, Row, Col, Button } from 'antd';
import './MainCardsContainer.less';

export type MainCardsContainerType = {
  MainCardsContainerItems: MainCardsContainerItemsType[];
  btnTxt: string;
};

type MainCardsContainerItemsType = {
  titleTxt: string;
  titleHref: string;
  paraTxt: string;
  link1Href: string;
  link1Txt: string;
  link2Href: string;
  link2Txt: string;
  iconImgSrc: string;
  cardImgSrc: string;
  cardImgAlt: string;
};

export const MainCardsContainer: FC<MainCardsContainerType> = ({ MainCardsContainerItems, btnTxt }) => {
  return (
    <div 
    // className="bg-gray-200 px-5 md:px-20 xl:px-30 py-10 lg:py-32"
    style={{}}
    >
      <Row gutter={[32, 32]}>
        {MainCardsContainerItems.map(
          ({
            titleHref,
            titleTxt,
            paraTxt,
            link1Href,
            link1Txt,
            link2Href,
            link2Txt,
            iconImgSrc,
            cardImgSrc,
            cardImgAlt,
          }) => {
            return (
              <Col md={12} xxl={8}>
                <Card
                  hoverable
                  // className="bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl border-0 cursor-default hover:bg-white rounded-xl h-410px"
                  style={{backgroundColor: 'white', overflow: 'hidden', border: 0, cursor: 'default', borderRadius: 10, height: 480, padding: 36, fontSize: 16}}
                >
                  <div>
                    <a href={titleHref}>
                      <h1 style={{fontSize: '32px', textAlign: 'center'}}>
                        {titleTxt}
                      </h1>
                    </a>
                    <p style={{textAlign: 'center', marginBottom: 8}}>{paraTxt}</p>
                    <div className="text-center text-lg" style={{textAlign: 'center'}}>
                      <a href={link1Href} style={{marginRight: 18, color: 'skyblue'}}>
                        {link1Txt}
                      </a>
                      <a href={link2Href} style={{marginRight: 18, color: 'skyblue'}}>
                        {link2Txt}
                      </a>
                    </div>
                  </div>

                  <a href={titleHref} className="imgWrapper">
                    <div
                      style={{ boxShadow: '0 0 0 4px white', transform: 'translateY(50%)', width:64, height: 64, top: 0, borderRadius: '50%', margin: '0 auto'}}
                    >
                      <img src={iconImgSrc} alt="" className="rounded-full w-16 h-16" style={{borderRadius: '50%', width: 64, height: 64}} />
                    </div>
                    <img
                      src={cardImgSrc}
                      alt={cardImgAlt}
                      // className="border-4 border-white border-solid shadow-2xl rounded-xl"
                      style={{border: '4px solid white', display: 'block', margin: '0 auto', width: '100%'}}
                    />
                  </a>
                </Card>
              </Col>
            );
          },
        )}
      </Row>
      <Button type="primary" size="large" 
      // className="mt-16 mx-auto block rounded-md"
      style={{marginTop: '4rem', marginRight: 'auto', marginLeft: 'auto', display: 'block' }}
      >
        {btnTxt}
      </Button>
    </div>
  );
};
export default MainCardsContainer
