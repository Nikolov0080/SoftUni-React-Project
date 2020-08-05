import React from 'react'

const UserContext = React.createContext({
  user: null,
  signOut: () => {}
})

export default UserContext;