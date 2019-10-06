export default {
    async getAlbums() {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        return response.json();
    }
};