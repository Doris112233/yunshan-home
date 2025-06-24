import React from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
// import { Card, Divider } from 'antd';
import { Button } from 'antd';
import { Link } from 'umi';
import './index.less';
import data from '../../../data/programs';

const cards = [
  {
    title: '野外调查和保护监测',
    img: data.ov1,
  },
  {
    title: '社区保护',
    img: data.ov2,
  },
  {
    title: '科普及公众参与',
    img: data.ov3,
  },
];

const Overview: React.FC = () => {
  const intl = useIntl();
  return (
    <div className="article-container">
      <div className="overview-container">
        <div className="overview-title">
          <h2>我们的工作</h2>
        </div>
        <div className="overview-content">
          <p>
            中国有七种长臂猿，总数不超过1800只，仅存于云南、西藏、广西、海南的小范围保存完好的森林里，绝大部分长臂猿种群已经在国家公园和保护区范围内受到较为严格的保护，但也还有一部分长臂猿是生活在保护区之外跟当地社区紧密相连的栖息地之中。
          </p>
          <p>
            为了守护濒危的长臂猿及其赖以生存的生态系统，云山保护围绕“野外调查与保护监测、社区保护、科普与公众参与”三大方向，构建出一条立体、多元的自然保护路径。
          </p>
          <p>
            我们以科学为基石，长期开展野外调查与监测，了解长臂猿的种群动态和生活状态，为后续保护及政府决策提供数据支持。在这片土地上，保护不能脱离人，社区居民的参与至关重要。我们通过推行生态事物公共基金、社区保护领导力建设、英文小组和自然教育等方式，让社区成为守护长臂猿的核心力量。
          </p>
          <p>
            同时，我们致力于让更多人看见保护的价值。通过持续的公众传播、志愿活动、实习项目和公益众筹，我们为公众搭建参与自然保护的多样路径，让每一个人都能以自己的方式，为这片山林发声。
          </p>
          <p>
            在这条路上，科学与情感并行，专业与信任相伴。云山保护始终相信——人与自然的和谐共生，是值得努力的方向。
          </p>
        </div>
      </div>

      <div className="overview-image">
        {/* <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            {cards.map((card, index) => (
              <div key={index} className="overview-image-card">
                <img src={card.img} alt={card.title} />
                <h3>{card.title}</h3>
              </div>
            ))}
          </Grid>
        </Grid> */}
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <div className="overview-image-card">
                <div className="image-container">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-overlay">
                  <h3>{card.title}</h3>
                  <Button className="learn-more-btn">
                    <Link to="/programs/overview">了解更多</Link>
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Overview;
