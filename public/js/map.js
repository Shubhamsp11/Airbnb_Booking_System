	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [85.8246, 20.2960], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

//     console.log(coordinates);
// const marker=new mapboxgl.Marker()
// .setLngLat(coordinates)
// .addTo(map);