/* run this for api-server 
sudo npm install -g json-server
json-server --watch data.json --port 8080
*/

export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    // todo: we will not hard-code server URL here.
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter) {
  //TODO : on server we  will support multiple values
  // filter ={category:"smartphone"}
  let queryString = '';

  for(let key in filter){
    queryString += `${key}=${filter[key]}&`.toLowerCase()
  }

  return new Promise(async (resolve) =>{
    // todo: we will not hard-code server URL here.
    console.log('http://localhost:8080/products?'+queryString)
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
  }
  );
}
