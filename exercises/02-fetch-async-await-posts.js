/* 
TODO-01: Create a function named fetchPostsAsync
         Mark it as async
         Use await fetch('https://dummyjson.com/posts')
         Handle response and parse JSON with await
         Log the posts data
         Wrap in try/catch to handle errors

TODO-02: Export fetchPostsAsync and test it in main.js 
*/
// TODO-01: Create a function named fetchPostsAsync
export const fetchPostsAsync = async () => {
	try {
		const response = await fetch('https://dummyjson.com/posts');
		if (!response.ok) {
			throw new Error('Failed to fetch posts');
		}
		const data = await response.json();
		console.log('Posts data:', data);
	} catch (error) {
		console.error('Error occurred:', error);
	}
};
fetchPostsAsync();