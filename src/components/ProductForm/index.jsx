/* eslint-disable security/detect-object-injection */
import AddIcon from '@assets/icons/add-icon.svg';
import { getPriceWithDiscount as getPriceWithDiscountFunction } from '@utils/getPriceWithDiscount';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { InputForm } from '../InputForm';
import styles from './index.module.css';

/** @import { Product } from '@models/Product.model' */
/**
 * @typedef {Object} ProductFormProps
 * @property {React.Dispatch<React.SetStateAction<boolean>>} isAddingProduct - The function to cancel adding a product
 * @property {React.Dispatch<React.SetStateAction<Product[]>>} setProducts - The function to set the products
 * @property {string} [idProductToEdit] - The id of the product to edit (optional)
 * @property {React.Dispatch<React.SetStateAction<string>>} setIdProductToEdit - The function to set the id of the product to edit
 */

/**
 * InputForm component
 * @description It is used to display the input field of the search bar.
 * @param {ProductFormProps} props - The component props
 * @returns {import('react').JSX.Element}
 */
export const ProductForm = ({
	isAddingProduct,
	setProducts,
	idProductToEdit,
	setIdProductToEdit,
}) => {
	/*** @type {Product | undefined} */
	let productToEdit = undefined;

	if (idProductToEdit) {
		/*** @type {Product[]} */
		const PRODUCTS = JSON.parse(localStorage.getItem('products') ?? '[]');

		productToEdit = PRODUCTS.find(
			(product) => product.id === idProductToEdit,
		);
	}

	const [id, setId] = useState(productToEdit ? productToEdit.id : '');
	const [description, setDescription] = useState(
		productToEdit ? productToEdit.description : '',
	);
	const [stock, setStock] = useState(
		productToEdit ? productToEdit.stock : '',
	);
	const [price, setPrice] = useState(
		productToEdit ? productToEdit.price : '',
	);
	const [discount, setDiscount] = useState(
		productToEdit ? productToEdit.discount : '',
	);
	const [priceWithDiscount, setPriceWithDiscount] = useState(
		productToEdit ? productToEdit?.priceWithDiscount : '',
	);
	const getPriceWithDiscount = useCallback(getPriceWithDiscountFunction, []);
	const getPriceWithDiscountMemo = useMemo(
		() => getPriceWithDiscount(Number(price), Number(discount)),
		[price, discount, getPriceWithDiscount],
	);

	useEffect(() => {
		if (price === '' || discount === '') {
			setPriceWithDiscount('');

			return;
		}

		const priceWithDiscount = getPriceWithDiscountMemo;

		setPriceWithDiscount(priceWithDiscount.toFixed(2).replace('.', ','));
		console.info(`priceWithDiscount: ${priceWithDiscount}`);
	}, [price, discount, getPriceWithDiscountMemo]);

	/**
	 * Handle form submission
	 * @param {import('react').FormEvent<HTMLFormElement>} event - The form event
	 * @returns {void}
	 */
	const handleSaveAdding = (event) => {
		event.preventDefault();

		/*** @type {Product[]} */
		const PRODUCTS = JSON.parse(localStorage.getItem('products') ?? '[]');

		if (idProductToEdit) {
			if (!PRODUCTS) {
				return;
			}

			const INDEX_PRODUCT = PRODUCTS.findIndex(
				(product) => product.id === idProductToEdit,
			);

			if (INDEX_PRODUCT === -1) {
				alert('Producto no encontrado');

				return;
			}

			PRODUCTS[INDEX_PRODUCT] = {
				id,
				description,
				stock,
				price,
				priceWithDiscount: priceWithDiscount
					? priceWithDiscount.replace(',', '.')
					: '',
				discount,
			};

			alert('Producto editado correctamente');
			setIdProductToEdit('');
		} else {
			const newProduct = {
				id,
				description,
				stock,
				price,
				priceWithDiscount: priceWithDiscount
					? priceWithDiscount.replace(',', '.')
					: '',
				discount,
			};

			const MATCHING_PRODUCT = PRODUCTS.find(
				(product) => product.id === newProduct.id,
			);

			if (MATCHING_PRODUCT) {
				alert('Ya existe un producto con ese ID');

				return;
			}

			PRODUCTS.push(newProduct);
			alert('Producto agregado correctamente');
		}

		localStorage.setItem('products', JSON.stringify(PRODUCTS));

		setProducts(PRODUCTS);
		setId('');
		setDescription('');
		setStock('');
		setPrice('');
		setDiscount('');
		setPriceWithDiscount('');
		isAddingProduct(false);
	};

	/**
	 * Handle cancel button click
	 * @param {import('react').MouseEvent<HTMLButtonElement>} event - The form event
	 * @returns {void}
	 */
	const handleCancelAdding = (event) => {
		event.preventDefault();
		setId('');
		setDescription('');
		setStock('');
		setPrice('');
		setDiscount('');
		setPriceWithDiscount('');
		isAddingProduct(false);

		if (idProductToEdit) {
			setIdProductToEdit('');
		}
	};

	return (
		<div className={styles['product-form__container']}>
			<div className={styles['product-form__icon']}>
				<AddIcon />
			</div>
			<h1>Agrega un nuevo producto</h1>
			<form
				className={styles['product-form']}
				onSubmit={handleSaveAdding}
			>
				<div>
					<h3>ID</h3>
					<InputForm
						required
						classNameInput="a-input body-md"
						classNameLabel="flex flex-col"
						inputValue={id}
						label="Ingresa el ID del producto"
						name="id"
						placeholder="123456789"
						setInputValue={setId}
						type="number"
					/>
				</div>
				<div>
					<h3>Descripción</h3>
					<InputForm
						required
						classNameInput="a-input body-md"
						classNameLabel="flex flex-col"
						inputValue={description}
						label="Ingresa la descripción del producto"
						name="description"
						placeholder="Zapatos"
						setInputValue={setDescription}
						type="text"
					/>
				</div>
				<div>
					<h3>Stock</h3>
					<InputForm
						required
						classNameInput="a-input body-md"
						classNameLabel="flex flex-col"
						inputValue={stock}
						label="Ingresa el stock del producto"
						name="stock"
						placeholder="10"
						setInputValue={setStock}
						type="number"
					/>
				</div>
				<div>
					<h3>Precio</h3>
					<InputForm
						required
						classNameInput="a-input body-md"
						classNameLabel="flex flex-col"
						inputValue={price}
						label="Ingresa el precio del producto $"
						name="price"
						placeholder="$10.000"
						setInputValue={setPrice}
						type="number"
					/>
				</div>
				<div>
					<h3>Descuento</h3>
					<InputForm
						classNameInput="a-input body-md"
						classNameLabel="flex flex-col"
						inputValue={discount ?? ''}
						label="Ingresa el descuento del producto % (opcional)"
						name="discount"
						placeholder="25%"
						setInputValue={setDiscount}
						type="number"
					/>
				</div>
				<div>
					<h3>
						Precio final a publicar $
						{priceWithDiscount && priceWithDiscount.length > 0
							? priceWithDiscount
							: price}
					</h3>
				</div>
				<div className={styles['product-form__actions']}>
					<button
						className="a-button a-button--tertiary"
						onClick={handleCancelAdding}
					>
						Cancelar
					</button>
					<button className="a-button a-button--primary">
						{idProductToEdit ? 'Guardar' : 'Agregar'}
					</button>
				</div>
			</form>
		</div>
	);
};
