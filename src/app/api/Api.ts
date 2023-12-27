const baseUrl = "http://localhost:8000/api/v1/";

export const getSinglePost = async (postId: string) => {
	const res = await fetch(`${baseUrl}post/${postId}`);

	const ans = await res.json();

	return ans;
};
