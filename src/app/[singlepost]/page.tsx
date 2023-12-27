import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getSinglePost } from "../api/Api";
import Image from "next/image";
import RecomendedPost from "../component/RecomendedPost";
import Header from "../component/singlepage/Header";
import { formattedDate } from "../utils";

const SinglePost = async (props: any) => {
	const { post } = await getSinglePost(props?.params.singlepost);

	return (
		<>
			<div>
				<Header />
			</div>
			<div className="flex justify-center px-80">
				<div>
					<h1 className="text-[3rem]">{post?.title}</h1>
					<div className="m-5">
						<div className="capitalize flex">
							<AccountCircleIcon />
							<div className="ml-2">{post?.user?.name}</div>
						</div>
						<div className="mt-5">{formattedDate(post?.createdAt)}</div>
					</div>
					<div className=" mt-10">
						{post?.photos?.length > 0 && (
							<Image
								src={post?.photos[0]?.secure_url}
								width={900}
								height={400}
								alt="post image"
							/>
						)}
					</div>
					<div className="mt-10">{post?.description}</div>
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<RecomendedPost />
			</div>
		</>
	);
};

export default SinglePost;
