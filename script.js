import L, {Map, TileLayer, Marker, Circle, Polygon, Popup, Control} from 'leaflet';

        const osm = new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        const googleHybrid = new TileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0', 'mt1', 'mt2', 'mt3']
        });

        const map = new Map('map', {
            center: [41.3442, 36.2498],
            zoom: 16,
            zoomControl: false,
            layers: [osm]
        });

        const baseMaps = {
            "OpenStreetMap": osm,
            "Google Hybrid": googleHybrid
        };

        const layerControl = new Control.Layers(baseMaps).addTo(map);

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
