import { useState, useEffect } from "react";
import { song } from "../types";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


type SideBarProps = {
  playList: song[] | undefined
  handleClickSidebar: (index: number) => void
}

export function SideBar({ playList, handleClickSidebar }: SideBarProps {
  const [showSideBar, setshowSideBar] = useState(true);
  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener()

  }, [third])
  




})