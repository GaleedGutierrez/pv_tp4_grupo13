import { ProductItem } from '../ProductItem';

/** @import { Product } from '@models/Product.model' */
/**
 * @typedef {Object} ProductListProps
 * @property {Product[]} products - The list of products
 * @property {React.Dispatch<React.SetStateAction<Product[]>>} setProducts - The function to set the products
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsAddingProduct - The function to set the adding product state
 * @property {React.Dispatch<React.SetStateAction<string>>} setIdProductToEdit - The function to set the id of the product to edit
 * @property {string} searchValue - The search value
 */

/**
 * @description ProductSectionHeader component
 * @description It is used to display the header of the product section.
 * @param {ProductListProps} props - The component props
 * @returns {import('react').JSX.Element}
 */

export const ProductList = ({
	products,
	setProducts,
	setIsAddingProduct,
	setIdProductToEdit,
	searchValue = '',
}) => {
	const filteredProducts = products.filter((product) => {
		const lowerCaseSearchValue = searchValue.toLowerCase();

		return (
			product.description.toLowerCase().includes(lowerCaseSearchValue) ||
			product.id.toLowerCase().includes(lowerCaseSearchValue)
		);
	});

	return (
		<ul className="flex flex-col gap-5">
			{filteredProducts.map((product) => (
				<li
					key={product.id}
					className=""
				>
					<ProductItem
						description={product.description}
						id={product.id}
						porcentualDiscount={product.discount}
						price={product.price}
						priceWithDiscount={product.priceWithDiscount}
						products={products}
						setIdProductToEdit={setIdProductToEdit}
						setIsAddingProduct={setIsAddingProduct}
						setProducts={setProducts}
						stock={product.stock}
					/>
				</li>
			))}
		</ul>
	);
};
