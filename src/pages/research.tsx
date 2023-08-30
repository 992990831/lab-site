import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/Research/Components/Header"
import ResearchGallery from "../Scene/Research/Components/ResearchGallery";

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
       <Header></Header>
       <div style={{backgroundColor:"#f6f7f8", marginTop:"-80vh", height:"100vh", position:"relative"}}>
          <ResearchGallery></ResearchGallery>
        </div>
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>