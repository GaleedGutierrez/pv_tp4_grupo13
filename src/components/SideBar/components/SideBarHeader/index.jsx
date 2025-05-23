import styles from './index.module.css';

/**
 * @description SideBarHeader component
 * @description It is used to display the title of the sidebar.
 * @returns {import('react').JSX.Element}
 * @example <SideBarHeader />
 */
export const SideBarHeader = () => (
	<header className={styles['sidebar-header']}>
		<h1 className={`${styles['sidebar-header__title']} heading-lg`}>
			Programación Visual
		</h1>
		<h2 className={`${styles['sidebar-header__subtitle']} body-md`}>
			Trabajo Práctico N°4
		</h2>
	</header>
);
