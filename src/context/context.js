import React from 'react'

const UserContext = React.createContext({
  user: null,
  currentProduct: null,
  setProduct: () => { },
  signOut: () => { }
})

export default UserContext;