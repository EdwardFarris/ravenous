const apiKey = "PSxVKZBvKjGJnyBcC7tZFRHIYp_6Sn_WhQEgCjjfGwMJR_xo7aRcW_QPplea7FHqBwl750CZao2hvaZ80XM60yYSpJ49udDnZWY6jEQ-l-24pXPI9ial5iK1fS_DXXYx"

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
    }).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => {
                console.log(business);
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state, 
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    price: business.price,
                    bizUrl: business.url,
                    phone: business.display_phone
                }
                
            });
        }
    });
    
    }
}

 export default Yelp;
