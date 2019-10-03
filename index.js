import App from "./lib/App.js";

const app = new App("#app");

app.addComponent({
    name: "albums",
    model: {
        albums: []
    },
    view(model) {
        return `<h2>Number of albums ${model.albums.length}`;
    }
});

app.showComponent("albums");