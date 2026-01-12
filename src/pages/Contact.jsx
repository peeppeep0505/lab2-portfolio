const Contact = () => {
	return (
		<section className="max-w-4xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Contact</h2>
			<div className="flex items-center space-x-10">
				<div>
				<img
					src="./public/phoebe.jpg"
					alt="Profile"
					className="w-32 h-32 rounded-full mb-4"
				/>
				</div>
				<div>
				<h2 className="text-pink-400">
					Sirikorn Jaisri
				</h2>
				<p className="mb-2">
					email: <a className="" >sirikorn.jaisri@gmail.com</a>
				</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
