import classNames from 'classnames';
import { ComponentProps, FC, ReactElement } from 'react';

type SideBarTitleProps = ComponentProps<'div'> & {
	icon: ReactElement;
	direction?: 'vertical' | 'horizontal';
	title: string;
	isActive?: boolean;
};

/**
 * This component is used in the sidebar components like:
 * 	- NewFeed
 * 	- Followings
 *
 * @date 6/26/2023 - 10:16:57 PM
 *
 * @param {SideBarTitleProps} props
 * @returns {ReactElement}
 */
const SibebarTitle: FC<SideBarTitleProps> = (props) => {
	const {
		icon,
		direction = 'horizontal',
		className,
		title,
		isActive = false,
		...rest
	} = props;

	const sidebarClassName = classNames(
		className,
		'py-2 px-5 rounded-lg text-white cursor-pointer',
		{
			'flex gap-4 items-center': direction === 'horizontal',
			'flex gap-2 justify-center': direction === 'vertical',
			'bg-[#E85B5B] hover:font-bold transition-all': isActive,
		}
	);

	return (
		<div className={sidebarClassName} {...rest}>
			<span>{icon}</span>
			<span>{title}</span>
		</div>
	);
};

export default SibebarTitle;
