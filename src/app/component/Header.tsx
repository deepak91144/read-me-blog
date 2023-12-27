import React from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
const Header = () => {
	return (
		<>
			<div className="bg-yellow-500 h-[70vh]  relative">
				<div className=" px-20 flex justify-between h-[20%] border border-b-2 border-black  items-center">
					<Link className="text-[2rem]" href="/">
						Read Me
					</Link>
					<div>Signin</div>
				</div>
				<div className="px-20 absolute top-[35%]">
					<div className="text-[2.5rem] capitalize  ">
						<span className="text-[5rem]">R</span>eading is a precious habbit
					</div>
					<div className="text-[1.5rem] mx-5">
						Discover stories, thinking, and expertise from writers on any topic.
					</div>
					<button className="bg-black w-[200px] h-[50px] text-white mt-5 capitalize rounded-md ">
						Start reading
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
