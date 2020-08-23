import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo)
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
    descricao: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  // console.log(categorias);

  return (
    <PageDefault>
      <h2>Cadastro de Vídeo</h2>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        // console.log('categoriaEscolhida', categoriaEscolhida);
        try {
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
            descricao: values.descricao,
          })
  
            .then(() => {
              toast.success('Com sucesso foi cadastrado o vídeo =)')
            });
        }
        catch (error) {
          toast.error('Cadastrar o vídeo possível não foi =(')
        }
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar Vídeo
        </Button>

        <ToastContainer position="bottom-right" autoClose={4000} />
      </form>
      
      <Link to="/cadastro/categoria">
        <Button>  
          Cadastrar Nova Categoria
        </Button>
      </Link>
      
    </PageDefault>
  );
}

export default CadastroVideo;
