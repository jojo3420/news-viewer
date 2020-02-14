import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
	{ title: 'business', label: '비지니스' },
	{ title: 'entertainment', label: '엔터테이너먼트' },
	{ title: 'health', label: '건강' },
	{ title: 'science', label: '과학' },
	{ title: 'sports', label: '스포츠' },
	{ title: 'technology', label: '기술' },
];

const CategoriesBlock = styled.div`
	display: flex;
	padding: 1rem;
	width: 768px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
	}
`;

const Category = styled.div`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;
	&:hover {
		color: #495057;
	}
	${props =>
		props.active &&
		css`
			font-weight: 600;
			border-bottom: 2px solid #22b8cf;
			color: #22b8cf;
			&:hover {
				color: #3bc9db;
			}
		`} & + & {
		margin-left: 1rem;
	}
`;

function Categories({ activeCategory, onActiveCategory }) {
	return (
		<CategoriesBlock>
			{categories.map(category => (
				<Category
					key={category.title}
					active={activeCategory === category.title}
					onClick={() => onActiveCategory(category.title)}
				>
					{category.label}
				</Category>
			))}
		</CategoriesBlock>
	);
}

export default Categories;
