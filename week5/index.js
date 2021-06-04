import HikesController from "./hikeController.js";

const hike = new HikesController('hikes');
window.addEventListener('load', () =>{
    hike.showHikeList();
});


