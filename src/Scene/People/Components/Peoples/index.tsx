import * as React from 'react';
import './style.css';

const peoples = [
    {
        img: "https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1600719375722-CNDDVMJD0H5169PVHRKF/Chelsea.jpeg",
        name: "Jennifer Cochran",
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/f7f10b82-ee08-4904-8e9b-c4977d04d8ed/211022_NK_headshot1_edit.jpg",
        name: "Nikita Khlystov",
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1600719508542-DHJ9KYEHTFEG3WII4386/LouaiLabanieh.jpg",
        name: "Louai Labanieh",
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/0e0631d9-6241-4850-9da6-6051836f0c88/Caitlyn+Miller+4.jpg",
        name: "Caitlyn Miller",
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1da79441-cfd6-4bbd-9d98-acb757483cb8/Nicholas.jpg",
        name: "Nicholas Sarai",
    },
];

const People = (data: any) => {
    return (
        //     <div className="singleHouse">
        //     <a href="#" className="card">
        //       <div className="figure">
        //         <img src={data.data.img} alt="image" />
        //         {/* <div className="figCaption">
        //           <div>$1,550,000</div>
        //           <span className="icon-eye"> 200</span>
        //           <span className="icon-heart"> 54</span>
        //           <span className="icon-bubble"> 13</span>
        //         </div> */}
        //         <div className="figView"><span className="icon-eye" /></div>
        //         {/* <div className="figType">FOR SALE</div> */}
        //       </div>
        //       <h2>{data.data.name}</h2>
        //       <div className="cardAddress"><span className="icon-pointer" />
        //         Shanghai Xuhui District HuaShan Rd.
        //         </div>
        //       <ul className="cardFeat">
        //         <li><div className='cardFeat wechat'></div></li>
        //         <li><div className='cardFeat email'></div></li>
        //       </ul>
        //     </a>
        //   </div>
        <div className="singlePeople">
            <a href="#" className="Card">
                <div className="left">
                    <div className="img-box">
                        <div className="img">
                            <img src={data.data.img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="name">
                    <h2>{data.data.name}</h2>
                    </div>
                    <div className="desc">
                        <p>
                            <span>
                                博士生导师<br />教育部长江学者特聘教授<br />上海交通大学-博动医学影像联合实验室主任
                            </span>
                        </p>
                    </div>
                    {/* <div className="other-info">
                        <div className="title">
                            <i className="iconfont icon-faculty"></i>特聘教授
                        </div>
                        <div className="email">
                            <i className="iconfont icon-email"></i>sxtu@sjtu.edu.cn
                        </div>
                    </div> */}
                </div>
            </a>
        </div>
    )
}

const PeopleGallery = () => {
    return (
        <>
            {peoples.map((data, index) => {
                return (
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                        <People data={data} />
                    </div>
                );
            })}
        </>
    )
}

export default PeopleGallery;