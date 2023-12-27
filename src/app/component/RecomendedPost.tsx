import React from "react";
import { getData } from "./home/TrendingSection";
import Image from "next/image";
import { postType } from "../types";
import { formattedDate } from "../utils";

const RecomendedPost = async () => {
	const { posts } = await getData();
	console.log("post", posts);

	const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	for (let i = 0; i < 10; i++) {
		setTimeout(() => console.log(b[i]), 1000);
	}
	for (var i = 0; i < 10; i++) {
		setTimeout(() => console.log(b[i]), 1000);
	}

	return (
		<>
			<div className="">
				<div className="capitalize ml-72">Recomended from read me</div>
				<div className="flex flex-wrap    pl-72">
					{posts?.length > 0 &&
						posts.map((post: postType, index: number) => {
							return (
								<>
									<div className="w-[45%] mt-10">
										<div>
											<Image
												src={
													post?.photos.length > 0
														? post.photos[0].secure_url
														: ""
												}
												width={200}
												height={200}
												alt="post image"
											/>
										</div>
										<div className="mt-5">{post?.title}</div>
										<div className="mt-5">
											{post?.description.slice(0, 50)}...
										</div>
										<div className="mt-5">
											<div>{formattedDate(post?.createdAt)}</div>
										</div>
									</div>
								</>
							);
						})}
				</div>
				<button className="ml-72 mt-10 border border-black w-[300px] h-[40px] rounded-3xl  flex justify-center items-center">
					See More recomendation
				</button>
			</div>
		</>
	);
};

export default RecomendedPost;
