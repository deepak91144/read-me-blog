import React from "react";
export const getCategories = async () => {
	const res = await fetch("http://localhost:8000/api/v1/category", {
		cache: "no-store",
	});
	const ans = await res.json();
	return ans;
};
const TagsAndTopics = async () => {
	const ans = await getCategories();
	console.log("cat", ans);
	const { categories } = ans;
	const tags = [
		"programming",
		"data science",
		"technology",
		"self improvements",
		"writting",
		"relationships",
	];
	const topics = [
		"programming",
		"data science",
		"technology",
		"self improvements",
		"writting",
		"relationships",
	];

	return (
		<>
			<div>
				<div>Tags</div>
				<div className="flex justify-between flex-wrap">
					{tags.length > 0 &&
						tags.map((tag, index) => {
							return (
								<>
									<div className="w-[20%] h-[40px] flex justify-center items-center  m-5 bg-red-200 rounded-[10px]">
										{tag}
									</div>
								</>
							);
						})}
				</div>
			</div>
			<div className="mt-10 ">
				<div>Categories</div>
				<div className="flex justify-between flex-wrap">
					{categories.length > 0 &&
						categories.map((cat: any, index: number) => {
							return (
								<>
									<button className="w-[20%] h-[40px] flex justify-center items-center  m-5 bg-red-200 rounded-[10px]">
										{cat?.title}
									</button>
								</>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default TagsAndTopics;
