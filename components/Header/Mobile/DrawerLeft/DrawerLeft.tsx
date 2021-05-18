import React, { FC, useState } from 'react';
import { Drawer, Button, Select, Input, Space, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './DrawerLeft.less';

const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

export type DrawerLeftTypes = {
  imgSrcIconLeft: string;
  SelectOptions: SelectOptionsType[];
  Panels: PanelsType[];
};

type SelectOptionsType = {
  optionTxt: string;
  href: string;
};

type PanelsType = {
  panelHeader: string;
  PanelChildren: PanelChildrenType[];
  key: string;
};

type PanelChildrenType = {
  panelLink: string;
  href: string;
};

export const DrawerLeft: FC<DrawerLeftTypes> = ({ imgSrcIconLeft, SelectOptions, Panels }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const title = (
    <>
      <div style={{ margin: '1rem 3rem' }}>
        <img
          src="https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg"
          alt=""
          style={{ height: 15 }}
        />
      </div>
      <Select
        defaultValue={"Web Themes & Template"}
        dropdownStyle={{ padding: 0 }}
        listHeight={400}
        style={{ width: '100%' }}
        size="large"
      >
        {SelectOptions.map(({ optionTxt, href }) => {
          return (
            <Option
              value={optionTxt}
              style={{
                backgroundColor: '#2c2e33',
                color: 'white',
                padding: '1rem',
                margin: 0,
                fontSize: '1rem',
              }}
            >
              <a href={href} style={{ color: 'white' }}>
                {optionTxt}
              </a>
            </Option>
          );
        })}
      </Select>
      <Space direction="vertical" style={{ padding: '20px 0', margin: '0 13px' }}>
        <Search placeholder="Search" style={{ width: 230 }} />
      </Space>
    </>
  );

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ backgroundColor: '#292929', border: 0 }}
      >
        <img src={imgSrcIconLeft} alt="" style={{display: 'block', height: '1rem'}} />
      </Button>
      <Drawer
        title={title}
        placement="left"
        closable
        onClose={onClose}
        visible={visible}
        mask
        drawerStyle={{ backgroundColor: '#2c2e33' }}
        headerStyle={{ backgroundColor: '#2c2e33', borderBottom: 0, padding: 0 }}
      >
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
          expandIconPosition="right"
          className="site-collapse-custom-collapse"
          style={{ background: '#333843' }}
        >
          {Panels.map(({ panelHeader, PanelChildren, key }) => {
            return (
              <Panel
                header={panelHeader}
                key={key}
                className="site-collapse-custom-panel"
                style={{ color: 'white', fontSize: '1rem' }}
              >
                {PanelChildren.map(({ panelLink, href }) => {
                  return (
                    <a
                      href={href}
                      style={{
                        display: 'block',
                        color: 'white',
                        fontSize: '1rem',
                        padding: '1rem 0.5rem 1rem 1.5rem',
                      }}
                    >
                      {panelLink}
                    </a>
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
      </Drawer>
    </>
  );
};
