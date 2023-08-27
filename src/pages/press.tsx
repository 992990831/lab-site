import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/News/Components/Header"
import NewsGallery from "../Scene/News/Components/NewsGallery";

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
       <Header></Header>
       <div style={{backgroundColor:"#f6f7f8", marginTop:"-80vh", height:"100vh", position:"relative"}}>
          <NewsGallery></NewsGallery>
        </div>
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>阿尔法Lab实验室</title>