import { postRespType, postType } from "@/app/types";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: "300",
	subsets: ["latin"],
	display: "swap",
});
import Image from "next/image";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const getData = async () => {
	const res = await fetch("http://localhost:8000/api/v1/post", {
		cache: "no-store",
	});
	const ans = await res.json();
	return ans;
};
const TrendingSection = async () => {
	const ans = await getData();

	const { posts }: postRespType = ans;

	return (
		<>
			<div className="px-20 py-10">
				<div className="text-[2rem] capitalize">
					<TrendingUpIcon /> Trending on read me
				</div>
				<div className="flex justify-between flex-wrap">
					{posts.length > 0 &&
						posts.map((post: postType, i: number) => {
							return (
								<>
									<Link
										href={post._id}
										className="w-[30%] mt-10 cursor-pointer"
									>
										<div className="">
											<div className="flex  items-center">
												<Image
													src={post?.photos[0]?.secure_url}
													width={50}
													height={50}
													alt="post image"
													className="rounded-2xl object-contain "
												/>
												<div className={`ml-5 ${roboto.className}`}>
													{post?.title}
												</div>
											</div>

											<div className="font-bold mt-5">
												{post?.description.slice(0, 50)}...
											</div>
											<div className="text-gray-500 text-[12px] mt-5 ">
												{post?.createdAt}
											</div>
										</div>
									</Link>
								</>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default TrendingSection;
