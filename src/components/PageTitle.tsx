type PageTitleType = {
	title: string;
	description?: string;
};

const PageTitle = ({ title, description }: PageTitleType) => {
	return (
		<div>
			<h1>{title}</h1>
			{!!description && <p>{description}</p>}
		</div>
	);
};

export default PageTitle;
