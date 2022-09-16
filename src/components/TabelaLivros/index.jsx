import React, { useState } from "react";
import "./style/index.scss";
import { Modal } from "../Modal";
export const TabelaLivros = ({ livros, editar, remove }) => {
  const [modal, setModal] = useState(false);
  const [newData, setNewData] = useState();
  const Edit = (e) => {
    const newE = livros.find((l) => l.id === e);
    setNewData(newE);
    setModal(true);
  };
  const Remove = (r) => {
    remove(r);
  };
  return (
    <div>
      <h1>Tabela de livros</h1>
      {livros.length === 0 ? (
        <h2>Nenhum livro cadastrado!!</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.id}>
                <td title="ISBN:" margen="20">
                  <span>{livro.isbn}</span>
                </td>
                <td title="Titulo:">
                  {" "}
                  <span>{livro.titulo}</span>
                </td>
                <td title="Autor:">
                  <span>{livro.autor}</span>
                </td>
                <td>
                  <span className="btns">
                    <button onClick={() => Edit(livro.id)}>Editar</button>
                    <button onClick={() => Remove(livro.id)}>Remover</button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {modal && <Modal edit={editar} setModal={setModal} newData={newData} />}
    </div>
  );
};
