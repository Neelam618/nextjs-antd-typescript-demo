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
    <div>
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
              <Col md={12} xl={8} style={{width: '100%'}}>
                <Card
                  hoverable
                  // className="bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl border-0 cursor-default hover:bg-white rounded-xl h-410px"
                  style={{backgroundColor: 'white', overflow: 'hidden', border: 0, cursor: 'default', borderRadius: 10, height: 480, padding: 36, fontSize: 16}}
                >
                  <div>
                    <a href={titleHref}>
                      <h1 style={{fontSize: '32px', textAlign: 'center', fontWeight: 'bold'}}>
                        {titleTxt}
                      </h1>
                    </a>
                    <p style={{textAlign: 'center', marginBottom: 8, color: '#333333'}}>{paraTxt}</p>
                    <div className="text-center text-lg" style={{textAlign: 'center'}}>
                      <a href={link1Href} style={{marginRight: 18, color: '#0982ae'}}>
                        {link1Txt}
                      </a>
                      <a href={link2Href} style={{marginRight: 18, color: '#0982ae'}}>
                        {link2Txt}
                      </a>
                    </div>
                  </div>

                  <a href={titleHref} className="imgWrapper">
                    <div
                      style={{ transform: 'translateY(50%)', width:64, height: 64, top: 0, borderRadius: '50%', margin: '0 auto', boxShadow: '0 0 0 4px hsl(0deg 0% 100%)'}}
                    >
                      <img src={iconImgSrc} alt="" className="rounded-full w-16 h-16" style={{borderRadius: '50%', width: 64, height: 64, boxShadow: 'white 0px 0px 0px 4px'}} />
                    </div>
                    <img
                      src={cardImgSrc}
                      alt={cardImgAlt}
                      // className="border-4 border-white border-solid shadow-2xl rounded-xl"
                      style={{border: '4px solid white', display: 'block', margin: '0 auto', width: '100%', borderRadius: 8, boxShadow: '0 20.83px 22.92px rgb(0 0 0 / 34%)'}}
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
      style={{marginTop: '4rem', marginRight: 'auto', marginLeft: 'auto', display: 'block', boxShadow: '0 2px 0 hsl(87deg 58% 35%)', borderRadius: 5 }}
      >
        {btnTxt}
      </Button>
    </div>
  );
};
export default MainCardsContainer
