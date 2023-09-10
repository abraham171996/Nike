import React, { useState } from 'react'
import SubHeader from './SubHeader'
import styles from "./hader.module.css"
import Logo from '../../Atoms/Logo/Logo'
import {CiSearch} from "react-icons/ci"
import {AiOutlineHeart} from "react-icons/ai"
import {BsBag} from "react-icons/bs"
import SearchBar from '../../../components/SearchBar/SearchBar'
import HeaderList from '../../../components/HeaderList/HeaderList'
import { Link } from 'react-router-dom'
import Cart from '../../../components/Card'
const Header = () => {
    const [showCart,setShowCart] = useState(false)

    function handleShowCart(){
        setShowCart(!showCart)
    }
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                    <SubHeader />
                </div>
            <div className="container" >
                
                <div className={styles.headerBottom}>
                    <Logo />
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                           <Link to="/new&featured">New & Featured</Link>
                           <Link to="/men">Men</Link>
                           <Link to='/women'>Women</Link>
                           <Link to='/kids'>Kids</Link>
                           <Link to='/sale'>Sale</Link>
                           <Link to='/snkrs'>SNKRS</Link>
                        </ul>
                    </nav>
                    <div className={styles.forCustomer}> 
                                 <SearchBar />
                            <div className={styles.header_icons}>
                                <AiOutlineHeart/>
                                <BsBag onClick={handleShowCart}/>
                            </div>
                    </div>
                </div>

                <Cart showCart={showCart} setShowCart={setShowCart}/>
            </div>
        </header>
    )
}

export default Header