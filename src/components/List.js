import React, { useState } from 'react';
import styled from 'styled-components';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'bootstrap/dist/css/bootstrap.min.css';

const List = (props) => {
  const teammate = [
    {
      id: 1,
      teammateList: [
        'Lulu',
        'Sylas',
        'Hecarim',
        'Ornn',
        'Bard',
        'Zoe',
        'Aurelion Sol',
      ],
    },
    {
      id: 2,
      teammateList: [
        'Ezreal',
        'Skarner',
        'Shen',
        'Twitch',
        'Varus',
        'Illaoi',
        'Ornn',
        'Xayah',
      ],
    },
    {
      id: 3,
      teammateList: [
        'Braum',
        'Lillia',
        'Shen',
        'Diana',
        'Olaf',
        'Sylas',
        'Ornn',
        'Pyke',
      ],
    },
    {
      id: 4,
      teammateList: [
        'Lulu',
        'Hecarim',
        'Neeko',
        'Ornn',
        'Sona',
        'Bard',
        'Ao Shin',
      ],
    },
    {
      id: 5,
      teammateList: [
        'Qiyana',
        'Shen',
        'Elise',
        'Sylas',
        'Ornn',
        'Syfen',
        'Pyke',
      ],
    },
    {
      id: 6,
      teammateList: [
        'Heimerdinger',
        'Vladimir',
        'Lillia',
        'Nami',
        'Illaoi',
        'Ryze',
        'Sylas',
        'Zoe',
      ],
    },
    {
      id: 7,
      teammateList: [
        'Senna',
        'Sett',
        'Shen',
        'Swain',
        'Hecarim',
        'Xayah',
        'Shyvana',
        'Yasuo',
      ],
    },
    {
      id: 8,
      teammateList: [
        'Sejuani',
        'Shen',
        'Twitch',
        'Hecarim',
        'Xayah',
        'Bard',
        'Shyvana',
      ],
    },
    {
      id: 9,
      teammateList: [
        'Skarner',
        'Varus',
        'Sylas',
        'Illaoi',
        'Lulu',
        'Ornn',
        'Aurelion Sol',
      ],
    },
    {
      id: 10,
      teammateList: [
        'Qiyana',
        'Yone',
        'Shen',
        'Diana',
        'Olaf',
        'Sylas',
        'Ornn',
        'Yasuo',
      ],
    },
  ];
  const [expand, setExpand] = useState('');
  const expandHandler = () => {
    expand == '' ? setExpand('active') : setExpand('');
  };

  console.log(props.data.teammateList);

  return (
    <Wrapper onClick={expandHandler} className={expand}>
      <TierGroup>
        <div className='d-flex flex-column flex-sm-row'>
          <div className='team-info'>
            <div className='grade'>{props.data.grade}</div>
            <div className='team'>
              <div className='team-title'>{props.data.teamTitle}</div>
              <div className='team-style'>{props.data.teamStyle}</div>
            </div>
          </div>
          <ul className='team-comps'>
            {props.data.teammateList.map((ele, i) => (
              <li className='teammates'>
                <img
                  className={`cost-${ele[1]}`}
                  src={`https://rerollcdn.com/characters/Skin/7/${ele[0].replace(
                    / /g,
                    ''
                  )}.png`}
                  alt=''
                />
                <div className='teammates-name'>{ele[0]}</div>
              </li>
            ))}
          </ul>
        </div>
        <KeyboardArrowDownIcon
          className='icon-down icon'
          style={{ width: 22, height: 22, color: 'rgba(255,255,255,0.5)' }}
        />
        <KeyboardArrowUpIcon
          className='icon-up icon'
          style={{ width: 22, height: 22, color: 'rgba(255,255,255,0.5)' }}
        />
      </TierGroup>
      <TierGroupExpand className={expand}>
        <div className='team-expand-detail'>
          <div className='team-expand-detail-comp '>
            <h6>Early Comp</h6>
            <ul>
              <li>
                <img
                  src='https://rerollcdn.com/characters/Base/Lulu.png'
                  alt=''
                />
              </li>
              <li>
                <img
                  src='https://rerollcdn.com/characters/Base/Lulu.png'
                  alt=''
                />
              </li>
              <li>
                <img
                  src='https://rerollcdn.com/characters/Base/Lulu.png'
                  alt=''
                />
              </li>
              <li>
                <img
                  src='https://rerollcdn.com/characters/Base/Lulu.png'
                  alt=''
                />
              </li>
              <li>
                <img
                  src='https://rerollcdn.com/characters/Base/Lulu.png'
                  alt=''
                />
              </li>
            </ul>
          </div>
          <div className='team-expand-detail-traits '>
            <h6>Traits</h6>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className='team-expand-detail-item '>
            <h6>Carousel</h6>
            <div className='team-expand-detail-item-group'>
              <div className='part'>
                <img src='https://rerollcdn.com/items/RecurveBow.png' alt='' />
                <div className='main'>
                  <img
                    src='https://rerollcdn.com/items/GuinsoosRageblade.png'
                    alt=''
                  />
                </div>
              </div>
              <ArrowForwardIosIcon
                style={{
                  width: 15,
                  height: 15,
                  color: 'rgba(255,255,255,0.5)',
                }}
              />
              <div className='part'>
                <img src='https://rerollcdn.com/items/RecurveBow.png' alt='' />
                <div className='main'>
                  <img
                    src='https://rerollcdn.com/items/GuinsoosRageblade.png'
                    alt=''
                  />
                </div>
              </div>
              <ArrowForwardIosIcon
                style={{
                  width: 15,
                  height: 15,
                  color: 'rgba(255,255,255,0.5)',
                }}
              />
              <div className='part'>
                <img src='https://rerollcdn.com/items/RecurveBow.png' alt='' />
                <div className='main'>
                  <img
                    src='https://rerollcdn.com/items/GuinsoosRageblade.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='team-expand-detail-options'>
            <h6>Options</h6>
            <div className='options-list'>
              <img
                src='https://rerollcdn.com/characters/Base/Lulu.png'
                alt=''
              />
              <ArrowForwardIosIcon
                style={{
                  width: 15,
                  height: 15,
                  color: 'rgba(255,255,255,0.5)',
                }}
              />
              <img
                src='https://rerollcdn.com/characters/Base/Lulu.png'
                alt=''
              />
              <img
                src='https://rerollcdn.com/characters/Base/Lulu.png'
                alt=''
              />
            </div>
            <div className='options-list'>
              <img
                src='https://rerollcdn.com/characters/Base/Lulu.png'
                alt=''
              />
              <ArrowForwardIosIcon
                style={{
                  width: 15,
                  height: 15,
                  color: 'rgba(255,255,255,0.5)',
                }}
              />
              <img
                src='https://rerollcdn.com/characters/Base/Lulu.png'
                alt=''
              />
              <img
                src='https://rerollcdn.com/characters/Base/Lulu.png'
                alt=''
              />
            </div>
          </div>
          <div className='team-expand-detail-position'>
            <h6>Positioning</h6>
            <ul>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
              <li className='hex'>
                <div className='hex-in'>
                  <div className='hex-link'></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </TierGroupExpand>
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.button`
  border: 1px solid #17313a;
  display: block;
  width: 100%;
  background: #102531;
  margin: 15px 0 15px;
  & .icon-up {
    display: none;
  }
  & .icon-down {
    display: block;
  }
  &.active {
    border-color: #227aad;

    & .icon-up {
      display: block;
    }
    & .icon-down {
      display: none;
    }
  }
`;

const TierGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px 15px 15px;
  position: relative;

  cursor: pointer;
  @media (max-width: 992px) {
    padding: 15px 5px 15px 15px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  & .grade {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    padding: 5px;
    margin-right: 20px;
    color: #0d202b;
    font-weight: 600;
    border-radius: 2.5px;
    cursor: default;
    background: #ff7f7f;
  }

  & .team {
    &-info {
      display: flex;
      align-items: center;
      width: 280px;
      @media (max-width: 1260px) {
        flex-grow: 1;
      }
      @media (max-width: 992px) {
        flex-grow: 0;
        width: 235px;
      }
      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
    &-title {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
    &-style {
      display: inline-flex;
      align-items: center;
      color: #88a0a7;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.05em;
      margin-top: 2px;
      background: #123040;
      padding: 2px 4px;
      border-radius: 4px;
    }
    &-comps {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0;
      gap: 14px;
      @media (max-width: 1260px) {
        flex-basis: 222px;
        justify-content: flex-end;
        margin-right: 10px;
      }
      @media (max-width: 992px) {
        flex-basis: 70%;
        gap: 10px;
      }
      @media (max-width: 576px) {
        justify-content: flex-start;
      }
      & .teammates {
        & img {
          width: 45px;
          height: 45px;
          min-width: 45px;
          min-height: 45px;
          margin-bottom: 5px;

          &.cost-1 {
            border: 1px solid #213042;
          }
          &.cost-2 {
            border: 1px solid #156831;
          }
          &.cost-3 {
            border: 1px solid #12407c;
          }
          &.cost-4 {
            border: 1px solid #893088;
          }
          &.cost-5 {
            border: 1px solid #b89d27;
          }
          &.cost-8 {
            border: 1px solid #fff;
            border-image: linear-gradient(
              to bottom right,
              #893088 0,
              #fff 25%,
              #893088 50%,
              #fff 75%,
              #893088
            );
            border-image-slice: 1;
          }
          &.cost-10 {
            border: 1px solid #fff;
            border-image: linear-gradient(
              to bottom right,
              #b89d27 0,
              #fff 25%,
              #b89d27 50%,
              #fff 75%,
              #b89d27
            );
            border-image-slice: 1;
          }
        }
        &-name {
          width: 45px;
          font-weight: 500;
          min-height: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 11px;
          text-align: center;
          color: #88a0a7;
          line-height: 1.3em;
        }
      }
    }
  }

  & .icon {
    @media (max-width: 768px) {
      position: absolute;
      right: 30px;
    }
  }

  & button {
    background-color: transparent;
    border: 0;
  }
`;

const TierGroupExpand = styled.div`
  display: none;
  &.active {
    display: block;
  }
  & .team-expand {
    &-detail {
      display: grid;
      grid-template-rows: repeat(2, 100px, 200px);
      grid-template-columns: repeat(6, 1fr);

      @media (max-width: 1260px) {
        grid-template-rows: repeat(2, 130px) repeat(1, 210px);
      }
      @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 90px) repeat(1, 135px) repeat(1, 210px);
      }
      & h6 {
        color: #88a0a7;
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 15px;
      }
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
      }
      &-comp {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        border-right: 1px solid #17313a;
        border-bottom: 1px solid #17313a;
        border-top: 1px solid #17313a;

        @media (max-width: 1260px) {
          grid-column: 1 / 4;
          grid-row: 1 / 2;
        }
        @media (max-width: 576px) {
          grid-column: 1 / -1;
          grid-row: 1 / 2;
          border-right: 0;
          border-bottom: 0;
        }

        & ul {
          display: flex;
          gap: 8px;
          & li {
            & img {
              width: 35px;
              height: 35px;
              min-width: 35px;
              min-height: 35px;
            }
          }
        }
      }
      &-traits {
        grid-column: 3 / 5;
        grid-row: 1 / 2;
        border-right: 1px solid #17313a;
        border-bottom: 1px solid #17313a;
        border-top: 1px solid #17313a;
        @media (max-width: 1260px) {
          border-right: 0;
          grid-column: 4 / -1;
          grid-row: 1 / 2;
        }
        @media (max-width: 576px) {
          grid-column: 1 / -1;
          grid-row: 2 / 3;
        }
      }
      &-item {
        grid-column: 5 / -1;
        grid-row: 1 / 2;
        border-bottom: 1px solid #17313a;
        border-top: 1px solid #17313a;
        @media (max-width: 1260px) {
          border-top: 0;
          border-right: 1px solid #17313a;
          grid-column: 1 / 4;
          grid-row: 2 / 3;
        }

        @media (max-width: 576px) {
          grid-column: 1 / -1;
          grid-row: 3 / 4;
        }

        &-group {
          display: flex;
          align-items: center;
          gap: 15px;

          & .part {
            position: relative;
            & img {
              width: 32px;
              height: 32px;
              min-width: 32px;
              min-height: 32px;
            }
            & .main {
              position: absolute;
              top: 100%;
              right: 0;
              transform: translate(30%, -70%);

              & img {
                width: 18px;
                height: 18px;
                min-width: 18px;
                min-height: 18px;
              }
            }
          }
        }
      }
      &-options {
        grid-column: 1 / 4;
        border-right: 1px solid #17313a;
        @media (max-width: 1260px) {
          grid-column: 4 / -1;
          grid-row: 2 / 3;
          border-right: 0;
          border-bottom: 1px solid #17313a;
        }
        @media (max-width: 576px) {
          grid-column: 1 / -1;
          grid-row: 4 / 5;
        }
        & .options-list {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          & img {
            width: 35px;
            height: 35px;
            min-width: 35px;
            min-height: 35px;
          }
        }
      }
      &-position {
        grid-column: 4 / -1;
        @media (max-width: 1260px) {
          grid-column: 1 / -1;
          grid-row: 3 / -1;
        }
        @media (max-width: 576px) {
          grid-column: 1 / -1;
          grid-row: 5 / 6;
        }

        & ul {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          overflow: hidden;
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          list-style-type: none;
          padding-bottom: 3%;
          line-height: 1em;
          & li.hex {
            position: relative;
            visibility: hidden;
            outline: 1px solid transparent;
            width: 13%;
            &:nth-child(n + 7) {
              transform: translateX(20px);
            }
            &:nth-child(n + 14) {
              transform: translateX(0px);
            }
            &:nth-child(n + 21) {
              transform: translateX(20px);
            }
            &:nth-child(7),
            &:nth-child(21) {
              transform: unset;
            }
            &:nth-child(14) {
              transform: translateX(20px);
            }
            &::after {
              content: '';
              display: block;
              padding-bottom: 90%;
            }
            & .hex-in {
              position: absolute;
              width: 90%;
              padding-bottom: 103.923%;
              margin: 0 2%;
              overflow: hidden;
              visibility: hidden;
              outline: 1px solid transparent;
              transform: rotate(-60deg) skewY(30deg);
              & .hex-link {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                text-align: center;
                color: #fff;
                background: #123040;
                overflow: hidden;
                position: absolute;
                visibility: visible;
                outline: 1px solid transparent;
                transform: skewY(-30deg) rotate(60deg);
              }
            }
          }
        }
      }
    }
  }
`;
