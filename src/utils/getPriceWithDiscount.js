/**
 * @description Array of product objects
 * @param {number} price - The price of the product
 * @param {number} [discount] - The discount percentage of the product
 * @returns {number} - The price with discount applied
 */
export const getPriceWithDiscount = (price, discount) => {
	if (!discount) {
		return price;
	}

	return price * (1 - discount / 100);
};
