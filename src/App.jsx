import { SideBar } from '@components/SideBar';
import { useEffect, useState } from 'react';

import styles from './App.module.css';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { ProductSectionHeader } from './components/ProductSectionHeader';

/** @import { Product } from '@models/Product.model' */
/**
 * @description Main App component
 * @returns {import('react').JSX.Element}
 * @example <App />
 */
function App() {
	const [inputValue, setInputValue] = useState('');
	const [isAddingProduct, setIsAddingProduct] = useState(false);
	const [accountProducts, setAccountProducts] = useState(0);
	const [products, setProducts] = useState(/** @type {Product[]} */ ([]));
	const [idProductToEdit, setIdProductToEdit] = useState('');

	useEffect(() => {
		const products = JSON.parse(localStorage.getItem('products') ?? '[]');

		console.info(`products: ${products}`);
		setProducts(products);
	}, []);

	useEffect(() => {
		setAccountProducts(products.length);
		console.info(`accountProducts: ${accountProducts}`);
	}, [products, accountProducts]);

	if (idProductToEdit) {
		return (
			<main className="h-screen flex-center ">
				<ProductForm
					idProductToEdit={idProductToEdit}
					isAddingProduct={setIsAddingProduct}
					setIdProductToEdit={setIdProductToEdit}
					setProducts={setProducts}
				/>
			</main>
		);
	}

	if (isAddingProduct) {
		return (
			<main className="h-screen flex-center ">
				<ProductForm
					isAddingProduct={setIsAddingProduct}
					setProducts={setProducts}
				/>
			</main>
		);
	}

	return (
		<div className={styles['app']}>
			<SideBar
				className={styles['sidebar']}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>

			<main className="flex flex-col gap-6">
				<ProductSectionHeader
					accountProducts={accountProducts}
					openAddNewProduct={setIsAddingProduct}
				/>
				<ProductList
					products={products}
					searchValue={inputValue}
					setIdProductToEdit={setIdProductToEdit}
					setIsAddingProduct={setIsAddingProduct}
					setProducts={setProducts}
				/>
			</main>
		</div>
	);
}

export default App;
