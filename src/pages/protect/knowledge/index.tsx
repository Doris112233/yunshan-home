import React from 'react';
import './index.less';

// Figma asset URLs (replace with local assets if available)
import data from '../../../data/knowledge';

const KnowledgePage = () => {
  return (
    <div className="article-container">
      <section className="knowledge-header">
        <div className="knowledge-header-title">
          <h1>关于长臂猿</h1>
        </div>
      </section>

      <section className="knowledge-qa">
        <div className="knowledge-qa-row">
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>长臂猿是什么动物？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                长臂猿不是猴子，它们和猩猩家族的四种类一起组成类人猿，是和人类亲缘关系最近的灵长类动物；
              </p>
              <p>长臂猿的体型较其它类人猿要小得多，所以它们也被称作"小猿"。</p>
            </div>
          </div>
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>世界上有多少种长臂猿？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                自然科学界目前已命名了20种长臂猿，中国有7种。长臂猿是类人猿中种类和数量最多的族群。
              </p>
              <p>现存的长臂猿家族又分4属，它们之间有着明显的差别。</p>
            </div>
          </div>
        </div>
        <div
          className="knowledge-qa-img knowledge-qa-img-main"
          style={{ backgroundImage: `url('${data.k1}')` }}
        />
        <div className="knowledge-qa-row">
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>长臂猿吃什么？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                长臂猿的主要食物是成熟的果实，也吃一些嫩芽、树叶、花和昆虫。值得注意的是，科学家曾经拍摄到中国的西黑冠长臂猿吃鼯鼠的画面。
              </p>
            </div>
          </div>
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>长臂猿的家庭结构是什么样的？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>一群长臂猿通常就是一个家庭，有父母和它们的孩子组成；</p>
              <p>
                一个长臂猿家庭通常有2-8位成员，一般活动范围在20-100公顷，偶尔也会超过100公顷。每一家长臂猿都会保卫自己的领地不让其它长臂猿群侵入。
              </p>
            </div>
          </div>
        </div>
        <div className="knowledge-qa-row">
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>长臂猿生活在哪里？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                长臂猿主要分布在南亚和东南亚的大陆及岛屿上的热带或亚热带森林中。
              </p>
              <p>长臂猿一生都生活在树上，几乎从不下地活动。</p>
            </div>
          </div>
          <div
            className="knowledge-qa-img knowledge-qa-img-map-cn"
            style={{ backgroundImage: `url('${data.k2}')` }}
          />
        </div>
        <div className="knowledge-qa-row">
          <div
            className="knowledge-qa-img knowledge-qa-img-map-world"
            style={{ backgroundImage: `url('${data.k3}')` }}
          />
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>长臂猿的智力有多高？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                长臂猿的智力能力还没有被科学家们深入地研究过，但是它们可以从镜子中认出自己并表现出典型的害羞表情，这种行为只有人类和其它猿类拥有；
              </p>
              <p>
                长臂猿还具有非常强的记忆和规划能力，它们的脑袋里仿佛有一张食物地图，能精确地在不同果实成熟时到达目标树上取食。
              </p>
            </div>
          </div>
        </div>
        <div className="knowledge-qa-row">
          <div
            className="knowledge-qa-img knowledge-qa-img-move"
            style={{ backgroundImage: `url('${data.k4}')` }}
          />
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>长臂猿怎么移动？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>长臂猿大多数情况下都用它们的双臂在树冠上"臂行"；</p>
              <p>
                在猿类中，长臂猿的双臂最为发达，当它们在树冠中快速移动时，几乎是在飞行；
              </p>
              <p>长臂猿也可以在树枝或地面上用双足直立行走。</p>
            </div>
          </div>
        </div>
        <div className="knowledge-qa-row">
          <div
            className="knowledge-qa-img knowledge-qa-img-call"
            style={{ backgroundImage: `url('${data.k5}')` }}
          />
          <div className="knowledge-qa-block">
            <div className="knowledge-qa-title">
              <h2>长臂猿为什么会唱歌？</h2>
            </div>
            <div className="knowledge-qa-content">
              <p>
                几乎每天清晨，长臂猿都会发出非常嘹亮动听的鸣叫，这些歌声在1-2公里之外都能听得到；
              </p>
              <p>
                歌唱在哺乳动物中是很少见的，而长臂猿的歌声又是陆生哺乳动物中最复杂最动听的；
              </p>
              <p>一场歌唱通常会持续10-30分钟；</p>
              <p>长臂猿的歌声中包含了"歌手"的种类、性别和地位等信息；</p>
              <p>
                长臂猿鸣唱是为了向同类宣告领域范围和寻找配偶；已经组成家庭的长臂猿夫妻常常一起进行精彩的二重唱，这可以加深彼此的感情，稳固家庭关系；
              </p>
              <p>长臂猿的鸣唱可能和人类的歌唱有着相同的遗传起源。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="knowledge-threats-protect">
        <div className="knowledge-threats-card">
          <div className="knowledge-threats-title">
            <h2>什么是威胁长臂猿的生存和繁衍</h2>
          </div>
          <div className="knowledge-threats-content">
            <p>
              人类对森林的侵占使长臂猿的栖息地大面积消失，它们因此失去了赖以生存的家园；
            </p>
            <p>人类的偷猎；</p>
            <p>
              适合长臂猿生活的森林破碎成孤岛状，迁出的长臂猿很难找到合适的家庭群，限制了种群的扩大；
            </p>
            <p>
              群体间距离远，致使基因交流受到阻隔，造成后代生存力减弱，繁殖能力降低；
            </p>
            <p>成年期较长（7-8年），繁殖间隔长，繁殖率低；</p>
            <p>长期被忽视，研究和保护力度低。</p>
          </div>
        </div>
        <div className="knowledge-protect-card">
          <div className="knowledge-protect-title">
            <h2>为什么要保护长臂猿</h2>
          </div>
          <div className="knowledge-protect-content">
            <p>
              长臂猿是森林里的旗舰物种，是一个健康森林的标志，它们极度依赖于原始森林所提供的丰富食物，加之鸣叫声容易被监测到，长臂猿可作为森林状况恶化的预警——长臂猿的消失即意味着森林不再健康；
            </p>
            <p>
              长臂猿生存的森林生态系统是我国生物多样性最为丰富的地区，保护长臂猿就像撑开了一把保护伞，间接保护了生活在同一区域的其它生物；
            </p>
            <p>
              长臂猿是人类的近亲，对长臂猿生态、行为、社会结构、意识等方面的研究是通向人类自身的钥匙；
            </p>
            <p>
              长臂猿是中国和人类亲缘关系最近的动物，在传统文化中具有举足轻重的地位。
            </p>
          </div>
        </div>
      </section>

      <section className="knowledge-cta">
        <div className="knowledge-cta-title">
          <h2>从我做起，保护长臂猿</h2>
        </div>
        <div className="knowledge-cta-content">
          <p>关注"云山保护"，了解长臂猿，了解关于长臂猿的保护行动；</p>
          <p>成为志愿者，参与长臂猿保护行动，并向身边的朋友宣传长臂猿保护；</p>
          <p>拒绝消费野生动物及野生动物制品；</p>
          <p>
            拒绝购买来自原始森林的红木、硬木或藤本制品，包括家具、木制工艺品等；
          </p>
          <p>
            发现有人买卖、贩运长臂猿或者其他野生动物制品，及时向林业公安部门报告。
          </p>
        </div>
      </section>
    </div>
  );
};

export default KnowledgePage;
