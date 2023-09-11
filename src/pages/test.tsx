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

export const Head: HeadFC = () => <title>多模态脑影像及智能计算实验室</title>