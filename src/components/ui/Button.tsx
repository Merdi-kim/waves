import classNames from 'classnames';
import { ComponentProps, FC } from 'react';

type ButtonProps = ComponentProps<'button'> & {
	title: string;
	variant?: 'primary' | 'secondary';
};

/**
 * Reusable button component
 * @date 6/22/2023 - 11:39:19 PM
 *
 * @param {{ [x: string]: any; }} { ...props }
 * @returns {*}
 */
const Button: FC<ButtonProps> = ({ ...props }) => {
	const { title, variant = 'primary', ...rest } = props;

	/**
	 * Button classname, uses classnames library to merge all the button variant class
	 * @date 6/22/2023 - 11:39:41 PM
	 *
	 * @type {string}
	 */
	const buttonClassname = classNames(
		'bg-[#172554] py-3 px-16 rounded-md transition-all cursor-pointer',
		props.className,
		{
			'text-white hover:bg-white border-2 border-[#172554] hover:text-[#172554]':
				variant === 'primary',
			'text-[#172554] bg-white border-2 border-[#172554] hover:bg-[#172554] hover:text-white':
				variant === 'secondary',
		}
	);

	return (
		// @ts-ignore
		<div {...rest} className={buttonClassname}>
			{title}
		</div>
	);
};

export default Button;
