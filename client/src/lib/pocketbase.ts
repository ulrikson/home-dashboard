import PocketBase from 'pocketbase';

// Initialize PocketBase client
// Replace with your PocketBase URL
const pb = new PocketBase('http://127.0.0.1:8090');

// Export the client instance for direct usage
export default pb;
