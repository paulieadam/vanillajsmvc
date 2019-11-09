import App from "./lib/App.js";
import Router from "./lib/Router.js";
import API from "./lib/API.js";

const app = new App("#app");
const router = new Router(app);

const albumTemplate = (album) => `
    <section>
        <a href="#/albums/${album.id}">
            <h3>${album.id}</h3>
        </a>
    </section>
`;

app.addComponent({
    name: "albums",
    model: {
        albums: []
    },
    view(model) {
        return `
            <ul>
                ${model.albums.map(album => `<li>${albumTemplate(album)}</li>`).join('')}
            </ul>
        `;
    },
    async controller(model) {
        const albums = await API.getAlbums();
        model.albums = albums;
    }
});

app.addComponent({
    name: "album",
    model: {
        album: {}
    },
    view(model) {
        return albumTemplate(model.album);
    },
    async controller(model) {
        const album = await API.getAlbum(router.params[1]);
        model.album = album;
    }
});

router.addRoute("albums", "^#/albums$");
router.addRoute("album", "^#/albums/([0-9]+)$");
