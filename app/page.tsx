'use client'
import Base from "./components/Base"
import isAuth from "./components/IsAuth"
const Home = () => {
  return (
    <Base><h1>hello world</h1></Base>
  )
}

export default isAuth(Home);
