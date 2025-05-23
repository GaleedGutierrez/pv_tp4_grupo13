import { SearchBar } from './components/SearchBar';
import { SideBarHeader } from './components/SideBarHeader';
import styles from './index.module.css';

/**
 * @typedef {Object} SideBarProps
 * @property {string} inputValue - The value of the input field
 * @property {function} setInputValue - The function to set the value of the input field
 * @property {string} className - The class name of the sidebar
 */

/**
 * @description SideBar component
 * @description It contains the search bar and the header of the sidebar.
 * @param {SideBarProps} props - The component props
 * @returns {import('react').JSX.Element}
 * @example <SideBar />
 */
export const SideBar = ({ inputValue, setInputValue, className }) => (
	<aside className={`${styles['sidebar']} ${className}`}>
		<SideBarHeader />
		<SearchBar
			inputValue={inputValue}
			setInputValue={setInputValue}
		/>
	</aside>
);
