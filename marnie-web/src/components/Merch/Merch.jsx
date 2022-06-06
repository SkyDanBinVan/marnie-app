import React, { useEffect, useState } from 'react'

const URL = process.env.REACT_APP_DB_URL

export default function Merch() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`${URL}/api/users`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then(res => {
      setUsers(res)
    })
    .catch(console.error)
  }, []);
  return <>{users.map((user, index) => <div key={index}><p>{user.name}</p><p>{user.points}</p></div>)}</>
}
