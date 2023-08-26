import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../Scene/People/Components/Header"

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
        <Header></Header>
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>阿尔法Lab实验室</title>