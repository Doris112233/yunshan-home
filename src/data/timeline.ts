const data = [
  {
    time: '2015.1',
    text: '阎璐、范鹏飞和赵超共同发起成立云山保护',
  },
  {
    time: '2015.6',
    text: '云山保护在大理民政局正式注册',
  },
  {
    time: '2015.12',
    text: '云山保护召开第一届理事会会议，理事会成员为：范鹏飞、刘阳、赵超、董磊、阎璐',
  },
  {
    time: '2015.12',
    text: '第一次云山保护合作伙伴交流会，龙勇诚受邀成为荣誉理事',
  },
  {
    time: '2016.1',
    text: '云山保护第一届自然摄影展',
  },
  {
    time: '2016.3',
    text: '深入盈江长臂猿栖息地周边社区调研长臂猿保护现状',
  },
  {
    time: '2016.5',
    text: '永德大雪山西黑冠长臂猿保护项目获得山水自然中心资助',
  },
  {
    time: '2016.8',
    text: '在永德大雪山保护区举办西黑冠长臂猿规范化巡护检测暨红外相机培训研讨会',
  },
  {
    time: '2016.9',
    text: '第一次开展公共筹款活动，完成筹款目标198,220元',
  },
  {
    time: '2016.12',
    text: '在盈江县长臂猿栖息地周边两所小学开展长臂猿保护主题游园宣传',
  },
  {
    time: '2017.1',
    text: '云山保护理事会迎来了两位重量级新成员：科普大咖张劲硕和长臂猿专家管振华',
  },
  {
    time: '2017.3',
    text: '获得阿拉善基金会劲草同行项目3年共30万资助',
  },
  {
    time: '2017.3',
    text: '参加劲草同行面向线下和线上公众的生物多样性嘉年华讲座和图片展',
  },
  {
    time: '2017.4-6',
    text: '完成了天行长臂猿全国范围野外种群数量和分布调查，同期完成了社区保护意识访问调查',
  },
  {
    time: '2017.5',
    text: '2016年年报出版',
  },
  {
    time: '2017.6',
    text: '加入桃花源社会公益保护地联盟，获得桃花源基金会资助开展社区保护地调研',
  },
  {
    time: '2017.7',
    text: '在永德芒果节期间与保护区和昆明动物博物馆合作开展公共生物多样性宣传',
  },
  {
    time: '2017.7-9',
    text: '云山保护参与9.9公益日众筹，筹款目标396200成功达成，最后的筹款总额是396282.11元，100%完成。其中来自网友的捐款是196099.75元，三棵树和腾讯的配捐一共是200182.36元，总捐款人数是4327人，有3773人参加了朋友发起的“一起捐”，个人一起捐的最高筹款额是27465.84元，最有号召力的个人一起捐吸引了235人。',
  },
  {
    time: '2017.9',
    text: '阎璐、李如雪带领桃花源基金会专家到盈江，与盈江县林业局局长以及分管保护的副县长见面，向他们介绍了社会公益型保护地的保护模式。',
  },
  {
    time: '2017.10',
    text: '国际长臂猿日活动：北京动物园和昆明动物园线下长臂猿科普互动活动',
  },
  {
    time: '2017.11',
    text: '阎璐、李如雪带领桃花源基金会的专家与盈江县林业局和铜壁关省级保护区的领导见面，并起草了一份《盈江县长臂猿栖息地委托管理框架协议》。',
  },
  {
    time: '2017.11',
    text: '与高黎贡山国家级自然保护区管护局签订了“天行长臂猿种群数量分布调查及保护实施方案”合作协议（三方协议，还包括西南林业大学）',
  },
  {
    time: '2018.3',
    text: '两位新成员陈镜羽、张文博加入云山保护',
  },
  {
    time: '2018.3',
    text: '向山水提交澜沧江保护基金永德大雪山西黑冠长臂猿保护项目结项报告',
  },
  {
    time: '2018.4',
    text: '长臂猿种群保护与管理国际研讨会',
  },
  {
    time: '2018.5',
    text: '保山高黎贡白眉长臂猿保护实施方案评审会在保山召开',
  },
  {
    time: '2018.6',
    text: '签订德宏高黎贡白眉长臂猿合作保护战略框架协议',
  },
  {
    time: '2018.8',
    text: '劲草嘉年华（大理站）图片展（古城文庙）',
  },
  {
    time: '2018.9',
    text: '云山保护参与9.9公益日众筹，筹款目标518000元成功达成，最后的筹款总额是672598.78元，100%完成。其中来自公众的捐款是309016.79元，爱心企业和腾讯的配捐一共是363581.99元，总捐款人数是7345人，有132人/团队发起了“一起捐”，最有号召力的个人一起捐吸引了372人。',
  },
  {
    time: '2018.10',
    text: '高黎贡山保护区、云山和中山大学去唐家河保护区白熊坪考察共建共管',
  },
  {
    time: '2018.10',
    text: '劲草生物多样性嘉年华大理大学分享会和图片展览',
  },
  {
    time: '2018.10',
    text: '全员参加亚洲灵长类大会，听专家的科研和保护报告',
  },
  {
    time: '2018.11',
    text: '张文博、陈镜羽参与腾冲分局天行长臂猿种群大调查',
  },
  {
    time: '2018.11',
    text: '陈镜羽、杨洵在腾冲与腾冲一中、腾冲分局举办“认识家乡的长臂猿”科普进校园活动',
  },
  {
    time: '2018.12',
    text: '张文博顾伯健普洱长臂猿及其他野生动物分布考察',
  },
  {
    time: '2019.1',
    text: '高黎贡山国家级自然保护区、云山保护、中山大学正式签订三方共建共管协议。',
  },
  {
    time: '2019.2-3',
    text: '保护宣传活动在盈江县的5个村寨和1所小学进行，预计影响了超过1000人',
  },
  {
    time: '2019.5-6',
    text: '科普进校园系列活动“六一游园会”在哀牢山和无量山附近7所小学举行',
  },
  {
    time: '2019.6-9',
    text: '云山保护第一届理事会换届选举会议召开，完成了机构名称变更、章程修订、理事和监事选举等重要工作。机构正式更名为“大理白族自治州云山生物多样性保护与研究中心”。',
  },
  {
    time: '2019.7-8',
    text: '云山参与或组织了共计三次自然科考营的策划与执行',
  },
  {
    time: '2019.7',
    text: '在阿拉善SEE基金会劲草合作管理基金的支持下，云山和海南智渔共同组织了一场在大理的人力资源管理工作坊，借此提升NGO伙伴人力资源管理水平。',
  },
  {
    time: '2019.9-10',
    text: '2019年国际长臂猿日系列活动开启，我们与10家动物园合作，带来线上X线下，城市X野外的系列科普活动。',
  },
  {
    time: '2019.11',
    text: '云端护猿基地开启了年度猿口大调查。七天的连续监听最终确定了板厂片区的长臂猿群体，我们也得以首次拍摄到新群的影像资料。',
  },
  {
    time: '2019.11-12',
    text: '盈江各村寨社区调查启动。调查范围覆盖支那乡、苏典乡目前有和曾经有长臂猿分布的村落，目前入户访谈数量超过100户',
  },
  {
    time: '2019.12',
    text: '盈江县苏典乡拉马河长臂猿栖息地情况调查启动。在铜壁关保护区和志愿者的配合下，我们在两个长臂猿家庭群的栖息地共设立并记录了25个植被样方的基础资料。',
  },
  {
    time: '2019.12',
    text: '盈江县苏典乡片区天行长臂猿社区保护交流会召开，我们邀请了铜壁关省级自然保护区、盈江县林草局、苏典乡人民政府、社区代表参会，一同讨论天行长臂猿的社区保护。',
  },
]

export default data;