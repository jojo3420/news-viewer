import React, { useCallback, useState } from 'react';
import './App.css';
import NewsList from './components/NewsList';
import dotenv from 'dotenv';
import Categories from './components/Categories';

dotenv.config();

function App() {
	const [activeCategory, setActiveCategory] = useState('all');

	const onActiveCategory = useCallback(title => {
		setActiveCategory(title);
	}, []);

	return (
		<>
			<Categories
				activeCategory={activeCategory}
				onActiveCategory={onActiveCategory}
			/>
			<NewsList activeCategory={activeCategory} />
		</>
	);
}

export default App;
