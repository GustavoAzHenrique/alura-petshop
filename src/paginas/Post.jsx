/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { busca } from "../Api/api";

import "../assets/css/post.css";

const Post = () => {
	let history = useHistory();
	const { id } = useParams();

	const [posts, setPosts] = useState({});

	useEffect(() => {
		busca(`/posts/${id}`, setPosts).catch(() => {
			history.push("/404");
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<main className="container flex flex--centro">
			<article className="cartao post">
				<h2 className="cartao__titutlo">{posts.title}</h2>
				<p className="carta__texto">{posts.body}</p>
			</article>
		</main>
	);
};

export default Post;
