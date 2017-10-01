import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export const UpArrow = props => {
  return (
    <span onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" preserveAspectRatio="xMidYMid"
         viewBox="0 0 292.362 292.362" className="arrow-size">
      <path
        d="M286.935 197.286L159.028 69.38c-3.613-3.618-7.895-5.425-12.847-5.425s-9.232 1.807-12.85 5.424L5.425 197.285C1.807 200.9 0 205.184 0 210.132s1.807 9.233 5.424 12.847c3.62 3.616 7.902 5.427 12.85 5.427h255.813c4.95 0 9.233-1.81 12.848-5.428 3.613-3.614 5.427-7.9 5.427-12.848s-1.814-9.232-5.427-12.846z"
        fill="#5ba12a"/>
    </svg>
  </span>
  )
}


export const DownArrow = props => {
  return (
    <span onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" preserveAspectRatio="xMidYMid"
           viewBox="0 0 292.362 292.362" className="arrow-size">
        <path
          d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.997 0 77.28 0 82.227c0 4.95 1.807 9.23 5.424 12.848L133.33 222.982c3.622 3.617 7.903 5.428 12.85 5.428s9.234-1.81 12.848-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.23-5.427-12.85z"
          fill="#d40b2f"/>
      </svg>
    </span>
  )
}

export const HeartIcon = props => {
  return (
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid"
           className="like-bttn">
          <path fill="#C03A2B"
                d="M25 10c2-4.7 6.5-8 11.8-8 7.3 0 12.5 6.2 13 13.5 0 0 .5 2-.3 5.2-1 4.4-3.5 8.4-7 11.5L25 48 7.3 32.2c-3.4-3-5.8-7-7-11.5-.7-3.3-.3-5.2-.3-5.2C.8 8.2 6 2 13.3 2 18.6 2 23 5.3 25 10z"/><path
        fill="#ED7161"
        d="M6 18c-.6 0-1-.4-1-1C5 11.7 9.5 7 15 7c.6 0 1 .5 1 1s-.4 1-1 1c-4.4 0-8 3.7-8 8 0 .6-.4 1-1 1z"/>
      </svg>
    </span>
  )
}


export const NotFound = props => {
  return (
    <div>
      <h1>The post you are looking is not found</h1>
      <h1><Link to={`/`}>Go to Home</Link></h1>
    </div>
  )
}

export const CommentIcon=(props) =>{
    return(
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid" className="home-svg va-top">
                <path d="M13 73h15l.2 13.3c0 .8.5 1.4 1 1.8l1 .5c.4 0 1 0 1.2-.4l19.3-15H87c1 0 2-1 2-2V14c0-1-1-2-2-2H13c-1 0-2 1-2 2v57c0 1 1 2 2 2zm2-57h70v53H50c-.4 0-1 0-1.2.4L32.2 82.2 32 71c0-1-1-2-2-2H15V16z"/><path d="M39 43c0-4-3-7-7-7s-7 3-7 7 3 7 7 7 7-3 7-7zm-10 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm22 7c4 0 7-3 7-7s-3-7-7-7-7 3-7 7 3 7 7 7zm0-10c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm19 10c4 0 7-3 7-7s-3-7-7-7-7 3-7 7 3 7 7 7zm0-10c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
            </svg>
        </span>
    )
}

export const EditIcon=(props) =>{
    return(
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid" className="home-svg">
                <path d="M84.8 25l-10-9.8c-1.3-1.4-3.2-2.2-5.2-2.2s-4 .8-5.3 2.2l-43 43c-1 1-1.6 2-2 3.3l-6 21c-.5 1 0 2.4.8 3.4 1 .2 2 1 3 1 .3 0 .7 0 1-.6l21-6c1-.5 2-1 3-2l43-43c1.5-1.5 2-3.4 2-5.4 0-2-.5-4-2-5.2zm-60 42.3l8 7.8-11 3.7 3-11zm55-36.5L73 37.6 62.4 27l6.8-6.8h.8l10 10v.3l-.2.3z"/>
            </svg>
        </span>
    )
}

export const DeleteIcon=(props) =>{
    return(
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid" className="home-svg">
                <path d="M14 28.3V89a10.7 10.7 0 0 0 11 11h50a11.2 11.2 0 0 0 2.7-.3A10.6 10.6 0 0 0 86 89V28.2H14zm18 61a3.6 3.6 0 0 1-3.6-4V42.6a3.6 3.6 0 0 1 7-1 4.7 4.7 0 0 1 .3 1.3v42.4a3.6 3.6 0 0 1-3.7 3.8zm18 0a3.6 3.6 0 0 1-3.6-4V42.6a3.6 3.6 0 0 1 7-1 4.7 4.7 0 0 1 .3 1.3v42.4a3.6 3.6 0 0 1-3.7 3.8zm18 0a3.6 3.6 0 0 1-3.6-4V42.5a3.6 3.6 0 0 1 7-1 4.8 4.8 0 0 1 .3 1.3v42.7a3.6 3.6 0 0 1-3.8 3.8zM77.3 8H65.6a8 8 0 0 0-8-8H42.4a8 8 0 0 0-8 8H22.8a12.2 12.2 0 0 0-12.2 12.2 12.3 12.3 0 0 0 .3 2.6h78a12.3 12.3 0 0 0 .3-2.6A12.2 12.2 0 0 0 77.3 8z"/>
            </svg>
        </span>
    )
}