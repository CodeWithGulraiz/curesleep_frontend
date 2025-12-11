"use client"
import logo from "../assets/images/logo.png"
export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="Restora Sleep" className="w-22 h-12" />
          </div>
        </div>
        <p className="text-primary font-medium">Loading...</p>
      </div>
    </div>
  )
}
