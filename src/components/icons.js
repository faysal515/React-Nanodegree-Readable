import React, {Component} from 'react'


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