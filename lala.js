import axios from "axios";

const flatten = (locations) => {
	const locationsFlattened = locations.map((location) => {
    const { street, coordinates } = location;
    return {
      ...location,
      number: street.number,
      name: street.name,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    }
  });
  
  
  const headers = getHeaders(locations[0]);
  return { locationsFlattened,  headers };
}

const getHeaders = (location) => {
  const keys = Object.keys(location);
  const headers = [];
  
  for (const key of keys) {
    const value = location[key];

    if (typeof value !== 'object') {
      headers.push(key);
    } else {
      headers.push(...getHeaders(value))
    }
  }

  return headers;
}

const getPeople = () => {
  return axios.get('https://randomuser.me/api/?results=20').then(response => {
    return response.data.results;
  }).catch(error => console.log(error));
}

getPeople().then(people => {
	const locations = people.map(({ location }) => location);
  const { locationsFlattened, headers} = flatten(locations);
  
  const newLocations = [...locationsFlattened];
  
  newLocations.sort((a, b) => {
    const valueA = a['name'];
    const valueB = b['name'];
    
    if (valueA < valueB) return -1
    if (valueA > valueB) return 1
    return 0;
  })
  
  
  const filtered = newLocations.filter(location => {
    return JSON.stringify(location).includes('Iran')
  });
    
});

const s = "(1+(4+5+2)-3)+(6+8)";
const asd = s.split(' ').join('');

var arr = s.split(/([\+|\-|\(|\)])/).filter((item) => {
        return item === '' ? false : true;
    });
 

console.log(arr);