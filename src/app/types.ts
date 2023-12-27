export interface postType {
	_id: string;
	title: string;
	description: string;
	tags: [];
	active: boolean;
	trending: boolean;
	photos: [
		{
			secure_url: string;
		}
	];
	createdAt: string;
}
export interface postRespType {
	message: string;
	posts: [];
}
