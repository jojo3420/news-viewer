import React, { useState, useCallback, useEffect } from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
// import produce from 'immer';
import usePromise from '../libs/usePromise';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

// const sample = {
// 	title: '제목',
// 	description: 'content',
// 	url: 'https://www.google.com',
// 	urlToImage: 'https://via.placeholder.com/160',
// };

/**
 * 뉴스 목록 프리젠테이션 컴포넌트
 * 책에서는 이 컴포넌트에세 api 요청 인터페이스를 담당한다. 상위 App 이 아니라.
 * 기준을 잡아야 할 필요성이 있는데, 여러 컴포넌트에서 사용되는 거는 그 컴포넌트들의 상위 컴포넌트에서 필수적으로
 * 상태를 관리해야 되고. 그외에는 개별 컴포넌트에서 상태를 가지게 안내 하고 있다.
 * @param props
 * @returns {*}
 * @constructor
 */
function NewsList({ activeCategory }) {
	// const [data, setData] = useState({
	// 	articles: [],
	// 	status: '',
	// 	totalResults: 0,
	// });

	// useEffect(() => {
	// 	// useEffect 후크 내부에서 함수를 만들어서 async 함수를 만들어야한다.
	// 	// useEffect 는 리턴하는 함수가 클린업 이기 때문이라고 한다.
	// 	// 완벽히 이해 (X)
	// 	const fetchData = async () => {
	// 		setLoading(true);
	// 		try {
	// 			const query =
	// 				activeCategory === 'all' ? '' : `&category=${activeCategory}`;
	// 			const url = `${process.env.REACT_APP_NEWS_API_URL}/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}${query}`;
	// 			const response = await axios.get(url);
	// 			const { status, totalResults, articles } = response.data;
	// 			setData(
	// 				produce(data, draft => {
	// 					draft.status = status;
	// 					draft.totalResults = totalResults;
	// 					draft.articles = articles;
	// 				}),
	// 			);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 		setLoading(false);
	// 	};
	//
	// 	fetchData();
	// }, [activeCategory]);

	// 배열을 리턴하므로 순서가 맞추는게 중요함.
	const [loading, error, response] = usePromise(() => {
		const query = activeCategory === 'all' ? '' : `&category=${activeCategory}`;
		const url = `${process.env.REACT_APP_NEWS_API_URL}/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}${query}`;
		return axios.get(url);
	}, [activeCategory]);

	if (loading) return <NewsListBlock>loading...</NewsListBlock>;
	if (error) return <NewsListBlock>error... {error.toString()}</NewsListBlock>;
	// @TODO: 첫번째 렌더링 될때 response 는  null 이므로. ==>  아직 response 값이 설정되지 않음!
	if (!response) return <NewsListBlock>response is null</NewsListBlock>;

	const { articles, status, totalResults } = response.data;
	const data = { articles, status, totalResults };
	if (data.articles.length === 0)
		return <NewsListBlock>현재 뉴스가 없습니다.</NewsListBlock>;

	return (
		<NewsListBlock>
			{data.articles.map(article => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
}

export default NewsList;
