import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import Carregando from '../../../components/Carregando';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
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
          descricao: values.descricao,
        })
        .then(() => {
          setCategorias([...categorias, values])
          clearForm()
          //toast.success('Categoria cadastrada com sucesso!')
        })
    } catch (error) {
      //toast.error('Não foi possível cadastar a caterdoria.')
    }
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
            <label>
              Descrição:
              <textarea
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />
            </label>
          </div> */}

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

      <h1>Link Extra:</h1>

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
