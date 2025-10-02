import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [modoOscuro, setModoOscuro] = useState(false)

  const toggleModo = () => {
    const nuevoModo = !modoOscuro
    setModoOscuro(nuevoModo)
    localStorage.setItem("modoOscuro", nuevoModo)
  }

  useEffect(() => {
    const temaGuardado = localStorage.getItem("modoOscuro")
    if (temaGuardado === "true") {
      setModoOscuro(true)
    }
  }, [])

  return (
    <>
      <div className={`${ modoOscuro ? 'bg-gray-800 text-white' : 'bg-sky-400'}`}>
        <h1 className='text-xl font-bold'>
          Cambiar tema
        </h1>

        <button
          onClick={toggleModo}
          className='p-3 rounded mt-2 bg-amber-400'
        >
          {modoOscuro ? 'Cambiar a Claro' : 'Cambiar a Oscuro'}
        </button>

      </div>

    </>
  )
}

export default ThemeSwitcher 