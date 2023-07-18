import { useState, useEffect } from "react";
import { song } from "../types";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


type SidebarProps = {
  playList: song[] | undefined
  handleClickSidebar: (index: number) => void
}

export function SideBar({ playList, handleClickSidebar }: SidebarProps) {
  const [showSideBar, setshowSideBar] = useState(true);
  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(() => {
  function handleResize() {
    setWidth(window.innerWidth)
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize)
  }, [width]);

  useEffect(() => {
    if (width < 640) {
      setshowSideBar(false)
    }
  }, [width]);

  const handleHideSidebarClick = () => {
    setshowSideBar(false);
  }

  const handleShowSidebarClick = () => {
    setshowSideBar(true)
  }
  
  




})