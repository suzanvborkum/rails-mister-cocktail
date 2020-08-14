import 'bootstrap';
import { initStarRating } from '../plugins/init_star_rating';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

initStarRating();
