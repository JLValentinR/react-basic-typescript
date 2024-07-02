interface props {
  productos: Array<Object>
}

export default function Listado2 ({ productos }: props) {
  const mostrar = productos.map((objs: any, index: number) => 
    <li key={index}>{objs.title}</li>
  );
  return (
    <ul>
      {mostrar}
    </ul>
  )
}
