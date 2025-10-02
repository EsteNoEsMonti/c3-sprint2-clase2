import { useEffect, useState } from "react"

const LSExample = () => {
  const [nombre, setNombre] = useState("")

  const handleGuardar = () => {
    localStorage.setItem("nombre", nombre)
    alert("nombre guardado")
  }

  const handleClear = () => { localStorage.clear()}

  useEffect(() => {
    // get el LS
    const nombreGuardado = localStorage.getItem("nombre")
    if (nombreGuardado) {
      setNombre(nombreGuardado)
    }
  },[])

  return (
    <>
      <h1 className="text-xl font-bold">
        LS en React
      </h1>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <button
        onClick={handleGuardar}
        className="bg-blue-500 rounded p-3 mt-2"
      >
        Guardar nombre
      </button>

      <button
        onClick={handleClear}
        className="bg-red-500 rounded p-3 mt-2 ml-2"
      >
        Limpiar LS
      </button>

      <p className="mt-2 text-gray-800">Nombre guardado: {nombre}</p>
    </>
  )
}

export default LSExample