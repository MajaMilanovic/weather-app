 class City {
     constructor(city) {
         this.name = city.name;
         this.id = city.id;
         this.lon = city.coord.lon;
         this.lat = city.coord.lat;
         this.country = city.country;
     };
 };

 export {
     City
 };