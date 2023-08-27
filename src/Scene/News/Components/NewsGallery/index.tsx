import * as React from 'react';
import './style.css';

const newsData: any[] = [{
    name: 'Modern Residence in New York',
    address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1687189998949-VC62OPCLDB7HSHAJIA08/PXL_20230617_222750469_Original.jpg'
}, {
    name: 'Hauntingly Beautiful Estate',
    address: ' 169 Warren St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1692121946048-KW67TBGBI3WU2QN2HFCN/Nicholas_weclomepost.jpeg'
}, {
    name: 'Modern Residence in New York',
    address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1690226858902-PNHGIVPTMPKG96RUTR2W/IMG_5675.jpg?format=500w'
}];

const SingleNews = (data: any) => {
    return (
        // <div className="singleHouse">
        //     <a href="#" className="card">
        //         <div className="figure">
        //             <img src={data.data.img} alt="image" />
        //             {/* <div className="figCaption">
        //           <div>$1,550,000</div>
        //           <span className="icon-eye"> 200</span>
        //           <span className="icon-heart"> 54</span>
        //           <span className="icon-bubble"> 13</span>
        //         </div> */}
        //             <div className="figView"><span className="icon-eye" /></div>
        //             {/* <div className="figType">FOR SALE</div> */}
        //         </div>
        //         <h2>{data.data.name}</h2>
        //         <div className="cardAddress"><span className="icon-pointer" />
        //             Shanghai Xuhui District HuaShan Rd.
        //         </div>
        //     </a>
        // </div>
        <div className="singleHouse">
            <a href="#" className="card">
                <div className="figure">
                    <img src={data.data.img} alt="image" />
                    <div className="figCaption">
                        <div>$1,550,000</div>
                        <span className="icon-eye"> 200</span>
                        <span className="icon-heart"> 54</span>
                        <span className="icon-bubble"> 13</span>
                    </div>
                    <div className="figView"><span className="icon-eye" /></div>
                    {/* <div className="figType">FOR SALE</div> */}
                </div>
                <h2>{data.data.name}</h2>
                <div className="cardAddress"><span className="icon-pointer" />
                    {data.data.address}
                </div>
                {/* <ul className="cardFeat">
            <li><span className="fa fa-moon-o" /> {this.props.data.beds}</li>
            <li><span className="icon-drop" /> {this.props.data.toilets}</li>
            <li><span className="icon-frame" /> {this.props.data.square} Sq Ft</li>
          </ul> */}
            </a>
        </div>

    )
}

const NewsGallery = () => {
    return (
        <div className="listProperty">
            <div className="row listPropertyContent">
                <h1 style={{ textAlign: "center" }}>News</h1>
                {newsData.map((data, index) => {
                    return (
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                            <SingleNews data={data} />
                        </div>
                    );
                })}
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