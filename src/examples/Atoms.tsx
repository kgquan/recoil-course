import { useState } from 'react';

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false)

  console.log('darkMode', darkMode);

  return <input type="checkbox" checked={darkMode} onChange={(event) => {
    setDarkMode(event.currentTarget.checked)
  }}/>
}

const Button = () => {
  return <button>My UI Button</button>
}

export const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}