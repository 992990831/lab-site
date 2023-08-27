import * as React from 'react';
import './style.css';
import { StaticImage } from 'gatsby-plugin-image'

// const peopleData = [
//     {
//         img: "Chelsea.jpeg",  //"https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1600719375722-CNDDVMJD0H5169PVHRKF/Chelsea.jpeg",
//         name: "Jennifer Cochran",
//     },
//     {
//         img: "211022_NK_headshot1_edit.jpg", //"https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/f7f10b82-ee08-4904-8e9b-c4977d04d8ed/211022_NK_headshot1_edit.jpg",
//         name: "Nikita Khlystov",
//     },
//     {
//         img: "LouaiLabanieh.jpg", //"https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1600719508542-DHJ9KYEHTFEG3WII4386/LouaiLabanieh.jpg",
//         name: "Louai Labanieh",
//     },
//     {
//         img: "Caitlyn+Miller+4.jpg", //"https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/0e0631d9-6241-4850-9da6-6051836f0c88/Caitlyn+Miller+4.jpg",
//         name: "Caitlyn Miller",
//     },
//     {
//         img: "Nicholas.jpg", //"https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1da79441-cfd6-4bbd-9d98-acb757483cb8/Nicholas.jpg",
//         name: "Nicholas Sarai",
//     },
// ];

const getPeoples = () => {
    let peoples = [];

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={1}>
            <div className="singlePeople">
                <a href="#" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage
                                    alt="team member"
                                    src={`./images/Chelsea.jpeg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>Jennifer Cochran</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士生导师<br />教育部长江学者特聘教授<br />上海交通大学-博动医学影像联合实验室主任
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={1}>
            <div className="singlePeople">
                <a href="#" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage
                                    alt="team member"
                                    src={`./images/211022_NK_headshot1_edit.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>Nikita Khlystov</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士生导师<br />教育部长江学者特聘教授<br />上海交通大学-博动医学影像联合实验室主任
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={1}>
            <div className="singlePeople">
                <a href="#" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage
                                    alt="team member"
                                    src={`./images/LouaiLabanieh.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>Louai Labanieh</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士生导师<br />教育部长江学者特聘教授<br />上海交通大学-博动医学影像联合实验室主任
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={1}>
            <div className="singlePeople">
                <a href="#" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage
                                    alt="team member"
                                    src={`./images/Caitlyn+Miller+4.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>Nicholas Sarai</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士生导师<br />教育部长江学者特聘教授<br />上海交通大学-博动医学影像联合实验室主任
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={1}>
            <div className="singlePeople">
                <a href="#" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage
                                    alt="team member"
                                    src={`./images/Nicholas.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>Caitlyn Miller</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士生导师<br />教育部长江学者特聘教授<br />上海交通大学-博动医学影像联合实验室主任
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );


    return peoples;
}

const PeopleGallery = () => {
    return (
        <>
            {
                getPeoples()
            }
            {/* StaticImage不支持函数参数作为输入 */}
            {/* {peoples.map((data, index) => {
                return (
                    
                );
            })} */}
        </>
    )
}

export default PeopleGallery;