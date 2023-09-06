import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/Contact/Header"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
       <Header></Header>
       <div style={{backgroundColor:"#f6f7f8", marginTop:"-80vh", height:"130vh", position:"relative"}}>
            <h1 style={{ textAlign: "center", paddingTop:"3vh" }}>联系我们</h1>
            <div style={{backgroundColor:"white", width:"90vw", height:"100vh", margin:"auto", paddingTop: "15px", paddingLeft: "3vw"}}>
                <p>tbd@sjtu.edu.cn</p>
                <p>邮编：200030</p>
                <p>通讯地址：上海市徐汇区华山路1954号MED-X研究院313室</p>
                <StaticImage 
                        alt="team member"
                        src={`../Scene/Contact/images/map.webp`}
                    />
            </div>
            
        </div>
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>