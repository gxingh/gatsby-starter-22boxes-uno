import React, {useEffect, useState} from "react"
import { rhythm } from "../utils/typography"
import Header from "./Header"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Layout({ location, title, children }){
  const rootPath = `${__PATH_PREFIX__}/`
  const {width, height} = useWindowDimensions();

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1)} ${rhythm(2/4)} 0 ${rhythm(2/4)} `,
        fontFamily:`Montserrat`
      }}
    >
      <header> <Header location={location}/> </header>
      <main style={{
        minHeight:height,
        border: `0.5px solid #EEEEEE`,
        borderBottom:`0px`,
        borderRadius:`10px 10px 0px 0px`,
        paddingLeft:`30px`,
        paddingRight:`30px`,
        paddingTop:`-20px`
      }}>{children}</main>
    </div>
  )
}

export default Layout
