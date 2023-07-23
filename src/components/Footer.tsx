import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const menus = ['Home', 'About', 'Contact'];

function Footer() {
	const router = useRouter();

	return (
		<footer id="contact" className="w-full pt-20 pb-16 px-5 mt-10">
			<div className="flex md:flex-col flex-row justify-between max-w-[1140px] mx-auto gap-5 ">
				<div className="flex flex-col md:flex-row justify-start items-start gap-5 md:justify-between md:items-center mb-5">
					<h2
						onClick={() => router.push('/')}
						className="uppercase font-bold text-3xl"
					>
						wave
					</h2>
					<button
						onClick={() => router.push('/home')}
						className="bg-[#BF1A1A] font-bold text-normal text-white rounded-3xl py-3 px-10"
					>
						Try it out
					</button>
				</div>
				<div className="w-full md:border-b md:border-b-gray-400 py-3 flex items-center">
					<ul className="flex flex-col md:flex-row max-w-md justify-center items-center md:justify-center md:gap-10">
						{menus.map((menu, index) => (
							<li
								key={`footer-menu-${index}`}
								className="cursor-pointer hover:font-bold transition-all"
							>
								{menu}
							</li>
						))}
					</ul>
					<div className="flex justify-end w-fit md:w-full">
						<div className="max-w-sm w-fit md:w-full flex-col md:flex-row flex justify-between">
							<FaFacebookF className="w-7 h-7 cursor-pointer" />
							<FaLinkedinIn className="w-7 h-7 cursor-pointer" />
							<FaTwitter className="w-7 h-7 cursor-pointer" />
							<FaYoutube className="w-7 h-7 cursor-pointer" />
							<FaInstagram className="w-7 h-7 cursor-pointer" />
						</div>
					</div>
				</div>
				<p className="text-center">&copy;{new Date().getFullYear()} WAVE</p>
			</div>
		</footer>
	);
}

export default Footer;
