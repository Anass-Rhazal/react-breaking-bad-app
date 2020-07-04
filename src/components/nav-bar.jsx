import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartCountState } from '../recoil/selectors';


export default function NavBar() {
   const cartCount = useRecoilValue(cartCountState);
    return <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Breaking Bad</Link>
        <div className="navbar-nav">
            <Link to="/cart" className="navbar-brand">Cart</Link>
        </div>
        <button className="btn btn-outline-success my-2 my-sm-0">Items <span className="badge badge-light">{cartCount}</span></button>
    </nav>
}


