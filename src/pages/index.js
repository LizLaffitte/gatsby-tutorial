import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function Home() {
  return (
    <div style={{color: `purple`}}>
      <Link to="/contact">Contact</Link>
      <Header headerText="Liz Laffitte"/>
      <p>Fullstack Software Engineer</p>
      <img src="https://source.unsplash.com/random/400x200" />
    </div>
  )
}
