import React from "react";
import Header from "./component/Header";
import TrendingSection from "./component/home/TrendingSection";
import InfinitePostSection from "./component/home/InfinitePostSection";
import TagsAndTopics from "./component/home/TagsAndTopics";

const Page = () => {
	return (
		<>
			<Header />
			<TrendingSection />
			<div className="flex p-20">
				<div className="w-[50%]">
					<InfinitePostSection />
				</div>
				<div className="w-[35%] ml-10">
					<TagsAndTopics />
				</div>
			</div>
		</>
	);
};

export default Page;
export function generateMetadata() {
	return {
		title: "Read me home page",
		description: "read me home page description",
	};
}
