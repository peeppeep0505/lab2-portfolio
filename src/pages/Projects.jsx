const Projects = () => {
	return (
		<section className="max-w-6xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 hover:bg-cyan-50 transition-transform duration-300">
					<h4 className="text-xl mb-2">Project Keystone</h4>
					<p className="mb-4">
						A web application that helps users manage their tasks and projects efficiently.
					</p>
				</div>
				<div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 hover:bg-cyan-50 transition-transform duration-300">
					<h4 className="text-xl mb-2">CRM</h4>
					<p className="mb-4">
						A Customer Relationship Management system designed to help businesses manage interactions with current and potential customers.
					</p>
				</div>
				<div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 hover:bg-cyan-50 transition-transform duration-300">
					<h4 className="text-xl mb-2">Data science project</h4>
					<p className="mb-4">
						A data analysis project that utilizes machine learning techniques to derive insights from large datasets.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Projects;
