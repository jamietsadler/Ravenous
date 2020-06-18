const apikey = '21GcFFNqBndz6Ks7zYjf9FedY0XKrcilrwaQNo_8BLq4Vjm-aOqpMj-B5LoMDARAsaGgig0HORrUlbcgC2SCFVzGBN8_GBUsWVS7CPqht3C5fxiYVBgY8ZMvttTfXnYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
         {headers: {authorization: `Bearer ${apikey}`}}).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zip_code,
                    category: business.categories,
                    rating: business.rating,
                    reviewCount: business.reviewCount
                }))
            }
        })
        }
    }


export default Yelp 