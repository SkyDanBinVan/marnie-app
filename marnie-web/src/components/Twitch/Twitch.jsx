import React from 'react'
import Stream from '../Stream/Stream'
import "./Twitch.css"

export default function Twitch() {
  return (
      <div className='twitchStream'>
          <Stream chat={true}/>
      </div>
  )
}
