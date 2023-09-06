import * as React from 'react';
import './style.css';
import { StaticImage } from 'gatsby-plugin-image'

const researchData: any[] = [{
    name: '实验室最新成果',
    address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://ciiic.sjtu.edu.cn/static/upload/image/20230705/1688525171375756.png'
}, {
    name: '实验室最新成果',
    address: ' 169 Warren St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://ciiic.sjtu.edu.cn/static/upload/image/20230618/1687093135162401.png'
}, {
    name: '实验室最新成果',
    address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'https://ciiic.sjtu.edu.cn/static/upload/image/20230626/1687791555578576.jpg'
}];

const ResearchGallery = () => {
    return (
        <div className="listProperty">
            <div className="row listPropertyContent">
                <h1 style={{ textAlign: "center" }}>研究方向</h1>
                
                <h2>全脑高分辨多分子一体成像；多模态跨尺度脑图谱；脑卒中精准诊断；AD早期预警及认知预测；脑肿瘤精准诊断；精神疾病影像引导精准调控；</h2>
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