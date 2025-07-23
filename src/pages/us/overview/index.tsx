import { Menu } from 'antd';
import './index.less';
import Grid from '@material-ui/core/Grid';
import Contact from '../contact';
import Partner from '../partner';
import Council from '../council';
import Timeline from '../timeline';
import Will from '../will';
import Report from '../../report';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const sectionKeys = [
  {
    key: 'will',
    label: '使命愿景',
  },
  {
    key: 'council',
    label: '理事会',
  },
  {
    key: 'report',
    label: '年报月报',
  },
  {
    key: 'timeline',
    label: '大事记',
  },
  {
    key: 'partner',
    label: '合作伙伴',
  },
  {
    key: 'contact',
    label: '联系我们',
  },
];

const sectionComponents = {
  will: <Will />,
  council: <Council />,
  report: <Report initCurr={0} />,
  timeline: <Timeline />,
  partner: <Partner />,
  contact: <Contact />,
};

export default function Overview() {
  const [currentSection, setCurrentSection] = useState('will');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleMenuClick = (e: any) => {
    setCurrentSection(e.key);
  };

  return (
    <div>
      <div className="article-container">
        <div className="overview-container">
          <div className="overview-title">
            <h2>关于我们</h2>
          </div>
          <div className="overview-content">
            <p>
              目前中国唯一一家专注于长臂猿保护的公益机构。创始人为长臂猿研究专家、中山大学教授范朋飞、长臂猿保护专家阎璐、鸟类研究专家、野生动物摄影师赵超，2015年在云南大理注册成立。
            </p>
            <p>
              我们以保护长臂猿等中国的濒危旗舰物种为突破口，进而保护生物多样性最为丰富的中国西南森林生态系统，促进人与自然和谐共处。
            </p>
            <p>我们不仅关心长臂猿，也关心和长臂猿保护息息相关的人们。</p>
          </div>
        </div>
        <div className="us-content">
          <div className="us-menu">
            <Menu
              mode={isMobile ? 'horizontal' : 'inline'}
              // mode="horizontal"
              defaultSelectedKeys={['1']}
              items={sectionKeys}
              onClick={handleMenuClick}
              style={{ justifyContent: 'center' }}
            />
          </div>
          <div style={{ flex: 1 }} className="us-section">
            {
              sectionComponents[
                currentSection as keyof typeof sectionComponents
              ]
            }
          </div>
        </div>
      </div>
    </div>
  );
}
