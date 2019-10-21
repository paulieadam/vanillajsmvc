export default {
    async getAlbums() {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        return response.json();
    },

    async getAlbum(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        return response.json();
    }
};