import React from "react";
import './style/style.scss'
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>404!</h1>
      <p>
        Sorry.This page does not exist or has been
      </p>
      <Link to="/">Voltar para Tabela de livros</Link>
    </div>
  );
};
