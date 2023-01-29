import React from 'react'
import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Header() {
  const [theme, setTheme] = React.useState(() => document.body.getAttribute('data-theme') ?? 'dark')
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  const handleSwitchTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }
  const isDark = theme === 'dark'
  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <img src="https://avatars.githubusercontent.com/u/54494144?v=4" alt="avatar" />
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>Diki Rizkiawan </b>
        </h2>
      </div>
      <button className="switch-theme-button" onClick={handleSwitchTheme}>
        {isDark ? <SunIcon color="white" /> : <MoonIcon  />}
      </button>
    </div>
  )
}

export default Header