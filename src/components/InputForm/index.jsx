/**
 * @typedef {Object} InputFormProps
 * @property {string} label - The label of the input field
 * @property {string} name - The name of the input field
 * @property {string} placeholder - The placeholder of the input field
 * @property {string} type - The type of the input field
 * @property {string} classNameInput - The class name of the input field
 * @property {string} classNameLabel - The class name of the label
 * @property {string} inputValue - The value of the input field
 * @property {string} [errorMessage] - The error message to display
 * @property {string} [classNameError] - The class name of the error message
 * @property {boolean} [required] - Indicates if the input field is required
 * @property {(event: import('react').ChangeEvent<HTMLInputElement>) => void} [handleInputOnChange] - The function to call when the input value changes
 * @property {function} setInputValue - The function to set the value of the input field
 */

/**
 * InputForm component
 * @description It is used to display the input field of the search bar.
 * @param {InputFormProps} props - The component props
 * @returns {import('react').JSX.Element}
 * @example <InputForm
 * 	label="Podes buscar por ID o nombre"
 * 	name="search"
 * 	placeholder="Zapatos"
 * 	type="search"
 * 	classNameInput="input"
 * 	classNameLabel="label"
 * 	inputValue=""
 * 	setInputValue={() => {}}
 * />
 */
export const InputForm = ({
	label,
	name,
	placeholder,
	type,
	classNameInput,
	classNameLabel,
	inputValue,
	setInputValue,
	errorMessage,
	classNameError,
	handleInputOnChange = (event) => setInputValue(event.target.value),
	required = false,
}) => (
	<label
		className={classNameLabel}
		htmlFor={name}
	>
		<span>{label}</span>
		<input
			className={classNameInput}
			id={name}
			name={name}
			placeholder={placeholder}
			required={required}
			type={type}
			value={inputValue}
			onChange={handleInputOnChange}
		/>
		<span className={`${classNameError} a-input__error-message`}>
			{errorMessage}
		</span>
	</label>
);
