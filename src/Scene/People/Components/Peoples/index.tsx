import * as React from 'react';
import './style.css';
import { StaticImage } from 'gatsby-plugin-image'

const getFaculty = () => {
    let peoples = [];

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage
                                    alt="team member"
                                    src={`./images/profile/11_10_ZiwenKe.png`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>柯子文</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士后<br />结合磁共振物理及人工智能的磁共振快速高分辨率成像。
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={2}>
            <div className="singlePeople">
                <a href="/people/zhangyaoyu/" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/17_10_zhangyaoyu.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>张垚煜</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    助理研究员<br />脑血流灌注成像、脑氧代谢成像、脑功能成像、脑波谱成像等多模态磁共振成像技术在脑疾病中的临床应用与转化。
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={2}>
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/25_10_guanyue.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>管月</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    助理研究员<br />快速高分辨率磁共振成像，深度学习，多模态磁共振脑影像智慧诊疗。
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

const getStudents = () => {
    let peoples = [];

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/4_10_20230825190247.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>张云鹏</h2>
                        </div>
                        <div>
                            <p>
                                <span>
                                    博士<br />脑结构图谱构建及其在脑结构分割中的应用。
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>zhangypbme_ly@sjtu.edu.cn
                                        <br />入学时间：2019.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />zhangypbme_ly@sjtu.edu.cn
                                        <br />2019.09~至今
                                    </div>                                    
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/8_10_2019_06_27_7272.JPG`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>程子骏</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />磁共振临床脑疾病研究
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>thecheng@sjtu.edu.cn
                                        <br />入学时间：2024.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />thecheng@sjtu.edu.cn
                                        <br />2024.09即将入学
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/9_10_IMG_7251.jpeg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>王聃妮</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />多模态脑影像在神经/精神疾病中的应用
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>wang_danni@sjtu.edu.cn
                                        <br />入学时间：2020.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />wang_danni@sjtu.edu.cn
                                        <br />2020.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/10_10_Cache_3d4dbd2f2bbcd650.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>冯烁芸</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />磁共振临床脑疾病研究
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>fengshuoyun@sjtu.edu.cn
                                        <br />入学时间：2024.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />fengshuoyun@sjtu.edu.cn
                                        <br />2024.09即将入学
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/12_10_mmexport1637729408194.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>胡佳琳</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />多模态脑影像在阿尔茨海默病中的应用
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>hujl_bme@sjtu.edu.cn
                                        <br />入学时间：2018.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />hujl_bme@sjtu.edu.cn
                                        <br />2018.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/13_10_xuchang.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>许畅</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />多模态磁共振影像
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>silver_lining@sjtu.edu.cn
                                        <br />入学时间：2023.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />silver_lining@sjtu.edu.cn
                                        <br />2023.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/15_10_Huixiang_Zhuang_LR.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>庄惠翔</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />生成模型、异常检测算法、脑图谱构建
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>hxzhuang@sjtu.edu.cn
                                        <br />入学时间：2021.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />hxzhuang@sjtu.edu.cn
                                        <br />2021.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/20_10_06CB0C59-C7D5-4D99-95F2-4647D85B3C5F.jpeg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>丁一</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />医学图像配准、图像修复
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>dingyitk159@sjtu.edu.cn
                                        <br />入学时间：2022.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />dingyitk159@sjtu.edu.cn
                                        <br />2022.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/21_10_mmexport1693103660202.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>麻钰皓</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />脑血流图谱构建，融合多模态脑影像的缺血脑卒中、脑胶质瘤异常检测
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>yuhao314@sjtu.edu.cn
                                        <br />入学时间：2021.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />yuhao314@sjtu.edu.cn
                                        <br />2021.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/22_10_Screenshot_2021-07-04-22-16-05-756_com.miui.gallery.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>黄若东</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />磁共振脑影像图像后处理
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>limit-searcher@sjtu.edu.cn
                                        <br />入学时间：2022.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />limit-searcher@sjtu.edu.cn
                                        <br />2022.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/23_10_Screenshot_20230827_091349.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>李雯丽</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />多模态脑影像融合分析，脑疾病功能-代谢耦合机制，阿尔兹海默症，精神分裂症
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>liwenli@sjtu.edu.cn
                                        <br />入学时间：2018.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />liwenli@sjtu.edu.cn
                                        <br />2018.09~至今
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/24_10_zhangwenqi.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>张闻琪</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />医学图像配准，多模态医学图像的后处理
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>wenqizhang@sjtu.edu.cn
                                        <br />入学时间：2023.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />wenqizhang@sjtu.edu.cn
                                        <br />2023.09~至今
                                    </div>
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

const getGraduated = () => {
    let peoples = [];

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage
                                    alt="team member"
                                    src={`./images/profile/3_10_62890307-B0C9-4ABC-9B32-D7E64430BBF2.jpeg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>林增萍</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />专业领域为PET/MR 和 MR 在神经系统疾病及肿瘤中的应用。
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>13920963669@163.com
                                        <br />就读时间：2019.09~2022.03
                                    </div>
                                    <div className='student-mobile'>
                                        <br />13920963669@163.com
                                        <br />2019.09~2022.03
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/5_10_MTXX_MR20230825_193126014.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>孙琬晴</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />MR 脑科学
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>1995754262@qq.com
                                        <br />就读时间：2019.09~2022.03
                                    </div>
                                    <div className='student-mobile'>
                                        <br />1995754262@qq.com
                                        <br />2019.09~2022.03
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/6_10_mmexport1628135609124.png`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>关紫允</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />阿尔兹海默症脑功能网络研究
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>guan_ziy@163.com
                                        <br />就读时间：2019.09~2022.03
                                    </div>
                                    <div className='student-mobile'>
                                        <br />guan_ziy@163.com
                                        <br />2019.09~2022.03
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/7_10_IMG_6258.png`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>胡毓杰</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />磁共振临床脑疾病研究
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>951356126@qq.com
                                        <br />就读时间：2020.09~2023.03
                                    </div>
                                    <div className='student-mobile'>
                                        <br />951356126@qq.com
                                        <br />2020.09~2023.03
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/14_10_zp1693053941491.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>余鹏程</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />图像处理 计算机视觉
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>pengcheng.yukaka@gmail.com
                                        <br />就读时间：2018.09~2021.06
                                    </div>
                                    <div className='student-mobile'>
                                        <br />pengcheng.yukaka@gmail.com
                                        <br />2018.09~2021.06
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/16_10_IMG_3990.jpeg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>孟子瑜</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />自旋回波序列大脑快速定量T2成像重建算法及临床应用；融合生物先验和多模态磁共振脑影像的脑疾病模型；
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>mengzy0306@sjtu.edu.cn
                                        <br />就读时间：2016.09~2023.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />mengzy0306@sjtu.edu.cn
                                        <br />2016.09~2023.09
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/18_10_IMG_20230323_134335.jpg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>叶倩倩</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    硕士<br />精神分裂症患者纵向脑结构改变，药物治疗对强迫症患者脑功能影响，强迫症患者楔前叶分区异常研究
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>savannah_lose@163.com
                                        <br />就读时间：2018.09~2021.03
                                    </div>
                                    <div className='student-mobile'>
                                        <br />savannah_lose@163.com
                                        <br />2018.09~2021.03
                                    </div>
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );

    peoples.push(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="singlePeople">
                <a href="javascript:void(0)" className="Card">
                    <div className="left">
                        <div className="img-box">
                            <div className="img">
                                <StaticImage style={{display:"contents"}}
                                    alt="team member"
                                    src={`./images/profile/19_10_IMG_7544.jpeg`}
                                />
                                {/* <img src={data.data.img} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h2>张天骁</h2>
                        </div>
                        <div className="desc">
                            <p>
                                <span>
                                    博士<br />磁共振场B1不均匀性，磁共振B0场不均匀性，T2‘成像，神经代谢和氧代谢同步成像
                                    <div className='student'>
                                        <br /><span>邮箱地址：</span>1044620751@qq.com
                                        <br />就读时间：2017.09~2023.09
                                    </div>
                                    <div className='student-mobile'>
                                        <br />1044620751@qq.com
                                        <br />2017.09~2023.09
                                    </div>
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
                // 导师
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12">
                    <div className="singlePeople" style={{height:"auto"}}>
                        <a href="/people/liyao/" className="big-profile-image">
                            <div className="left tutor">
                                <div className="img-box">
                                    <div className="img">
                                        <StaticImage style={{display:"contents"}} className='turtor-profile'
                                            alt="team member"
                                            src={`./images/profile/2019-04-24-11-52-06-651326.png`}
                                        />
                                        {/* <img src={data.data.img} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="right full-width">
                                <div className="name" style={{marginTop:"5px"}}>
                                    <h2>李瑶</h2>
                                </div>
                                <div className="desc">
                                    <p>
                                        <span style={{fontSize:"13px"}}>
                                        <b>博士</b><br /> <b>上海交通大学生物医学工程学院，教授，博士生导师, 院长助理。</b>李瑶博士于2002年获得上海交通大学电子与信息工程本科学位，2008年在美国纽约州立大学石溪分校获得电子与计算机工程博士学位，2008年至2010年于美国石溪医学研究中心任高级研究员。2010年加入上海交通大学生物医学工程学院。先后获得国家自然科学基金委员会、科技部、教育部、上海市科委和上海交通大学的多项基金支持，并在国外重要学术期刊如《Science》,《Brain》,《Magnetic Resonance in Medicine》等发表100余篇学术论文，他引超千次。研究工作获得2021年国际医学与生物学工程学会年会(EMBC)最佳论文奖(Best Paper Award, First place)；在2019-2021年国际磁共振学术年会(ISMRM)上连续获得13项大会优秀论文奖；获得2018年上海市医学会精神医学专科学术年会优秀论文一等奖，2019 、2020年中华医学会第十七、十八次全国精神医学大会优秀论文奖。获得国家自然科学基金、科技部、教育部、上海市科委和上海交通大学的多项基金支持，授权发明专利多项。现任BMC Neuroscience杂志副主编，美国电气和电子工程师协会高级会员(Senior Member)，提名IEEE EMBS国际生物医学工程学会行政委员会委员(2020)，国际医学磁共振学会(ISMRM)会员，人类脑成像组织(OHBM)会员, IEEE EMBC Shanghai分会秘书。获得上海交通大学“晨星学者”奖励计划，瑞金医院“广慈学者”双聘教授等。
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            }
            <h1 style={{textAlign:"center", clear:"both", margin:"0px"}}>教职工</h1>
            {
                getFaculty()
            }
            <h1 style={{textAlign:"center", clear:"both", margin:"0px"}}>在校学生</h1>
            <br style={{clear:"both"}} />
            {
                getStudents()
            }

            <h1 style={{textAlign:"center", clear:"both", margin:"0px"}}>已毕业校友</h1>
            {
                getGraduated()
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