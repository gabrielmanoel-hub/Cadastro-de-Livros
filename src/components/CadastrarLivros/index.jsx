import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validacaoIsbn } from "../Regex/regex";
import "./style/index.scss";
export function CadastrarLivros({ inserirLivro }) {
  const [l, setLivros] = useState({
    id: 0,
    isbn: "",
    titulo: "",
    autor: "",
  });
  let navigate = useNavigate();
  const [erros, setErros] = useState({});
  const handleOaChange = (e) => {
    const { name, value } = e.target;
    setLivros({ ...l, [name]: value });
  };
  const validate = (values) => {
    const erros = {};
    const { isbn } = values;
    if (!isbn.match(validacaoIsbn)) {
      erros.isbn = <p>Erro! Formato inválido. ex: 978-85-752-780-3</p>;
    } else {
      inserirLivro(l);
      navigate("/");
    }
    setErros(erros);
  };
  const handleLivrosForm = (e) => {
    e.preventDefault();
    validate(l);
  };
  return (
    <form className="cadastrarLivros" onSubmit={handleLivrosForm}>
      <h1>Cadastrar Livros</h1>
      <div>
        <div>
          <div className="div_isbn">
            <label>ISBN: </label>
            <input
              type="text"
              name="isbn"
              value={l.isbn}
              onChange={handleOaChange}
              required
            />
            {erros.isbn && <span className="isbn">{erros.isbn} </span>}
          </div>
          <div>
            <label>Título: </label>
            <input
              type="text"
              name="titulo"
              value={l.titulo}
              onChange={handleOaChange}
              required
            />
          </div>
          <div>
            <label>Autor: </label>
            <input
              type="text"
              name="autor"
              value={l.autor}
              onChange={handleOaChange}
              required
            />
            {erros.autor && <span>{erros.autor}</span>}
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}
