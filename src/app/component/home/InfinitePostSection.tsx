import Image from "next/image";
import React from "react";
import { getData } from "./TrendingSection";
import { postRespType, postType } from "@/app/types";

const InfinitePostSection = async () => {
	const ans = await getData();

	const { posts }: postRespType = ans;
	return (
		<>
			<div className="flex flex-col  ">
				{posts.length > 0 &&
					posts.map((post: postType, index: number) => {
						return (
							<>
								<div className="flex justify-between mt-16">
									<div>
										<div className="capitalize font-extrabold">
											{post?.title}
										</div>
										<div className="mt-5 ">
											{post?.description.slice(0, 50)}...
										</div>
										<div className="mt-5">{post?.createdAt}</div>
									</div>
									<div className="mx-10">
										<Image
											src={post?.photos[0]?.secure_url}
											width={200}
											height={200}
											alt="post image"
										/>
									</div>
								</div>
							</>
						);
					})}
			</div>
		</>
	);
};

export default InfinitePostSection;
