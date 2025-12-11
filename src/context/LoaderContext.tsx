"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import Loader from "../components/Loader"

interface LoaderContextType {
  isLoading: boolean
  showLoader: () => void
  hideLoader: () => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export function LoaderProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  const showLoader = () => setIsLoading(true)
  const hideLoader = () => setIsLoading(false)

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  const context = useContext(LoaderContext)
  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider")
  }
  return context
}
