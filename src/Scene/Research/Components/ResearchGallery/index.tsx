import * as React from 'react';
import './style.css';
import { StaticImage } from 'gatsby-plugin-image'

const ResearchGallery = () => {
    return (
        <div className="listProperty">
            <div className="row listPropertyContent">
                <h1 style={{ textAlign: "center" }}>研究方向</h1>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="singleResearch">
                        <div className="content">
                            <StaticImage className='news'
                                alt="研究方向"
                                src={`../../images/全脑高分辨多分子一体成像.webp`}
                            />
                            <h2>{"全脑高分辨多分子一体成像"}</h2>
                        </div>
                    </div>
                </div>      
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="singleResearch">
                        <div className="content">
                            <StaticImage className='news'
                                alt="研究方向"
                                src={`../../images/多模态跨尺度脑图谱1.webp`}
                            />
                            <h2>{"多模态跨尺度脑图谱"}</h2>
                        </div>
                    </div>
                </div>       
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="singleResearch">
                        <div className="content">
                            <StaticImage className='news'
                                alt="研究方向"
                                src={`../../images/0375069256d144d4b066ed312d3c23de.webp`}
                            />
                            <h2>{"脑卒中精准诊断"}</h2>
                        </div>
                    </div>
                </div>     
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="singleResearch">
                        <div className="content">
                            <StaticImage className='news'
                                alt="研究方向"
                                src={`../../images/A1421217082_small.webp`}
                            />
                            <h2>{"AD早期预警及认知预测"}</h2>
                        </div>
                    </div>
                </div>  
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="singleResearch">
                        <div className="content">
                            <StaticImage className='news'
                                alt="研究方向"
                                src={`../../images/549b1b3e03da484f88ec9158a7fa7d12.webp`}
                            />
                            <h2>{"脑肿瘤精准诊断"}</h2>
                        </div>
                    </div>
                </div>   
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="singleResearch">
                        <div className="content">
                            <StaticImage className='news'
                                alt="研究方向"
                                src={`../../images/精神疾病影像引导精准调控.webp`}
                            />
                            <h2>{"精神疾病影像引导精准调控"}</h2>
                        </div>
                    </div>
                </div>                
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

export default ResearchGallery;