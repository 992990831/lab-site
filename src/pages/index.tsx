import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from '../Scene/HomePage';
import './bootstrap.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <HomePage></HomePage>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>多模态脑影像及智能计算实验室</title>
