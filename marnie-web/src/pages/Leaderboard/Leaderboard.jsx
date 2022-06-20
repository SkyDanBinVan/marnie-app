import React, { useEffect, useState} from 'react'

const URL = process.env.REACT_APP_DB_URL
export default function Leaderboard() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch(`${URL}/api/users`)
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          throw res
        })
        .then(res => {
          setUserData(res)
        })
        .catch(console.error)
    }, []);
    
  return (
    <div>{userData.map(element => element.name)}</div>
  )
}
