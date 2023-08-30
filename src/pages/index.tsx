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

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>
