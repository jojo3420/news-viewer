import React, { useCallback, useState } from 'react';
import './App.css';
import NewsList from './components/NewsList';
import dotenv from 'dotenv';
import Categories from './components/Categories';

dotenv.config();
// REACT_APP_NEWS_API_URL=https://newsapi.org/v2

function App() {
	return (
		<>
			<Categories />
			<NewsList />
		</>
	);
}

export default App;
