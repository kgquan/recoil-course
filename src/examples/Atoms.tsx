import { atom, useRecoilState, useRecoilValue } from 'recoil';

const DarkModeAtom = atom({
  key: 'darkMode',
  default: false
})

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(DarkModeAtom)

  console.log('darkMode', darkMode);

  return <input type="checkbox" checked={darkMode} onChange={(event) => {
    setDarkMode(event.currentTarget.checked)
  }}/>
}

const Button = () => {
  const darkMode = useRecoilValue(DarkModeAtom)

  return <button style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>My UI Button</button>
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