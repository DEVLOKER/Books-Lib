import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import './FixedHeader.css';
import { helper } from '../../helpers'

import { BsBookHalf } from "@react-icons/all-files/bs/BsBookHalf";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineMessage } from "@react-icons/all-files/ai/AiOutlineMessage";
import { AiFillMessage } from "@react-icons/all-files/ai/AiFillMessage";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { AiOutlineLogin } from "@react-icons/all-files/ai/AiOutlineLogin";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";




export const FixedHeader = forwardRef(({session, setSession}, ref) => {
// export const FixedHeader = ({session, setSession}) => {

    const navigate = useNavigate()

    const [word, setWord] = useState("")

    useImperativeHandle(ref, () => ({
        triggerWord(w) {
            setWord(w);
        },
    }));

    const handleSearch = (event)=> {
        // console.log(event)
        event?.preventDefault()
        if(event?.which == 13 || event?.keyCode == 13 || event?.type==="click"){
            navigate("/", { state: { word: word }, replace: false });
        }
    }

    const handleLogout = ()=>{
        setSession(null)
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light_ navbar-light bg-warning_">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <span className="btn btn-light btn-sm" >
                        <BsBookHalf />
                    </span>
                    <span className="mb-0 ps-2 h4">Books Lib</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu />
                </button>
                <div className="collapse navbar-collapse d-flex_ justify-content-start_" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-3 pe-3 d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        {
                            helper.isMembre(session) && (
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/vendeur">Sell</Link>
                                </li>
                            )
                        }
                        {
                            helper.isAdmin(session) && (
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/admin">Admin</Link>
                                </li>
                            )
                        }
                    </ul>

                    <div className=" d-grid gap-2 mx-auto w-100" role="search">
                        <div className="input-group mb-0">
                            <input type="text" value={word} onKeyUp={(e)=>handleSearch(e)} onChange={(e)=>setWord(e.target.value)} className="form-control" placeholder="search book" aria-label="search book" aria-describedby="search-button" />
                            <button className="btn btn-light" type="button" onClick={e=> handleSearch(e)} id="search-button"><BsSearch /></button>
                        </div>
                    </div>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end align-items-center">
                        {
                            helper.isMembre(session) && (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link active membre" to="/favorisation">
                                        <button type="button" className="btn btn-light"><AiOutlineHeart /> {/*WishList*/}</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active membre" to="/messages">
                                        <button type="button" className="btn btn-light"><AiOutlineMessage /> {/*Messages*/}</button>
                                    </Link>
                                </li>
                                </>
                            )
                        }
                        
                        {
                            !helper.isConnected(session)?(
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/login">
                                        <button type="button" className="btn btn-light"><AiOutlineLogin /> Login</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/register">
                                        <button type="button" className="btn btn-light"><AiOutlineUser /> Signup</button>
                                    </Link>
                                </li>
                                </>
                            ):(
                                <li className="nav-item">
                                    <a href="#" className="nav-link active" onClick={handleLogout}>
                                        <button type="button" className="btn btn-light"><BiLogOut /> LogOut</button>
                                    </a>
                                </li>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
})
// <Outlet />