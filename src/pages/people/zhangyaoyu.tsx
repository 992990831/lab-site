import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../../Scene/People/Components/Header"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header></Header>
            <div style={{ backgroundColor: "#f6f7f8", marginTop: "-80vh", height: "200vh", position: "relative" }}>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12">
                    <div className="singlePeople" style={{ height: "auto" }}>
                        <a href="#" className="big-profile-image">
                            <div className="left tutor">
                                <div className="img-box">
                                    <div className="img">
                                        <StaticImage style={{ display: "contents" }}
                                            alt="team member"
                                            src={`../../scene/people/components/peoples/images/profile/17_10_zhangyaoyu.jpg`}
                                        />
                                        {/* <img src={data.data.img} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="right full-width">
                                <div className="name" style={{ marginTop: "5px" }}>
                                    <h2>张垚煜</h2>
                                </div>
                                <div className="desc">
                                    <p>
                                        <span style={{ fontSize: "15px" }}>
                                        <p style={{textAlign:"left"}}>
                                            助理研究员。<span>2013</span>年于美国凯斯西储大学获生物医学工程学士，2020年于北京大学获整合生命科学（物理学）博士，同年加入上海交通大学生物医学工程学院。研究工作聚焦包括脑血流灌注成像、脑氧代谢成像、脑功能成像、脑波谱成像等多模态磁共振成像技术在脑疾病中的临床应用与转化。<span></span> 
                                        </p>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="ti-bg">教育背景</div>
                    <div className="people-detail-text">
                        <p style={{textAlign:"left", marginTop:"0px", marginBottom:"0px"}}>
                            2015-2020，北京大学，博士
                        </p>
                        <p style={{textAlign:"left", marginTop:"0px", marginBottom:"0px"}}>
                            <span>2009-2013，美国凯斯西储大学，学士</span> 
                        </p>
                    </div>
                    <div className="ti-bg">工作经历</div>
                    <div className="people-detail-text">
                        <p style={{textAlign:"left", marginTop:"0px", marginBottom:"0px"}}>
                            2020-今，上海交通大学，助理研究员
                        </p>
                        <p style={{textAlign:"left", marginTop:"0px", marginBottom:"0px"}}>
                            <span>2013-2015，比利时Materialise公司，应用工程师</span> 
                        </p>
                    </div>
                    <div className="ti-bg">研究方向</div>
                    <div className="people-detail-text">功能磁共振成像（Functional MRI）、脑血流灌注成像（CBF）、脑氧代谢成像（CMRO2）、脑波谱成像（MRSI）、同步一体PET/MR、阿尔兹海默症（AD）</div>

                    <div className="ti-bg">代表性论文专著</div>
                    <div className="people-detail-text">
                    <div>
                        <p>
                            1.&nbsp; Zhang M#, Guan Z#, <strong>Zhang Y#</strong>, Sun W, Li W, Hu J, Li B, Ye G, Meng H, Huang X, Lin X, Wang J, Liu J, Li B*, Li Y*. Disrupted coupling between salience network segregation and glucose metabolism is associated with cognitive decline in Alzheimer's disease-A simultaneous resting-state FDG-PET/fMRI study. <em>Neuroimage Clin</em>. 2022;34:102977.
                        </p>
                        <p>
                            2.&nbsp; Zhang M#, Sun W#, Guan Z, Hu J, Li B, Ye G, Meng H, Huang X, Lin X, Wang J, Liu J, Li B*, <strong>Zhang Y*</strong>, Li Y. Simultaneous PET/fMRI detects distinctive alterations in functional connectivity and glucose metabolism of precuneus subregions in Alzheimer's disease. <em>Front Aging Neurosci.</em> 2021;13:737002.
                        </p>
                        <p>
                        3.&nbsp;&nbsp;<strong>Zhang Y#</strong>, Du W#, Yin Y, Li H, Liu Z, Yang Y, Han Y*, Gao JH*. Impaired cerebral vascular and metabolic responses to parametric N-back tasks in subjective cognitive decline. <em>J Cereb Blood Flow Metab.</em> <span>2021;41(10):2743-55</span>.&nbsp;<br />
                        </p>
                        <p>
                        4.&nbsp;&nbsp;<strong>Zhang Y</strong>, Yin Y, Li H, Gao JH. Measurement of CMRO2 and its relationship with CBF in hypoxia with an extended calibrated BOLD method. <em>J Cereb Blood Flow Metab.</em> 2020;40(10):2066-80.<br />
                        </p>
                        <p>
                        5.&nbsp; Yin Y,&nbsp;<strong>Zhang Y</strong>, Gao JH. Dynamic measurement of oxygen extraction fraction using a multiecho asymmetric spin echo (MASE) pulse sequence. <em>Magn Reson Med.</em> 2018;80(3):1118-24.
                        </p>
                    </div>
                    </div>

                    <div className="ti-bg">软件版权登记及专利</div>
                    <div className="people-detail-text">
                        <div>一种低氧环境下动态测量氧代谢率的方法。发明人：高家红，<b>张垚煜。</b>专利号：201910623492.2。</div>
                    </div>

                    <div className="ti-bg">联系方式</div>
                    <p style={{marginLeft:"15px"}}>邮箱地址：yaoyu_zhang@sjtu.edu.cn</p>
                    <p style={{marginLeft:"15px"}}>办公地址：徐汇校区教三楼南323</p>
                </div>
            </div>
        </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>