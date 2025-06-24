import React, { useEffect, useState, useRef } from 'react';
import { useIntl, setLocale } from 'umi';
import { Divider, Button } from 'antd';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material';
import indexLog from '../../data/assets/index/indexLogo.png';
import './index.less';
import data from '../../data/index';
import mediadata from '../../data/contact';
import { Link } from 'umi';
import { getLocale } from '@@/plugin-locale/localeExports';
import Container from '@material-ui/core/Container';
import { CaretRightOutlined, RightCircleOutlined } from '@ant-design/icons';

const ellipse1 = data.ellipse1;
const ellipse2 = data.ellipse2;
const ellipse3 = data.ellipse3;
const cards = [
  { key: 'wild', shortLabel: '野外', longLabel: '野外调查', img: ellipse1 },
  {
    key: 'community',
    shortLabel: '社区',
    longLabel: '社区保护',
    img: ellipse2,
  },
  { key: 'public', shortLabel: '公众', longLabel: '公众倡导', img: ellipse3 },
];

const Index: React.FC = props => {
  const intl = useIntl();
  const [expanded, setExpanded] = useState('wild');

  return (
    <div className="full-page">
      <div className="section-container section-head">
        <div className="image-head-section">
          <img src={data.headpic} />
        </div>
        <div className="text-head-section">
          <h1>{intl.formatMessage({ id: 'home.title' })}</h1>
          <p>{intl.formatMessage({ id: 'home.description' })}</p>
          <Box
            sx={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '10px',
              flexDirection: {
                xxs: 'column',
                xs: 'column',
                sm: 'row',
                md: 'row',
              },
            }}
          >
            <Button>
              <Link to="/us/will">
                <b>{intl.formatMessage({ id: 'home.button.learn' })}</b>
              </Link>
            </Button>
            <Button
              style={{
                marginLeft: '-10px',
              }}
              type="text"
              icon={<CaretRightOutlined />}
              className="responsive-button"
            >
              <Link to="/support/month" style={{ color: 'inherit' }}>
                <b>{intl.formatMessage({ id: 'home.support' })}</b>
              </Link>
            </Button>
          </Box>
        </div>
      </div>

      <div className="section-container section-why">
        <div className="why-image-section">
          <img src={data.map} alt="Gibbon distribution map" />
        </div>
        <div className="why-text-section">
          <div className="content-title">
            <h2>{intl.formatMessage({ id: 'home.why.title' })}</h2>
          </div>
          <div className="content-desc">
            <p>{intl.formatMessage({ id: 'home.why.content' })}</p>
          </div>
          <div className="content-button-container">
            <Button className="content-button">
              <Link to="/protect/archive">
                <b>{intl.formatMessage({ id: 'home.button.learn' })}</b>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="section-container section-work">
        <div className="work-left">
          <div className="content-title">
            <h2>我们的工作</h2>
          </div>
          <div className="content-desc">
            在中国的西南地区，我们坚持了将近10年的野外调查监测、社区保护和科普宣教工作，为相关保护区和林草系统合作伙伴提供了长臂猿保护的科学依据及保护建议，并为公众提供了大量长臂猿科普优质活动和内容。
          </div>
          <div className="content-button-container">
            <Button className="content-button">
              <Link to="/protect/archive">
                <b>{intl.formatMessage({ id: 'home.button.learn' })}</b>
              </Link>
            </Button>
          </div>
        </div>
        <div className="work-right">
          {cards.map(card => (
            <div
              key={card.key}
              className={`work-card ${card.key} ${
                expanded === card.key ? 'expanded' : 'shrunk'
              }`}
              onClick={() => setExpanded(card.key)}
            >
              <img src={card.img} alt={card.longLabel} />
              <div className="work-card-label">
                <span>
                  {expanded === card.key ? card.longLabel : card.shortLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-story">
        <div className="story-title">
          <h2>我们的故事</h2>
        </div>
        <div className="story-cards">
          <div className="story-card">
            <div className="story-card-image">
              <img src={data.story1} alt="story1" />
            </div>
            <p>
              长臂猿食堂调查计划 <span className="arrow">{'>'}</span>
            </p>
          </div>
          <div className="story-card">
            <div className="story-card-image">
              <img src={data.story2} alt="story2" />
            </div>
            <p>
              社区保护 <span className="arrow">{'>'}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="section-support">
        <div className="support-content">
          <div className="content-desc support-desc">
            <h2>
              你的所有捐助，都将用于支持我们的长臂猿保护项目，包括栖息地的修复、种群的动态监测，让保护区外的长臂猿可以拥有更好的生活。
              <br />
              支持长臂猿保护有一万种姿势，而捐赠，或许是最简单的一种。
            </h2>
          </div>
          <div className="content-button-container">
            <Button className="content-button">
              <Link to="/support/month">
                <b>支持我们</b>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
