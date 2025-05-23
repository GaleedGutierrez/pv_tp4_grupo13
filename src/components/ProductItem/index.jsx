import DeleteIcon from '@assets/icons/delete-icon.svg';
import EditIcon from '@assets/icons/edit-icon.svg';

import styles from './index.module.css';

/** @import { Product } from '@models/Product.model' */
/**
 * @typedef {Object} ProductItem
 * @property {string} id - The id of the product
 * @property {string} stock - The stock of the product
 * @property {string} description - The description of the product
 * @property {string} price - The price of the product
 * @property {string} [priceWithDiscount] - The discount price of the product (optional)
 * @property {string} [porcentualDiscount] - The porcentual discount of the product (optional)
 * @property {Product[]} products - The list of products
 * @property {React.Dispatch<React.SetStateAction<Product[]>>} setProducts - The function to set the products
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsAddingProduct - The function to set the adding product state
 * @property {React.Dispatch<React.SetStateAction<string>>} setIdProductToEdit - The function to set the id of the product to edit
 */

/**
 * @description ProductSectionHeader component
 * @description It is used to display the header of the product section.
 * @param {ProductItem} props - The component props
 * @returns {import('react').JSX.Element}
 * @example <ProductSectionHeader />
 */

export const ProductItem = ({
	id,
	stock,
	description,
	price,
	priceWithDiscount = undefined,
	porcentualDiscount = undefined,
	products,
	setProducts,
	setIsAddingProduct,
	setIdProductToEdit,
}) => {
	/**
	 * Handle delete product
	 * @param {string} id - The id of the product to delete
	 * @returns {void}
	 */
	const handleDeleteProduct = (id) => {
		const INDEX_DELETE_PRODUCT = products.findIndex(
			(product) => product.id === id,
		);

		if (INDEX_DELETE_PRODUCT === -1) {
			console.error('Product not found');

			return;
		}

		const NEW_PRODUCTS = products.toSpliced(INDEX_DELETE_PRODUCT, 1);

		localStorage.setItem('products', JSON.stringify(NEW_PRODUCTS));
		setProducts(NEW_PRODUCTS);
	};

	/**
	 * Handle edit product
	 * @param {string} id - The id of the product to edit
	 * @returns {void}
	 */
	const handleEditProduct = (id) => {
		setIdProductToEdit(id);
		setIsAddingProduct(true);
	};

	return (
		<article className={styles['product-item']}>
			<div className="flex gap-10">
				<span className={`${styles['product-item__stock']} body-sm`}>
					Stock {stock}
				</span>
				<main className={styles['product-item__main']}>
					<h2 className="heading-md">{description}</h2>
					<div className={styles['product-item__price']}>
						{priceWithDiscount && priceWithDiscount?.length > 0 && (
							<h3
								className={`${
									styles['product-item__price--with-discount']
								} heading-md`}
							>
								<s>${price}</s>
							</h3>
						)}

						<h2 className={styles['product-item__price--current']}>
							${priceWithDiscount ? priceWithDiscount : price}
						</h2>
						{porcentualDiscount && (
							<h4
								className={
									styles['product-item__price--discount']
								}
							>
								{porcentualDiscount}% off
							</h4>
						)}
					</div>
					<span>ID: {id}</span>
				</main>
			</div>
			<div className={styles['product-item__actions']}>
				<button
					className={styles['actions__icon']}
					onClick={() => handleEditProduct(id)}
				>
					<EditIcon />
				</button>
				<button
					className={styles['actions__icon']}
					onClick={() => handleDeleteProduct(id)}
				>
					<DeleteIcon />
				</button>
			</div>
		</article>
	);
};
