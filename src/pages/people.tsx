import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/People/Components/Header"
import PeopleGallery from "../Scene/People/Components/Peoples";

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
        <Header></Header>
        <div style={{backgroundColor:"#f6f7f8", marginTop:"-80vh", height:"300vh", position:"relative"}}>
          <PeopleGallery></PeopleGallery>
        </div>
        
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>