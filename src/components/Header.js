import React, { useState } from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const versionOptions = [
    { label: 'Set 7', value: 'set7' },
    { label: 'Set 6.5', value: 'set6.5' },
  ];
  const langOptions = [
    { label: 'NA', value: 'na' },
    { label: 'BR', value: 'br' },
    { label: 'EUNE', value: 'eune' },
    { label: 'EUW', value: 'euw' },
    { label: 'JP', value: 'jp' },
    { label: 'KR', value: 'kr' },
    { label: 'LAN', value: 'lan' },
    { label: 'LAS', value: 'las' },
    { label: 'OCE', value: 'oce' },
    { label: 'TR', value: 'tr' },
    { label: 'RU', value: 'ru' },
  ];

  const [value, setValue] = useState('Set 7');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Nav>
        <NavWrapper>
          <img src='https://rerollcdn.com/brand.svg' alt='Logo' />
          <Dropdown
            options={versionOptions}
            value={value}
            onChange={handleChange}
          />
        </NavWrapper>
        <NavInputWrapper>
          <Dropdown
            options={langOptions}
            value={value}
            onChange={handleChange}
          />
          <Search placeholder='Search Summoner Name...' />
          <SearchIcon
            style={{
              color: '#fff',
              opacity: 0.75,
              height: 18,
              marginRight: 5,
            }}
          />
        </NavInputWrapper>
        <NavWrapper>
          <Download>Download App</Download>
          <MobileMenu>
            <MenuIcon style={{ width: 30, height: 30 }} />
          </MobileMenu>
        </NavWrapper>
      </Nav>
      <Menu>
        <ul>
          <li>
            <a href='' className='active'>
              Team Comps
            </a>
          </li>
          <li>
            <a href=''>Meta Report</a>
          </li>
          <li>
            <a href=''>Champions</a>
          </li>
          <li>
            <a href=''>Tier Lists</a>
          </li>
          <li>
            <a href=''>Item Builder</a>
          </li>
          <li>
            <a href=''>Team Builder</a>
          </li>
          <li>
            <a href=''>Database</a>
          </li>
          <li>
            <a href=''>Patch Notes</a>
          </li>
        </ul>
      </Menu>
    </Wrapper>
  );
};

const Dropdown = ({ value, options, onChange }) => {
  return (
    <label>
      <select value={value} onChange={onChange}>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </label>
  );
};

export default Header;

const Wrapper = styled.div``;

const Nav = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  @media (max-width: 992px) {
    width: 80%;
  }

  & select {
    background-color: #123040;
    border: 0;
    color: #fff;
    font-size: 12px;
    height: 33px;
    width: 100px;
    padding: 0 5px;
    outline: 0;
    border-radius: 4px;
    @media (max-width: 992px) {
      width: 70px;
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  & img {
    height: 70%;
    margin-right: 15px;
  }
`;

const NavInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #17313a;
  border-radius: 4px;
  background: #102531;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid #17313a;
  border-bottom: 1px solid #17313a;

  background: #102531;
  height: 50px;
  @media (max-width: 992px) {
    display: none;
  }
  & ul {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    & li {
      list-style: none;
      width: 100%;
      height: 100%;

      & a {
        text-decoration: none;
        white-space: nowrap;
        color: #ffffff91;
        font-weight: 500;
        letter-spacing: 0.4px;
        transitopm: all 0.3s;
        position: relative;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 4px;
          background: #d47559;
          transition: width 0.3s;
        }
        &.active {
          color: #fff;
          &::after {
            width: 100%;
          }
        }
      }
      &:hover {
        color: #fff;
      }
    }
  }
`;

const Search = styled.input`
  color: #ffffffe6;
  background: transparent;
  border: 0;
  font-family: 'Jost', sans-serif;
  padding: 5px;
  min-width: 17vw;
  font-weight: 400;

  font-size: 14px;

  &::placeholder {
    color: #ffffff91;
  }
  &:focus {
    outline: none;
  }
`;

const Download = styled.button`
  background: #4080b0;
  border: none;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Jost', sans-serif;
  border-radius: 3px;
  padding: 7px 12px;
  transition: all 0.3s;
  cursor: pointer;
  @media (max-width: 992px) {
    display: none;
  }
  &:hover {
    background: #2c98d6;
    border: none;
  }
`;

const MobileMenu = styled.div`
  color: #fff;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;
