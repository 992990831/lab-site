import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/Research/Components/Header"
import PublicationGallery from "../Scene/Publication/Components/PublicationGallery";

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
       <Header></Header>
       <div style={{backgroundColor:"#f6f7f8", marginTop:"-80vh", height:"100vh", position:"relative"}}>
          <PublicationGallery></PublicationGallery>
        </div>
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>