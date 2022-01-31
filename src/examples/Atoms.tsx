const DarkModeSwitch = () => {
  return <input type="checkbox" />
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