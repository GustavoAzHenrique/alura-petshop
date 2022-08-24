import React from "react";
import styled from "styled-components";

import "../assets/css/404.css";

import imagem from "../assets/img/doguito404.svg";

const Imagem = styled.img`
	width: 100%;
	max-width: 25rem;
	margin-top: 1.25rem;
	margin-bottom: 2rem;
`;

const TextoNaoEncontrado = styled.p`
	font-size: var(--fonte-tamanho-naoencontrado-texto);
	margin-bottom: 1rem;
`;

const Pagina404 = () => {
	return (
		<main className="container flex flex--centro flex--coluna">
			<Imagem src={imagem} alt="" />
			<TextoNaoEncontrado>Ops, essa página não e existe!</TextoNaoEncontrado>
		</main>
	);
};

export default Pagina404;
