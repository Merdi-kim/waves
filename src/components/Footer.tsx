import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import Button from './ui/Button';
const menus = ['Home', 'About', 'Contact'];

const Footer = () => {
	return (
		<footer className="w-full bg-[#9AA3C4]/50 pt-20 pb-16 px-5 mt-10">
			<div className="flex md:flex-col flex-row justify-between max-w-[100rem] mx-auto gap-5 text-[#172554]">
				<div className="flex flex-col md:flex-row justify-start items-start gap-5 md:justify-between md:items-center">
					<p className="uppercase cursor-pointer text-sm md:text-base">
						&#169;
						{new Date().getFullYear()} wave
					</p>
					<h2 className="uppercase font-bold text-3xl">wave</h2>
					<Button title="Try it out" />
				</div>
				<div className="w-full md:border-b md:border-b-gray-400 py-3">
					<ul className="flex flex-col md:flex-row max-w-md justify-center items-center md:justify-between">
						{menus.map((menu, index) => (
							<li
								key={`footer-menu-${index}`}
								className="cursor-pointer hover:font-bold transition-all"
							>
								{menu}
							</li>
						))}
					</ul>
				</div>
				<div className="flex justify-end w-fit md:w-full">
					<div className="max-w-sm w-fit  md:w-full flex-col md:flex-row flex justify-between">
						<FaFacebookF className="w-7 h-7 cursor-pointer" />
						<FaLinkedinIn className="w-7 h-7 cursor-pointer" />
						<FaTwitter className="w-7 h-7 cursor-pointer" />
						<FaYoutube className="w-7 h-7 cursor-pointer" />
						<FaInstagram className="w-7 h-7 cursor-pointer" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
