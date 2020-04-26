import React from "react"
import Layout from "../components/layout";
import Introduction from '../components/introduction';


const IndexPage = () => (
  // <div style={{ background:'aqua'}}>
  <Layout>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Introduction/>
    </div>
  </Layout>
  // </div>
)

export default IndexPage
