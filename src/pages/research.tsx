import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/Research/Components/Header"
import Footer from '../Scene/HomePage/Components/Footer';
import ResearchGallery from "../Scene/Research/Components/ResearchGallery";

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
       <Header></Header>
       <div style={{backgroundColor:"#f6f7f8", marginTop:"-80vh", height:"100vh", position:"relative"}}>
          <ResearchGallery></ResearchGallery>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>多模态脑影像及智能计算实验室</title>