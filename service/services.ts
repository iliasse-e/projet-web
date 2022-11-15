class HttpClient {
    private baseUrl : string  = "https://api.meteo-concept.com/api/location/city?token=MON_TOKEN&insee=35238";
    private token : string = "";

    public async get(city: string) {
        const response = await fetch(`https://api.meteo-concept.com/api/location/${city}?token=`+this.token, {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    }
}