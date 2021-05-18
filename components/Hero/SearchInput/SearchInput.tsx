import React, { FC } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.less';

export type SearchInputType = {
  placeholder: string;
  btnTxt: string;
};

export const SearchInput: FC<SearchInputType> = ({ placeholder, btnTxt }) => {
  return (
    <div id="myInput">
      <Input
        placeholder={placeholder}
        style={{ fontSize: '1.5rem', height: 74, border: 0, borderRadius: 10, boxShadow: ' hsl(0deg 0% 80%) 0 5px 16px' }}
        suffix={
          <Button
            type="primary"
            size="large"
            style={{borderRadius: 7, padding: '0 1.2rem', marginRight: 8}}
            icon={<SearchOutlined style={{ fontSize: 18 }} />}
          >
            <span className="inputBtn">{btnTxt}</span>
          </Button>
        }
      />
    </div>
  );
};

export default SearchInput;
