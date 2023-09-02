import * as React from 'react';
import './style.css';
import { StaticImage } from 'gatsby-plugin-image'

// const newsData: any[] = [{
//     name: 'Modern Residence in New York',
//     address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
//     beds: 3,
//     toilets: 2,
//     square: 20,
//     img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1687189998949-VC62OPCLDB7HSHAJIA08/PXL_20230617_222750469_Original.jpg?format=500w'
// }, {
//     name: 'Hauntingly Beautiful Estate',
//     address: ' 169 Warren St, Brooklyn, NY 11201, USA',
//     beds: 3,
//     toilets: 2,
//     square: 20,
//     img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1692121946048-KW67TBGBI3WU2QN2HFCN/Nicholas_weclomepost.jpeg?format=500w'
// }, {
//     name: 'Modern Residence in New York',
//     address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
//     beds: 3,
//     toilets: 2,
//     square: 20,
//     img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1690226858902-PNHGIVPTMPKG96RUTR2W/IMG_5675.jpg?format=500w'
// }];

const getNews = () => {
    return(
        <>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="singleHouse">
                <a href="/press" className="card">
                    <StaticImage
                        alt="team member"
                        src={`./images/20220112_144308_975_1.jpg`}
                    />
                    <h2>{"自然科学研究院举办学科交叉研讨会"}</h2>
                    <div className="cardAddress"><span className="icon-pointer" />
                        {"2022年01月12日"}
                    </div>     
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="singleHouse">
                <a href="/press" className="card">
                    <StaticImage
                        alt="team member"
                        src={`./images/20220112_144123_596_1.jpg`}
                    />
                    <h2>{"自然科学研究院举办学科交叉研讨会"}</h2>
                    <div className="cardAddress"><span className="icon-pointer" />
                        {"2022年01月12日"}
                    </div>     
                    </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="singleHouse">
                <a href="/press" className="card">
                    <StaticImage
                        alt="team member"
                        src={`./images/20220112_144412_474_1.jpg`}
                    />
                    <h2>{"自然科学研究院举办学科交叉研讨会"}</h2>
                    <div className="cardAddress"><span className="icon-pointer" />
                        {"2022年01月12日"}
                    </div>     
                    </a>
                </div>
            </div>
        </>
    )
}

const NewsGallery = () => {
    return (
        <div className="listProperty">
            <div className="row listPropertyContent">
                <h1 style={{ textAlign: "center" }}>新闻</h1>
                {getNews()}
                {/* {newsData.map((data, index) => {
                    return (
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                            <SingleNews data={data} />
                        </div>
                    );
                })} */}
            </div>
        </div>
        // <>
        //     {news.map((data, index) => {
        //         return (
        //             <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
        //                 <SingleNews data={data} />
        //             </div>
        //         );
        //     })}
        // </>
    )
}

export default NewsGallery;