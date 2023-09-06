import * as React from 'react';
import './style.css';
import SingelHouse from '../../../../Components/SingleHouse';  
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from 'gatsby-plugin-image'

// const houseData: any[] = [{
//   name: '自然科学研究院举办学科交叉研讨会',
//   address: '2022年01月12日 ',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'https://992990831.github.io/static/20220112_144308_975.jpg'
// }, {
//   name: '自然科学研究院举办学科交叉研讨会',
//   address: '2022年01月12日 ',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'https://992990831.github.io/static/20220112_144123_596.jpg'
// }, {
//   name: '自然科学研究院举办学科交叉研讨会',
//   address: '2022年01月12日 ',
//   beds: 3,
//   toilets: 2,
//   square: 20,
//   img: 'https://992990831.github.io/static/20220112_144412_474.jpg'
// }];

class ListProperty extends React.Component<{}, {}> {
  render() {
    return (
      <div className="listProperty">
        {/* <div className="row listPropertyHeader">
          <h3>近期学术成果</h3>
          <h5>Engineering Proteins to Modulate the Immune System</h5>
        </div> */}
        <div className="row listPropertyContent">
          <h1 style={{textAlign:"center"}}>团队成员</h1>
        {/* https://www.npmjs.com/package/react-responsive-carousel */}
        <Carousel showThumbs={false} interval={2000} infiniteLoop={true} autoPlay={true} showStatus={false} className='slide-center'>
                <div>
                <a href="/people/" >
                  <StaticImage
                      alt="team member"
                      src={`./images/1693103660202.png`}
                  />
                </a>
                
                    {/* <div style={{backgroundImage:"url(https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/3d4b28dd-e098-4526-ae40-a8de58b60060/KBBQ_labdinner2022.jpg)"}}></div> */}
                    {/* <img src="./images/KBBQ_labdinner2022.jpg" /> */}
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <a href="/people/" >
                    <StaticImage
                      alt="team member"
                      src={`./images/64f32f97aca34f8e0daadc111693659031367.webp`}
                    />
                  </a>
                    
                    {/* <img src="./images/grouppic_08242022.jpg" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <a href="/people/" >
                    <StaticImage
                      alt="team member"
                      src={`./images/193126014.png`}
                    />
                  </a>
                  
                    {/* <img src="./images/Lab+2+copy.jpg" /> */}
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <div style={{height:"3vh"}}></div>
            <h1 style={{textAlign:"center"}}>新闻</h1>
            {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="singleHouse">
                <a href="javascript:void(0)" className="card">
                    <div className="figure">
                      <StaticImage
                          alt="team member"
                          src={`./images/20220112_144308_975.jpg`}
                      />
                    </div>
                    <h2>{"自然科学研究院举办学科交叉研讨会"}</h2>
                    <div className="cardAddress"><span className="icon-pointer" />
                        {"2022年01月12日"}
                    </div>     
                    </a>
                </div>
            </div> */}
             <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="singleHouse">
                <a href="/press" className="card">
                    <StaticImage
                        alt="team member" className='news'
                        src={`../../../News/images/20230619_151813_772.webp`}
                    />
                    <h2 style={{whiteSpace:"pre-wrap"}}>{"上海交大李瑶团队在国际磁共振顶级会议ISMRM上获W. S. Moore Award"}</h2>
                    <div className="cardAddress"><span className="icon-pointer" />
                        {"2023年06月21日"}
                    </div>     
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="singleHouse">
                <a href="/press" className="card">
                  <StaticImage className='news'
                    alt="team member"
                    src={`../../../News/images/202012252229031997753.webp`}
                  />
                  <h2 style={{whiteSpace:"pre-wrap"}}>{"李瑶教授课题组在急性脑卒中全脑代谢成像领域取得成果以封面文章发表于《Brain》"}</h2>
                  <div className="cardAddress"><span className="icon-pointer" />
                    {"2020年12月15日"}
                  </div>
                </a>
              </div>
            </div>
            
          {/* {houseData.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default ListProperty;