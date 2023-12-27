import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Link from "next/link";
const Header = () => {
	return (
		<>
			<div className="flex justify-between items-center px-20 py-5 ">
				<div className="flex justify-center items-center">
					<Link className="text-[2rem]" href="/">
						Read Me
					</Link>
					<div className="ml-5">
						<SearchIcon />
						<input
							type="text"
							placeholder="Search"
							className="border-none outline-none"
						/>
					</div>
				</div>

				<div className="flex">
					<div className="flex">
						<EditNoteIcon />
						<button className="capitalize ">write</button>
					</div>

					<button className="ml-5 capitalize bg-[#1A8917] text-white w-[100px] h-[30px] flex justify-center items-center rounded-lg  ">
						sign up
					</button>
					<button className="ml-5 capitalize">sign in</button>
				</div>
			</div>
		</>
	);
};

export default Header;
