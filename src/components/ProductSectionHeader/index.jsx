import HeaderIcon from '@assets/icons/bulb-2.svg';

import styles from './index.module.css';
/**
 * @typedef {Object} ProductSectionHeaderProps
 * @property {number} accountProducts - The account products
 * @property {React.Dispatch<React.SetStateAction<boolean>>} openAddNewProduct - The function to open the add new product form
 */

/**
 * @description ProductSectionHeader component
 * @description It is used to display the header of the product section.
 * @param {ProductSectionHeaderProps} props - The component props
 * @returns {import('react').JSX.Element}
 * @example <ProductSectionHeader />
 */
export const ProductSectionHeader = ({
	accountProducts,
	openAddNewProduct,
}) => (
	<div className={styles['product-section-header']}>
		<div className={styles['product-section-header__count']}>
			<HeaderIcon />
			<h1
				className={`${
					styles['product-section-header__count--title']
				} heading-md`}
			>
				{accountProducts} Productos
			</h1>
		</div>
		<button
			className="a-button a-button--primary"
			onClick={() => {
				openAddNewProduct(true);
			}}
		>
			+ Agregar nuevo
		</button>
	</div>
);
