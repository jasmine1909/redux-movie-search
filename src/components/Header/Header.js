import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import "./Header.scss"
const Header = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search === "") return alert("Please enter search term")
        dispatch(fetchAsyncMovies(search))
        dispatch(fetchAsyncShows(search))
        setSearch("")

    }

    return (
        <div className='header'>
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className='search-bar'>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Movies or Shows" />
                    <button ><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-img">
                <img src="https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg" alt="" />
            </div>
        </div>
    )
}

export default Header