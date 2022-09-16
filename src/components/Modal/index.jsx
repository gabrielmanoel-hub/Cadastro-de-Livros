import React, {useState} from 'react'
import './style/style.scss'
import { validacaoIsbn } from '../Regex/regex'
export function Modal({setModal, edit, newData}) {
    const [data, setData] = useState({
        id: newData.id,
        isbn: newData.isbn,
        titulo: newData.titulo,
        autor: newData.autor
    })
    const [erro, setErro] = useState({})
    const getOnchange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value,})
    }
    const validacao = (e) => {
        const err = {}
        const {isbn} = e
        if(!isbn.match(validacaoIsbn)) {
            err.isbn = 'Erro! Formato inválido. ex: 978-85-752-780-3'
        }
        setErro(err)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const {isbn} = data
        if(isbn.match(validacaoIsbn)) {
            edit(data )
            setModal(false)
        }
        validacao(data)
    }
  return (
    <div className='modal'>
        <div>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Isbn</label>
                    <input type="text" name= 'isbn' value={data.isbn} onChange={getOnchange}/>
                {erro.isbn && <p>{erro.isbn}</p>}
                </div>
                <div>
                    <label>Titulo</label>
                    <input type="text" name= 'titulo' value={data.titulo} onChange={getOnchange}/>
                </div>
                <div>
                    <label>Autor</label>
                    <input type="text" name= 'autor' value={data.autor} onChange={getOnchange}/>
                </div>
                <button type= "submit">concluir</button>
            </form>
        </div>
    </div>
  )
}
