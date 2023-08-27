import * as React from 'react';
import './style.css';
import { StaticImage } from 'gatsby-plugin-image'

const newsData: any[] = [{
    name: 'Modern Residence in New York',
    address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1687189998949-VC62OPCLDB7HSHAJIA08/PXL_20230617_222750469_Original.jpg?format=500w'
}, {
    name: 'Hauntingly Beautiful Estate',
    address: ' 169 Warren St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1692121946048-KW67TBGBI3WU2QN2HFCN/Nicholas_weclomepost.jpeg?format=500w'
}, {
    name: 'Modern Residence in New York',
    address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1690226858902-PNHGIVPTMPKG96RUTR2W/IMG_5675.jpg?format=500w'
}];

const getNews = () => {
    const allNews = [];
    allNews.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singleHouse">
            <a href="#" className="card">
                <StaticImage
                    alt="team member"
                    src={`./images/PXL_20230617_222750469_Original.jpg`}
                />
                <h2>{"Modern Residence in New York"}</h2>
                <div className="cardAddress"><span className="icon-pointer" />
                    {"39 Remsen St, Brooklyn, NY 11201, USA"}
                </div>     
                </a>
            </div>
        </div>

        // <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        //     <div className="singleHouse">
        //         <a href="#" className="card">
        //             <div className="figure">
        //                 <StaticImage
        //                     alt="team member"
        //                     src={`./images/PXL_20230617_222750469_Original.jpg`}
        //                 />
        //                 <div className="figCaption">
        //                     <div>$1,550,000</div>
        //                     <span className="icon-eye"> 200</span>
        //                     <span className="icon-heart"> 54</span>
        //                     <span className="icon-bubble"> 13</span>
        //                 </div>
        //                 <div className="figView"><span className="icon-eye" /></div>
        //                 {/* <div className="figType">FOR SALE</div> */}
        //             </div>
        //             <h2>{"Modern Residence in New York"}</h2>
        //             <div className="cardAddress"><span className="icon-pointer" />
        //                 {"39 Remsen St, Brooklyn, NY 11201, USA"}
        //             </div>                  
        //         </a>
        //     </div>
        // </div>
    );

    allNews.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singleHouse">
            <a href="#" className="card">
                <StaticImage
                    alt="team member"
                    src={`./images/Nicholas_weclomepost.jpeg`}
                />
                <h2>{"Modern Residence in New York"}</h2>
                <div className="cardAddress"><span className="icon-pointer" />
                    {"39 Remsen St, Brooklyn, NY 11201, USA"}
                </div>     
                </a>
            </div>
        </div>
    );

    allNews.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singleHouse">
            <a href="#" className="card">
                <StaticImage
                    alt="team member"
                    src={`./images/IMG_5675.jpg`}
                />
                <h2>{"Modern Residence in New York"}</h2>
                <div className="cardAddress"><span className="icon-pointer" />
                    {"39 Remsen St, Brooklyn, NY 11201, USA"}
                </div>     
                </a>
            </div>
        </div>
    );


    return allNews;
}

const NewsGallery = () => {
    return (
        <div className="listProperty">
            <div className="row listPropertyContent">
                <h1 style={{ textAlign: "center" }}>News</h1>
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