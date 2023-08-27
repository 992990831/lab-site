import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
    return (
      <>
       Hi there!
        
      </>
    )
}
export default IndexPage

export const Head: HeadFC = () => <title>阿尔法Lab实验室</title>