function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = "blue";
                }

                // Mark on the map, this thing is for marker on webpage....
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
                // this will set long and lat. to the given values in data.json file....
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval); 
// this is for update of map after specific interval....