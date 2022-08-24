import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:5000",
});

export const busca = async (url, setDado) => {
	const resposta = await api.get(url);
	setDado(resposta.data);
};
