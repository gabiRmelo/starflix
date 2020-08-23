import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import Carregando from '../../../components/Carregando';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const CarregandoAnimacao = styled.div`
  margin: 10px 0 20px 400px;
`

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    cor: '',
    text: '',
    url: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://starflix2020.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault()
    try {
      categoriasRepository
        .create({
          titulo: values.titulo,
          cor: values.cor,
          text: values.text,
          url: values.url,
        })
        .then(() => {
          setCategorias([...categorias, values])
          clearForm()
          toast.success('Com sucesso foi cadastrada a categoria =)')
        })
    } 
    catch (error) {
      toast.error('Cadastrar a categoria não foi possível =(')
    }
  }

  return (
    <PageDefault>
      <h2>
        Cadastro de Categoria:
      </h2>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
            <label>
              Cor:
              <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
              />
            </label>
          </div> */}

      <h3>Link Extra:</h3>

        <FormField
          label="Texto"
          type="text"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar Categoria
        </Button>

        <ToastContainer position="bottom-right" autoClose={4000} />
      </form>

      {categorias.length === 0 && (
        <Carregando/>
      )}


      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        <Button>
          Starflix Home
        </Button>
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

