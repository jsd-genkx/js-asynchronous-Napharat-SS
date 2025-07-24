/* 
TODO-01: Create a function named fetchPostsThen
         Use fetch('https://dummyjson.com/posts')
         Use .then() to convert response to JSON
         Use another .then() to log the posts data
         Use .catch() to handle errors

TODO-02: Export fetchPostsThen and test it in main.js 
*/
export const fetchPostsThen = () => {
	fetch('https://dummyjson.com/posts')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Failed to fetch posts');
			}
			return response.json();
		})
		.then((data) => {
			console.log('Posts data:', data);
		})
		.catch((error) => {
			console.error('Error occurred:', error);
		});
};
fetchPostsThen();
