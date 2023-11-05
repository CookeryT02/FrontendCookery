import "./top-bar-icons.scss"
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import React from 'react'
import { useSelector } from "react-redux";

const TopBarIcons = () => {

    const { isLoggedIn, user } = useSelector((state) => state.auth)

    return (
        <span className="icons">
            {
                isLoggedIn ? (
                    <>

                        <button className="icon">
                            <AiOutlineHeart size={30} />
                            <span className="ntf">3</span>
                        </button>
                        <button className="icon">
                            <HiOutlineShoppingBag size={30} />
                            <span className="ntf">1</span>
                        </button>


                    </>
                ) : (
                    <>
                        <button disabled className="icon"><AiOutlineHeart size={30} /></button>
                        <button disabled className="icon"><HiOutlineShoppingBag size={30} /></button>
                    </>
                )
            }




        </span>)

}

export default TopBarIcons