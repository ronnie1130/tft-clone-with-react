import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Content = () => {
  const TierListData = [
    {
      id: 1,
      teammateList: [
        ['Lulu', 3],
        ['Sylas', 3],
        ['Hecarim', 4],
        ['Ornn', 4],
        ['Bard', 5],
        ['Zoe', 5],
        ['Aurelion Sol', 10],
      ],
      grade: 'S',
      teamTitle: 'Astral Dragon',
      teamStyle: 'Fast 8',
    },
    {
      id: 2,
      teammateList: [
        ['Ezreal', 1],
        ['Skarner', 1],
        ['Shen', 2],
        ['Twitch', 2],
        ['Varus', 3],
        ['Illaoi', 3],
        ['Ornn', 4],
        ['Xayah', 4],
      ],
      grade: 'S',
      teamTitle: 'Bruiser Swiftshots',
      teamStyle: 'Slow Roll (7)',
    },
    {
      id: 3,
      teammateList: [
        ['Braum', 2],
        ['Lillia', 2],
        ['Shen', 2],
        ['Diana', 3],
        ['Olaf', 3],
        ['Sylas', 3],
        ['Ornn', 4],
        ['Pyke', 5],
      ],
      grade: 'S',
      teamTitle: 'Scalescorn Bruisers',
      teamStyle: 'Slow Roll (7)',
    },
    {
      id: 4,
      teammateList: [
        ['Lulu', 3],
        ['Hecarim', 4],
        ['Neeko', 4],
        ['Ornn', 4],
        ['Sona', 4],
        ['Bard', 5],
        ['Ao Shin', 10],
      ],
      grade: 'S',
      teamTitle: 'Tempest Dragon',
      teamStyle: 'Fast 8',
    },
    {
      id: 5,
      teammateList: [
        ['Qiyana', 2],
        ['Shen', 2],
        ['Elise', 3],
        ['Sylas', 3],
        ['Ornn', 4],
        ['Syfen', 8],
        ['Pyke', 5],
      ],
      grade: 'S',
      teamTitle: 'Whisper Dragon',
      teamStyle: 'Fast 8',
    },
    {
      id: 6,
      teammateList: [
        ['Heimerdinger', 1],
        ['Vladimir', 1],
        ['Lillia', 2],
        ['Nami', 2],
        ['Illaoi', 3],
        ['Ryze', 3],
        ['Sylas', 3],
        ['Zoe', 5],
      ],
      grade: 'A',
      teamTitle: 'Astral Mages',
      teamStyle: 'Slow Roll (7)',
    },
    {
      id: 7,
      teammateList: [
        ['Senna', 1],
        ['Sett', 1],
        ['Shen', 2],
        ['Swain', 3],
        ['Hecarim', 4],
        ['Xayah', 4],
        ['Shyvana', 10],
        ['Yasuo', 5],
      ],
      grade: 'A',
      teamTitle: 'Ragewing Shapeshifter',
      teamStyle: 'Standard',
    },
    {
      id: 8,
      teammateList: [
        ['Sejuani', 1],
        ['Shen', 2],
        ['Twitch', 2],
        ['Hecarim', 4],
        ['Xayah', 4],
        ['Bard', 5],
        ['Shyvana', 10],
      ],
      grade: 'A',
      teamTitle: 'Ragewing Swiftshots',
      teamStyle: 'Standard',
    },
    {
      id: 9,
      teammateList: [
        ['Skarner', 1],
        ['Varus', 3],
        ['Sylas', 3],
        ['Illaoi', 3],
        ['Lulu', 3],
        ['Ornn', 4],
        ['Aurelion Sol', 10],
      ],
      grade: 'A',
      teamTitle: 'Astral Evokers',
      teamStyle: 'Slow Roll (7)',
    },
    {
      id: 10,
      teammateList: [
        ['Qiyana', 2],
        ['Yone', 2],
        ['Shen', 2],
        ['Diana', 3],
        ['Olaf', 3],
        ['Sylas', 3],
        ['Ornn', 4],
        ['Yasuo', 5],
      ],
      cost: [2, 2, 2, 3, 3, 3, 4, 5],
      grade: 'S',
      teamTitle: 'Bruiser Warriors',
      teamStyle: 'Slow Roll (7)',
    },
  ];
  let list = [];
  for (let i = 0; i < TierListData.length; i++) {
    list.push(<List data={TierListData[i]} />);
  }
  const [style, setStyle] = useState('');
  const [origin, setOrigin] = useState('');
  const [classes, setClasses] = useState('');
  const styleHandler = () => {
    style == '' ? setStyle('active') : setStyle('');
  };
  const originHandler = () => {
    origin == '' ? setOrigin('active') : setOrigin('');
  };
  const classesHandler = () => {
    classes == '' ? setClasses('active') : setClasses('');
  };
  return (
    <Wrapper>
      <Banner>
        <h3>Set 7 Update is now live on TFTactics!</h3>
        <a href='#'>Click here to learn more</a>
      </Banner>
      <Container>
        <Row>
          <Col lg={3} style={{ padding: 0 }}>
            <Filter>
              <div class='filter-title'>
                <h4>Filters</h4>
                <button className='btn'>Reset</button>
              </div>
              <div className='divider'></div>
              <div className='filter-list'>
                <div
                  className={`filter-list-wrapper ${style}`}
                  onClick={styleHandler}
                >
                  <div className='filter-title'>
                    <h5>Playstyle</h5>
                    <KeyboardArrowDownIcon
                      className='icon-down icon'
                      style={{
                        width: 22,
                        height: 22,
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    />
                    <KeyboardArrowUpIcon
                      className='icon-up icon'
                      style={{
                        width: 22,
                        height: 22,
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    />
                  </div>
                  <div className='filter-list-expand'>
                    <div className='checkbox-group'>
                      <input type='checkbox' name='style' id='standard' />
                      <label for='standard'>
                        <span>
                          <img
                            src='https://rerollcdn.com/ui/icon-gold.svg'
                            alt=''
                          />
                          Standard
                        </span>
                      </label>
                    </div>
                    <div className='checkbox-group'>
                      <input type='checkbox' name='style' id='h-roll' />
                      <label for='h-roll'>
                        <span>
                          <img
                            src='https://rerollcdn.com/ui/icon-gold.svg'
                            alt=''
                          />
                          Hyper Roll
                        </span>
                      </label>
                    </div>
                    <div className='checkbox-group'>
                      <input type='checkbox' name='style' id='roll-6' />
                      <label for='roll-6'>
                        <span>
                          <img
                            src='https://rerollcdn.com/ui/icon-gold.svg'
                            alt=''
                          />
                          Slow Roll(6)
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='style' id='roll-7' />
                      <label for='roll-7'>
                        <span>
                          <img
                            src='https://rerollcdn.com/ui/icon-gold.svg'
                            alt=''
                          />
                          Slow Roll(7)
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='style' id='fast-8' />
                      <label for='fast-8'>
                        <span>
                          <img
                            src='https://rerollcdn.com/ui/icon-gold.svg'
                            alt=''
                          />
                          Fast 8
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className={`filter-list-wrapper ${origin}`}
                  onClick={originHandler}
                >
                  <div className='filter-title'>
                    <h5>Origin</h5>
                    <KeyboardArrowDownIcon
                      className='icon-down icon'
                      style={{
                        width: 22,
                        height: 22,
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    />
                    <KeyboardArrowUpIcon
                      className='icon-up icon'
                      style={{
                        width: 22,
                        height: 22,
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    />
                  </div>
                  <div className='filter-list-expand'>
                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='' />
                      <label for=''>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/astral.png'
                            alt=''
                          />
                          Astral
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='guild' />
                      <label for='guild'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/guild.png'
                            alt=''
                          />
                          Guild
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='jade' />
                      <label for='jade'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/jade.png'
                            alt=''
                          />
                          Jade
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='mirage' />
                      <label for='mirage'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/mirage.png'
                            alt=''
                          />
                          Mirage
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='regewing' />
                      <label for='regewing'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/ragewing.png'
                            alt=''
                          />
                          Ragewing
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='revel' />
                      <label for='revel'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/revel.png'
                            alt=''
                          />
                          Revel
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='scalescorn' />
                      <label for='scalescorn'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/scalescorn.png'
                            alt=''
                          />
                          Scalescorn
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='shimmerscale' />
                      <label for='shimmerscale'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/shimmerscale.png'
                            alt=''
                          />
                          Shimmerscale
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='tempest' />
                      <label for='tempest'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/tempest.png'
                            alt=''
                          />
                          Tempest
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='trainer' />
                      <label for='trainer'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/trainer.png'
                            alt=''
                          />
                          Trainer
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='origin' id='whispers' />
                      <label for='whispers'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/whispers.png'
                            alt=''
                          />
                          Whispers
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className={`filter-list-wrapper ${classes}`}
                  onClick={classesHandler}
                >
                  <div className='filter-title'>
                    <h5>Class</h5>
                    <KeyboardArrowDownIcon
                      className='icon-down icon'
                      style={{
                        width: 22,
                        height: 22,
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    />
                    <KeyboardArrowUpIcon
                      className='icon-up icon'
                      style={{
                        width: 22,
                        height: 22,
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    />
                  </div>
                  <div className='filter-list-expand'>
                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='assassin' />
                      <label for='assassin'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/assassin.png'
                            alt=''
                          />
                          Assassin
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='bard' />
                      <label for='bard'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/bard.png'
                            alt=''
                          />
                          Bard
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='bruiser' />
                      <label for='bruiser'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/bruiser.png'
                            alt=''
                          />
                          Bruiser
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='cannoneer' />
                      <label for='cannoneer'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/cannoneer.png'
                            alt=''
                          />
                          Cannoneer
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='cavalier' />
                      <label for='cavalier'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/cavalier.png'
                            alt=''
                          />
                          Cavalier
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='dragon' />
                      <label for='dragon'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/dragon.png'
                            alt=''
                          />
                          Dragon
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='dragonmancer' />
                      <label for='dragonmancer'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/dragonmancer.png'
                            alt=''
                          />
                          Dragonmancer
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='evoker' />
                      <label for='evoker'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/evoker.png'
                            alt=''
                          />
                          Evoker
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='guardian' />
                      <label for='guardian'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/guardian.png'
                            alt=''
                          />
                          Guardian
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='legend' />
                      <label for='legend'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/legend.png'
                            alt=''
                          />
                          Legend
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='mage' />
                      <label for='mage'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/mage.png'
                            alt=''
                          />
                          Mage
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='mystic' />
                      <label for='mystic'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/mystic.png'
                            alt=''
                          />
                          Mystic
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='shapeshifter' />
                      <label for='shapeshifter'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/shapeshifter.png'
                            alt=''
                          />
                          Shapeshifter
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='spell-thief' />
                      <label for='spell-thief'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/spell-thief.png'
                            alt=''
                          />
                          Spell-Thief
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='starcaller' />
                      <label for='starcaller'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/starcaller.png'
                            alt=''
                          />
                          Starcaller
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='swiftshot' />
                      <label for='swiftshot'>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/swiftshot.png'
                            alt=''
                          />
                          Swiftshot
                        </span>
                      </label>
                    </div>

                    <div className='checkbox-group'>
                      <input type='checkbox' name='class' id='' />
                      <label for=''>
                        <span>
                          <img
                            src='https://rerollcdn.com/icons/warrior.png'
                            alt=''
                          />
                          Warrior
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Filter>
          </Col>
          <Col lg={9} style={{ padding: 0 }}>
            <TierList>
              <div className='tierlist-title'>
                <h4>TFT Meta Team Comps Tier List</h4>
              </div>
              <div className='divider'></div>
              <div className='tierlist-info'>
                <div>
                  <div className='tierlist-info-item'>Patch 12.11</div>
                </div>
                <div className='d-flex'>
                  <div className='tierlist-info-item'>
                    <div className='info-item-up'>▴</div>
                    Tier Up
                  </div>
                  <div className='tierlist-info-item'>
                    <div className='info-item-down'>▾</div>
                    Tier Down
                  </div>
                  <div className='tierlist-info-item'>
                    <div className='info-item-new'>N</div>
                    New
                  </div>
                </div>
              </div>
              {list}
            </TierList>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

  padding-top: 50px;
  @media (max-width: 992px) {
    width: 80%;
  }
`;
const Banner = styled.a`
  height: 100px;
  background-image: url(https://rerollcdn.com/update/set-7-update-bg.png);
  cursor: pointer;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s;
  border: 1px solid #0d202b;

  &:hover {
    border: 1px solid #227aad;

    & a {
      color: #2689c2;
    }
  }

  & h3 {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3px;
    font-size: 21px;
    text-align: center;
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }

  & a {
    color: #579dd4;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s;
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`;

const Filter = styled.div`
  padding-right: 30px;
  & h4 {
    color: #fff;
    font-size: 21px;
  }
  @media (max-width: 992px) {
    padding-right: 0px;
    border-bottom: 1px solid #17313a;
    margin-bottom: 40px;
  }

  & .filter {
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .icon-up {
        display: none;
      }
      & .icon-down {
        display: block;
      }
      & h4 {
        margin-bottom: 0;
      }
    }
    &-list {
      margin-top: 10px;
      &-wrapper {
        cursor: pointer;
        & h5 {
          color: rgba(255, 255, 255, 0.5);
          font-size: 16px;
          height: 36px;
          position: relative;
          display: flex;
          align-items: center;
          transition: all 0.3s;
          &::before {
            content: '';
            background-color: #227aad;
            height: 36px;
            width: 0%;
            position: absolute;
            top: 0;
            left: -20px;
            transition: all 0.3s;
          }
        }
        &:hover {
          & h5 {
            color: #fff;
          }
        }
        &.active {
          & h5 {
            margin-left: 20px;
            margin-bottom: 15px;
            &::before {
              width: 4px;
            }
          }

          & .filter-list-expand {
            opacity: 1;
            height: 100%;
          }

          & .icon-up {
            display: block;
          }
          & .icon-down {
            display: none;
          }
        }
      }
      &-expand {
        opacity: 0;
        height: 0;
        transition: all 0.2s ease-in-out;

        & .checkbox-group {
          & input {
            display: none;
            &:checked ~ label span::before {
              background-color: #227aad;
              border: 2px solid #227aad;
            }
            &:checked ~ label span img {
              opacity: 1;
            }
          }
          & label {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
            cursor: pointer;

            & span {
              display: flex;
              font-size: 15px;
              color: #fff;
              align-items: center;
              font-weight: 500;
              position: relative;
              &::before {
                position: absolute;
                content: '';
                border: 2px solid rgba(255, 255, 255, 0.5);
                right: 4px;
                width: 12px;
                height: 12px;
                border-radius: 50%;

                transition: all 0.3s;
              }
              & img {
                width: 20px;
                height: 20px;
                opacity: 0.54;
                transition: all 0.3s;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
`;

const TierList = styled.div`
  padding-left: 30px;
  border-left: 1px solid #17313a;
  @media (max-width: 992px) {
    border-left: 0;
    padding-left: 0px;
  }

  & .tierlist-title {
    & h4 {
      color: #fff;
      font-size: 21px;
    }
  }
  & .tierlist-info {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    @media (max-width: 576px) {
      flex-direction: column;
    }

    & > div .tierlist-info-item {
      @media (max-width: 576px) {
        width: 100%;
      }
    }

    &-item {
      border-radius: 3px;
      background: #123040;
      padding: 5px 10px;
      font-weight: 500;
      color: #88a0a7;
      height: 35px;
      font-size: 15px;
      line-height: 18px;

      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-child) {
        margin-right: 10px;
      }

      & .info-item-up {
        color: #bfff7f;
        font-size: 24px;
        margin-right: 5px;
      }
      & .info-item-down {
        color: #ff7f7f;
        font-size: 24px;
        margin-right: 5px;
      }
      & .info-item-new {
        color: #ffdf7f;
        font-size: 12px;
        font-weight: 700;
        margin-right: 5px;
      }
      @media (max-width: 576px) {
        margin-bottom: 10px;
        width: 33%;
      }
      @media (max-width: 450px) {
        height: 40px;
      }
    }
  }
`;
