import { InputForm } from '@components/InputForm';

import styles from './index.module.css';

/**
 * @typedef {Object} SearchBarProps
 * @property {string} inputValue - The value of the input field
 * @property {function} setInputValue - The function to set the value of the input field
 */

/**
 * @description SearchBar component
 * @description It is used to display the search bar of the sidebar.
 * @description It contains a label and an input field.
 * @param {SearchBarProps} props - The component props
 * @returns {import('react').JSX.Element}
 * @example <SearchBar inputValue="" setInputValue={() => {}} />
 */
export const SearchBar = ({ inputValue, setInputValue }) => (
	<section className={styles['search-bar']}>
		<h3 className="search-bar__title">Busca tu producto</h3>
		<form className={styles['search-bar__form']}>
			<InputForm
				classNameInput="a-input body-md"
				classNameLabel={styles['search-bar__label']}
				inputValue={inputValue}
				label="Podes buscar por ID o nombre"
				name="search"
				placeholder="Zapatos"
				setInputValue={setInputValue}
				type="search"
			/>
		</form>
	</section>
);
