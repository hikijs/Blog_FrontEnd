import React, { createContext, useState } from 'react'

interface AppContextInterface {
  isAuthenticate: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticate: Boolean(true),
  setIsAuthenticated: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticate, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticate)

  return (
    <AppContext.Provider
      value={{
        isAuthenticate,
        setIsAuthenticated
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
