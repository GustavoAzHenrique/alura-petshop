import React, { useState, useEffect } from "react";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import "../assets/css/blog.css";
import {
	Route,
	useParams,
	useRouteMatch,
	Link,
	Switch,
} from "react-router-dom";
import { busca } from "../Api/api";
import SubCategoria from "../paginas/SubCategoria";

const Categoria = () => {
	// useParams e useRouteMatch para deixar a aplicação dinâmica
	// useStates para trabalhar com status, setSubcategoria atualiza o satus.
	const { id } = useParams();
	const { url, path } = useRouteMatch();
	const [subcategorias, setSubCategorias] = useState([]);
	// useEffect realizando uma busca na api para pegar todos os post do crud
	useEffect(() => {
		busca(`/categorias/${id}`, (categoria) => {
			setSubCategorias(categoria.subcategorias);
		});
	}, [id]);
	return (
		<>
			<div className="container">
				<h2 className="titulo-pagina">Pet Notícias</h2>
			</div>

			<ListaCategorias />
			<ul className="lista-categorias container flex">
				{subcategorias.map((subcategoria) => (
					<li
						className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
						key={subcategoria}
					>
						<Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
					</li>
				))}
			</ul>

			{/* Rota Alinhada dentro do componente */}
			<Switch>
				<Route exact path={`${path}/`}>
					<ListaPost url={`/posts?categoria=${id}`} />
				</Route>
				<Route path={`${path}/:subcategoria`}>
					<SubCategoria />
				</Route>
			</Switch>
		</>
	);
};
export default Categoria;
