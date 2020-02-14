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

const sample = {
	title: '제목',
	description: 'content',
	url: 'https://www.google.com',
	urlToImage: 'https://via.placeholder.com/160',
};

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
	return (
		<NewsListBlock>
			<NewsItem article={sample}></NewsItem>
			<NewsItem article={sample}></NewsItem>
			<NewsItem article={sample}></NewsItem>
			<NewsItem article={sample}></NewsItem>
		</NewsListBlock>
	);
}

export default NewsList;
