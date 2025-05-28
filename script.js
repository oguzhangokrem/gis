import L, {Map, TileLayer, Marker, Circle, Polygon, Popup, Control, DomUtil} from 'leaflet';

        const map = new Map('map', {
            zoomControl: false
        }).setView([41.3442, 36.2494], 8);

        const tiles = new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const zoom = new Control.Zoom({
            position: 'topleft',
            zoomInTitle: 'Yakınlaş',
            zoomOutTitle: 'Uzaklaş'
        }).addTo(map);

        const scale = new Control.Scale({
            position: 'bottomleft',
            metric: true,
            imperial: false
        }).addTo(map);
