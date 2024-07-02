interface props {
  usuarios: Array<Object>;
  borrarUsuario: Function;
}

export default function Listado({ usuarios, borrarUsuario }: props) {
  const listados = usuarios.map((objs: any, index: number) => 
    <li key={index} className="fondoFormulario">
      <div>
        {index}
      </div>
      <div>{objs.name}</div>
      <div style={{ marginLeft: "5px" }}>{objs.email}</div>
      <button
        onClick={() => borrarUsuario(index)}
        style={{ marginLeft: "5px" }}
      >
        Eliminar
      </button>
    </li>
  );
  return usuarios.length > 0 ? <ul>{listados}</ul> : <div></div>;
}