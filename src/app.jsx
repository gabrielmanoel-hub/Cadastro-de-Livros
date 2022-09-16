import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TabelaLivros } from './components/TabelaLivros';
import { Menu } from './components/Menu/';
import { NotFound } from './components/NotFound';
import { CadastrarLivros } from './components/CadastrarLivros';

function App() {
  const [livros, setLivro] = useState([])
  const inserirLivro = (l) => {
    l.id = livros.length + 1
    setLivro([...livros, l])
  }
  const editar = (e) => {
    const index = livros.filter((E) => E.id !== e.id)
    setLivro([...index, e].sort((a, b) => a.id - b.id))
  }
  const remove = (r) => {
    const _livros = livros.filter((R) => R.id !== r)
    setLivro([..._livros])
  }
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route 
          path="/" 
          element={<TabelaLivros remove= {remove} editar={editar} livros={livros} />} 
        />
        <Route
          path="/cadastro"
          element={(
            <CadastrarLivros
              inserirLivro={inserirLivro}
              livro={livros}
            />
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
