import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://the-mexican-food-db.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '4607065148msh538f84be39abaaap1a89bdjsnff56451f2e53',
    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}