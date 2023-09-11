import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/People/Components/Header"
import Footer from '../Scene/HomePage/Components/Footer';
import PeopleGallery from "../Scene/People/Components/Peoples";

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
        <Header></Header>
        <div style={{backgroundColor:"#f6f7f8", marginTop:"-80vh", height:"300vh", position:"relative"}}>
          <PeopleGallery></PeopleGallery>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>多模态脑影像及智能计算实验室</title>