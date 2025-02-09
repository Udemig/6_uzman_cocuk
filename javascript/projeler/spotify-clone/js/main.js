import { getPopular } from "./api.js";
import { elements } from "./ui.js";

const songs = await getPopular();

console.log(songs);
