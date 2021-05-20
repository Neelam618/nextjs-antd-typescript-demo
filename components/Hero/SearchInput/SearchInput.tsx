import React, { FC, useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.less';

export type SearchInputType = {
  placeholder: string;
  btnTxt: string;
};

export const SearchInput: FC<SearchInputType> = ({ placeholder, btnTxt }) => {
  const [data, setData] = useState('Type something...');
  function getData(val) {
    setData(val.target.value)
  }

  function redirectToSearchPage() {
    if (data) {
      window.location.href = `/search?searchbox="${data}"`;
    }
  }

  return (
    <div id="myInput">
      <Input
      onChange={getData}
      id="input"
        placeholder={placeholder}
        style={{ fontSize: '1.5rem', height: 74, border: 0, borderRadius: 10, boxShadow: ' hsl(0deg 0% 80%) 0 5px 16px' }}
        suffix={
          <Button
            onClick={() => redirectToSearchPage()}
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
