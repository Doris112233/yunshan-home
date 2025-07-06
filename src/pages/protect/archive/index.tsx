import React, { useState } from 'react';
import { useIntl } from 'umi';
import { Button, Tabs, Card, Descriptions, Typography } from 'antd';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import data from '../../../data/archive';
import dataArchaeo from '../../../data/archaeo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import './index.less';
import { SoundOutlined, PauseOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// const hoAu = require('./audio/Hoolock_tianxing.mp3');

import tianxing from './audio/Hoolock_tianxing.mp3';
import lar from './audio/Hylobates_lar.mp3';
import concolor from './audio/Nomascus_concolor.mp3';
import hainanus from './audio/Nomascus_hainanus.mp3';
import leucogenys from './audio/Nomascus_leucogenys.mp3';
import nasutus from './audio/Nomascus_nasutus.mp3';

const audios = [
  new Audio(tianxing),
  new Audio(hainanus),
  new Audio(nasutus),
  new Audio(concolor),
  new Audio(leucogenys),
  new Audio(lar),
];

const ImgViewer = props => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <div>
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <img
          onLoad={() => setIsLoading(false)}
          style={{ height: '30rem' }}
          src={props.src}
        />
      </div>
      <div style={{ display: isLoading ? 'block' : 'none' }}>
        <Spin />
      </div>
    </div>
  );
};

export default props => {
  const queryId = props.location.query.id;
  const intl = useIntl();
  const [selected, setSelected] = useState<number>(queryId || 0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { Item } = Descriptions;
  const { Text, Title } = Typography;

  const descItemStyle = {
    color: '#8da745',
  };

  const changeTab = (key: string) => {
    audios[selected].pause();
    audios[selected].currentTime = 0;
    setSelected(parseInt(key));
  };

  const playAudio = () => {
    if (isPlaying) {
      audios[selected].pause();
    } else {
      audios[selected].play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="full-page">
      <section className="section-archeology">
        <div className="section-archeology-container"></div>
        <div className="section-archeology-header">
          <h1>长臂猿在中国</h1>
        </div>
        <div className="section-archeology-content">
          <div className="text-section">
            <p>
              出土文物显示，2700多年前，长臂猿曾广泛存在于中国各地的森林中，甚至在黄河流域都有记录。对于中国人来说，猿的形象自古以来就存在于我们的生活里，在文人墨客的作品中，是我们无法抹去的文化记忆。
            </p>
            <p>
              然而，如今长臂猿只能在云南、广西、海南和西藏有分布，总数不超过1800只。
            </p>
            <div className="image-row">
              <img src={dataArchaeo.archaeo1} alt="长臂猿在树上" />
              <div className="side-text">
                <p>
                  作为森林里的旗舰物种，长臂猿的存在在一定程度上标志着森林的健康状况。它们依赖于森林提供的食物，加之鸣声较容易被监测到，长臂猿可作为森林状况恶化的预警——它们的消失即意味着森林不再健康。
                </p>
              </div>
            </div>
            <p>
              更重要的是，长臂猿生存的森林生态系统是我国生物多样性最为丰富的地区，保护长臂猿就像撑开了一把保护伞，间接保护了生活在同一区域的其他生物。
            </p>
          </div>
          <div className="vertical-image">
            <img src={dataArchaeo.archaeo2} alt="青铜长臂猿" />
          </div>
        </div>
      </section>
      <section className="section-archive">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid
            container
            item
            xs={12}
            sm={10}
            md={8}
            direction={{ xs: 'column', md: 'row' }}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={2} sm={3} md={3}>
              <Button
                type="primary"
                style={{ marginTop: 10 }}
                onClick={playAudio}
                icon={isPlaying ? <PauseOutlined /> : <SoundOutlined />}
              >
                {intl.formatMessage({ id: 'protect.archive.listen' })}
              </Button>
            </Grid>
            <Grid item xs={10} sm={9} md={9}>
              <Tabs
                defaultActiveKey="0"
                onChange={changeTab}
                activeKey={selected.toString()}
                style={{ marginTop: 30 }}
                tabPosition="top"
                type="card"
              >
                {data.map(item => (
                  <Tabs.TabPane
                    tab={intl.formatMessage({ id: item.name })}
                    key={item.key.toString()}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={5} className="archiveItem">
              <Card>
                <Swiper>
                  {[...new Array(data[selected].imageCount)].map(
                    (item, index) => (
                      <SwiperSlide key={index}>
                        <Container
                          maxWidth="sm"
                          style={{ textAlign: 'center' }}
                        >
                          <ImgViewer
                            src={data[selected].images[index]}
                          ></ImgViewer>
                        </Container>
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={5} className="archiveItem">
              <Card>
                <Descriptions
                  title={intl.formatMessage({ id: data[selected].name })}
                  column={1}
                >
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.name' })}
                      </div>
                    }
                  >
                    <i>{data[selected].latin}</i>
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.taxonomy' })}
                      </div>
                    }
                  >
                    <Text>
                      {intl.formatMessage({
                        id: data[selected].classification.family,
                      })}
                      &nbsp;
                      {intl.formatMessage({
                        id: data[selected].classification.genus,
                      })}
                    </Text>
                    {/*<Text>*/}
                    {/*  {intl.formatMessage({ id: 'protect.archive.family' })}*/}
                    {/*</Text>*/}
                    {/*<Text>{intl.formatMessage({id: data[selected].classification.genus})}</Text>*/}
                    {/*<Text>*/}
                    {/*  {intl.formatMessage({ id: 'protect.archive.genera' })}*/}
                    {/*</Text>*/}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.body' })}
                      </div>
                    }
                  >
                    <p>
                      {intl.formatMessage({ id: 'protect.archive.weight' })}
                      {`${data[selected].body.weight}kg`}
                      &nbsp;
                    </p>
                    <p>
                      {intl.formatMessage({ id: 'protect.archive.length' })}
                      {`${data[selected].body.height}cm`}
                    </p>
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.iucn' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].IUCN })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.status' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].chineseLevel })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.range' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].distribution })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.number' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].amount })}
                  </Item>
                  <Item
                    label={
                      <div style={descItemStyle}>
                        {intl.formatMessage({ id: 'protect.archive.feature' })}
                      </div>
                    }
                  >
                    {intl.formatMessage({ id: data[selected].feature })}
                  </Item>
                </Descriptions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};
