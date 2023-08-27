import * as React from 'react';
import './style.css';
import { StaticImage } from 'gatsby-plugin-image'

const publicationData: any[] = [{
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

const SinglePublication = (data: any) => {
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
        <>
            <div style={{ padding: "17px" }}><div ><hr style={{ backgroundColor: "black", height: "1px" }} /></div></div>
            <div className="publication">
                <div className="left">
                    <StaticImage
                        alt="Publication"
                        src="./images/Bri+Figure.jpeg"
                    />
                </div>
                <div className='right'>
                    <div>
                        <h4>An engineered interleukin-11 decoy cytokine inhibits receptor signaling and proliferation in lung adenocarcinoma</h4>
                    </div>
                    <div>
                        <p style={{ whiteSpace: "pre-wrap" }}>in <em>Bioengineering &amp; Translational Medicine</em> on July 18, 2023</p>
                    </div>
                    <div>
                        <p style={{ whiteSpace: "pre-wrap" }}>by <strong>Brianna J. McIntosh, Griffin G. Hartmann, Sean A. Yamada-Hunter, Phillip Liu, Camille F. Williams, Julien Sage Jennifer R. Cochran</strong></p>
                    </div>
                    <div>
                    <p style={{ whiteSpace: "pre-wrap" }}>The cytokine interleukin (IL)-11 has been shown to play a role in promoting fibrosis and cancer, including lung adenocarcinoma, garnering interest as an attractive target for therapeutic intervention. We used combinatorial methods to engineer an IL-11 variant that binds with higher affinity to the IL-11 receptor and stimulates enhanced receptor-mediated cell signaling. Introduction of two additional point mutations ablates IL-11 ligand/receptor association with the gp130 coreceptor signaling complex, resulting in a high-affinity receptor antagonist. Unlike wild-type IL-11, this engineered variant potently blocks IL-11-mediated cell signaling and slows tumor growth in a mouse model of lung cancer. Our approach highlights a strategy where native ligands can be engineered and exploited to create potent receptor antagonists.</p>
                    </div>
                    <a style={{textDecoration:"none"}} href="https://doi.org/10.1002/btm2.10573">Read more</a>
                </div>
            </div>
        </>

    )
}

const PublicationGallery = () => {
    return (
        <div className="listProperty">
            <div className="row listPropertyContent">
                <h1 style={{ textAlign: "center" }}>发表论文</h1>
                {publicationData.map((data, index) => {
                    return (
                        <div className="" key={index}>
                            <SinglePublication data={data} />
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

export default PublicationGallery;