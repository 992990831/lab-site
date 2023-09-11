import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../../Scene/People/Components/Header"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header></Header>
            <div style={{ backgroundColor: "#f6f7f8", marginTop: "-80vh", height: "300vh", position: "relative" }}>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12">
                    <div className="singlePeople" style={{ height: "auto" }}>
                        <a href="#" className="big-profile-image">
                            <div className="left tutor">
                                <div className="img-box">
                                    <div className="img">
                                        <StaticImage style={{ display: "contents" }} className='turtor-profile'
                                            alt="team member"
                                            src={`../../scene/people/components/peoples/images/profile/2019-04-24-11-52-06-651326.png`}
                                        />
                                        {/* <img src={data.data.img} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="right full-width">
                                <div className="name" style={{ marginTop: "5px" }}>
                                    <h2>李瑶</h2>
                                </div>
                                <div className="desc">
                                    <p>
                                        <span style={{ fontSize: "15px" }}>
                                            <b>博士</b><br /> <b>上海交通大学生物医学工程学院，教授，博士生导师, 院长助理。</b>李瑶博士于2002年获得上海交通大学电子与信息工程本科学位，2008年在美国纽约州立大学石溪分校获得电子与计算机工程博士学位，2008年至2010年于美国石溪医学研究中心任高级研究员。2010年加入上海交通大学生物医学工程学院。先后获得国家自然科学基金委员会、科技部、教育部、上海市科委和上海交通大学的多项基金支持，并在国外重要学术期刊如《Science》,《Brain》,《Magnetic Resonance in Medicine》等发表100余篇学术论文，他引超千次。研究工作获得2021年国际医学与生物学工程学会年会(EMBC)最佳论文奖(Best Paper Award, First place)；在2019-2021年国际磁共振学术年会(ISMRM)上连续获得13项大会优秀论文奖；获得2018年上海市医学会精神医学专科学术年会优秀论文一等奖，2019 、2020年中华医学会第十七、十八次全国精神医学大会优秀论文奖。获得国家自然科学基金、科技部、教育部、上海市科委和上海交通大学的多项基金支持，授权发明专利多项。现任BMC Neuroscience杂志副主编，美国电气和电子工程师协会高级会员(Senior Member)，提名IEEE EMBS国际生物医学工程学会行政委员会委员(2020)，国际医学磁共振学会(ISMRM)会员，人类脑成像组织(OHBM)会员, IEEE EMBC Shanghai分会秘书。获得上海交通大学“晨星学者”奖励计划，瑞金医院“广慈学者”双聘教授等。
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="ti-bg">研究方向</div>
                    <div className="people-detail-text">高分辨率磁共振波谱成像、深度学习及多模态磁共振脑影像、新型脑成像技术在神经<span>/</span>精神系统疾病中的转化研究</div>
                    <div className="ti-bg">科研项目</div>
                    <div className="people-detail-text">1.<span> </span>上海市科委“基础研究特区计划”项目，&nbsp; 无创解密人脑分子代谢指纹， 2021年11月-2026年10月，1000万，课题负责人<br />
                        2.<span> </span>国家自然基金面上项目，基于全脑高分辨率磁共振波谱成像技术的强迫症患者神经代谢异常研究，2019/1-2022/12，56万，课题负责人<br />
                        3.<span> </span>上海交通大学“医工交叉基金”重点项目，强迫症决策信心神经网络的功能与代谢耦合研究，2021/1-2023/12，100万，课题负责人<br />
                        4.<span> </span>上海交通大学“重点前瞻布局基金”, 高分辨率人脑结构、功能、代谢快速一体化成像技术研究，2020/01-2021/12，100万，课题负责人<br />
                        5.<span> </span>上海张江国家自主创新示范区专项发展资金重大项目，"中国人脑分子与功能图谱" 项目，2019/11-2020/12，95万，课题负责人<br />
                    </div>
                    <div className="ti-bg">代表性论文专著</div>
                    <div className="people-detail-text">
                        <div><p style={{marginLeft:"18.0pt", textAlign:"justify",textIndent:"-18.0pt"}}>
                            <span>
                            </span></p><p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                1.&nbsp;Zhang M, Guan Z, Zhang Y, Sun W, Li W, Hu J, Li B, Ye G, Meng H, Huang X, Lin X, Wang J, Liu J, Li B, <b>Li Y</b><b>*</b>, Disrupted coupling between salience network segregation and glucose metabolism is associated with cognitive decline in Alzheimer's disease - A simultaneous resting-state FDG-PET/fMRI study, <i>NeuroImage: Clinical,</i>&nbsp;34: 102977, 2022.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                2.&nbsp;Li W, Xu J, Xiang Q, Zhuo K, Zhang Y, Liu D, <b>Li Y*</b>, Neurometabolic and functional changes of default-mode network relate to clinical recovery in first-episode psychosis patients: A longitudinal <sup>1</sup>H-MRS and fMRI study, <i>NeuroImage: Clinical</i>, 34: 102970, 2022.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                3.&nbsp;Wang T, Hu Y, Wang D, Liu J, Sun J, Wei C, Dai H, <b>Li Y</b><b>*</b>, Arcuate fasciculus subsegment impairments distinctly associated with memory and language deficits in acute mild traumatic brain injury patients, <i>Journal of Neurotrauma</i>, 38(23): 3279-87, 2021.&nbsp;
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                4.&nbsp;Lu J, Mei Q, Hou X, Manaenko A, Zhou L, Liebeskind D, Zhang J, <b>Li Y</b><b>*</b>, Hu Q, Imaging acute stroke: from one size fits all to biomarkers, <i>Frontiers in Neurology</i>, 12: 697779, 2021.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                5.&nbsp;Ye Q, Zhang Z, Sun W, Fan Q, <b>Li Y*</b>, Disrupted functional connectivity of precuneus subregions in obsessive-compulsive disorder, <i>NeuroImage: Clinical </i>31: 102720, 2021
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                6.&nbsp;Li Y, Xiong J, Guo R, Zhao Y,<b>&nbsp;Li Y</b>, Liang Z, Improved estimation of myelin water fractions with learned parameter distributions, <i>Magnetic Resonance in Medicine</i>, 86(5): 2795-2809, 2021.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                7.&nbsp;Wang D, Zhuo K, Sun Y, Xiang Q, Guo X, Wang J, Xu Y, Liu D*, <b>Li Y*</b>, Middle temporal corpus callosumimpairment as a predictor of eight-week treatment outcome of drug-naïve first-episode psychosis patients: A pilot longitudinal study, <i>Schizophrenia Research</i>&nbsp;232: 95-97, 2021.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                8.&nbsp;Zheng Y, Wang D, Ye Q, Zou F,<b>&nbsp;Li Y*</b>, Kwok S, Diffusion property and functional connectivity of superior longitudinal fasciculus underpin human metacognition, <i>Neuropsychologia</i>&nbsp;156(107847), 2021.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                9.&nbsp;Meng Z, Guo R, Li Y, Guan Y, Wang T, Zhao Y, Sutton B, <b>Li Y</b>&nbsp;and Liang Z-P, Accelerating T2 mapping of the brain by integrating deep learning priors with low‐rank and sparse modeling, <i>Magnetic Resonance in Medicine</i>, 85(3):1455-1467, 2021.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                10.&nbsp;Guo R, Zhao Y, Li Y,<b>&nbsp;</b>Wang&nbsp;T, <b>Li Y</b>, Brad S, and Liang ZP, Simultaneous QSM and metabolic imaging of the brain using&nbsp;SPICE: Further improvements in data acquisition and processing, <i>Magnetic Resonance in Medicine</i>, 85(2):970-977, 2021.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                11.&nbsp;<b>Li Y*</b>, Wang T, Zhang T, Lin Z, Li Y, Guo R, Zhao Y, Meng Z, Liu J, Yu X, Liang Z-P and Nachev P, Fast high-resolution metabolic imaging of acute stroke with 3D magnetic resonance spectroscopy, <i>Brain </i>(封面论文),&nbsp;143(11): 3225–3233, 2020.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                12.&nbsp;Bo B, <b>Li Y*</b>, Li W, Wang Y, and Tong S, Optogenetic translocation of protons out of penumbral neurons is protective in a rodent model of focal cerebral ischemia, <i>Brain Stimulation</i>, 13: 881-890, 2020.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                13.&nbsp;Cen H, Xu J Xu, Yang Z, Mei L, Chen T, Zhuo K, Xiang Q, Song Z, Wang Y, Guo X, Wang J, Jiang K, Xu Y, <b>Li Y*</b>,<b>&nbsp;</b>and Liu D, Neurochemical and brain functional changes in the ventromedial prefrontal cortex of first-episode psychosis patients: A combined functional magnetic resonance imaging - proton magnetic resonance spectroscopy study, <i>Australian &amp; New Zealand Journal of Psychiatry</i>, 54(5):519-527, 2020.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                14.&nbsp;Guo R, Zhao Y, Li Y,<b>&nbsp;Li Y</b>, and Liang ZP, Simultaneous metabolic and functional imaging of the brain using SPICE, <i>Magnetic Resonance in Medicine</i>, 82(6):1993-2002, 2019.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                15.&nbsp;Zhuang H, Liu R, Wu C, Meng Z, Wang D, Liu D, Liu M, and <b>Li Y</b><b>*</b>,&nbsp;Multimodal classification of drug-naïve first-episode schizophrenia combining anatomical, diffusion and resting state functional resonance imaging, <i>Neuroscience Letters,</i>&nbsp;705:87-93, 2019.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                16.&nbsp;Xiang Q, Xu J, Wang Y, Chen T, Wang J, Zhuo K, Guo X, Zeljic K, Li W, Sun Y, Wang Z, <b>Li Y*</b>, and Liu D, Modular functional-metabolic coupling alterations of frontoparietal network in schizophrenia patients,<i>&nbsp;Frontiers in Neuroscience,</i>&nbsp;13:40, 2019.&nbsp;
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                17.&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Bo%20B%5BAuthor%5D&amp;cauthor=true&amp;cauthor_uid=30281433">Bo B</a>,&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Li%20Y%5BAuthor%5D&amp;cauthor=true&amp;cauthor_uid=30281433"><b>Li Y</b></a>*,&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Li%20W%5BAuthor%5D&amp;cauthor=true&amp;cauthor_uid=30281433">Li W</a>,&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Wang%20Y%5BAuthor%5D&amp;cauthor=true&amp;cauthor_uid=30281433">Wang Y</a>,&nbsp;and <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Tong%20S%5BAuthor%5D&amp;cauthor=true&amp;cauthor_uid=30281433">Tong S</a>, Optogenetic excitation of ipsilesional sensorimotor neurons is protective in acute ischemic stroke: a laser speckle imaging study,<i>&nbsp;</i><a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Optogenetic+Excitation+of+Ipsilesional+Sensorimotor+Neurons+is+Protective+in+Acute+Ischemic+Stroke%3A+A+Laser+Speckle+Imaging+Study"><i>IEEE Transactions on Biomedical Engineering,</i></a>&nbsp;66(5):1372-1379, 2019.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                18.&nbsp;Chen Y, Meng Z, Zhang Z, Zhu Y, Gao R, Cao X, Tan L, Wang Z, Zhang H, <b>Li Y*</b>, Fan Q, and Xiao Z, The thalamic glutamate level correlates with functional connectivity with dorsal anterior cingulate cortex/middle occipital gyrus in obsessive-compulsive disorder: a combined fMRI and <sup>1</sup>H-MRS study, <i>Australian &amp; New Zealand Journal of Psychiatry, </i>53(3): 207-218, 2019.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                19.&nbsp;Tang Y, Zhang X, Sheng J, Zhang J, Zhu Y, Wang J, Zhang T, Zhuo K, Zhang X, Tong S, <b>Li Y*</b>, and Wang J, Elevated hippocampal choline level is associated with altered functional connectivity in females with major depressive disorder: A pilot study, <i>Psychiatry Research: Neuroimaging</i>, 278: p. 48-55, 2018.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                20.&nbsp;Wang R, Fan Q, Zhang Z, Chen Y, Zhu Y and <b>Li Y*</b>, Anterior thalamic radiation structural and metabolic changes in obsessive-compulsive disorder: a combined DTI-MRS study, <i>Psychiatry Research: Neuroimaging</i>, 277:39-44, 2018.&nbsp;
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                21.&nbsp;<b>Li Y</b>, Chen Z, Su X, Zhang X, Wang P, Zhu Y, Xu Q, Xu J and Tong S, Functional lateralization in cingulate cortex predicts motor recovery after basal ganglia stroke, <i>Neuroscience Letters</i>, 613(2): 6-12, 2016.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                22.&nbsp;Zhang&nbsp;X, Tang Y, Maletic-Savatice M, Sheng J, Zhang X, Zhu Y, Zhang T, Tong S, Wang J and <b>Li Y*</b>, Altered neuronal spontaneous activity correlates with glutamate concentration in medial prefrontal cortex of major depressed females: an fMRI-MRS study, <i>Journal of Affective Disorders</i>, 201:153-161, 2016.
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                23.&nbsp;Zhu&nbsp;Y, Fan Q, Han X, Zhang H, Chen J, Wang Z, Zhang Z, Tan L, Xiao Z, Tong S, Maletic-Savatic M and <b>Li Y*</b>,&nbsp;Decreased thalamic glutamate level in unmedicated adult obsessive compulsive disorder patients detected by proton magnetic resonance spectroscopy, <i>Journal of Affective Disorders</i>, 178:193-200, 2015.&nbsp;
                            </p>
                            <p style={{marginLeft:"18.0000pt", textIndent:"-18.0000pt"}}>
                                24.&nbsp;<b>Li</b><b>&nbsp;</b><b>Y*</b>, Zhu S, Yuan L, Lu H, Li H and Tong S, Predicting the ischemic infarct volume at the first minute after occlusion in rodent stroke model by laser speckle imaging of cerebral blood flow, <i>Journal of</i><i>&nbsp;Biomedical </i><i>Optics,</i>&nbsp;18 (7): 076024,&nbsp;2013.&nbsp;
                            </p>

                        <p></p>
                        </div>
                    </div>
                    <div className="ti-bg">联系方式</div>
                    <p style={{marginLeft:"15px"}}>邮箱地址：yaoli@sjtu.edu.cn</p>
                    <p style={{marginLeft:"15px"}}>联系电话：86-21-62932981</p>
                    <p style={{marginLeft:"15px"}}>办公地址：教三楼南楼331室</p>
                </div>
            </div>
        </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>多模态脑影像及智能计算实验室</title>