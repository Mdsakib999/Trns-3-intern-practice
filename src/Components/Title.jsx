import React from "react";

const Title = ({ title }) => {
	return (
		<div className="text-xs flex items-center">
			<span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
			<span className="text-gray-500">{title}</span>
		</div>
	);
};

export default Title;
