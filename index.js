import App from "./lib/App.js";
import Router from "./lib/Router.js";
import API from "./lib/API.js";

const app = new App("#app");
const router = new Router(app);

app.addComponent({
    name: "albums",
    model: {
        albums: []
    },
    view(model) {
        return `<h2>Number of albums ${model.albums.length}`;
    },
    async controller(model) {
        const albums = await API.getAlbums();
        console.log(albums);
    }
});

router.addRoute("albums", "^#/albums$");

app.showComponent("albums");