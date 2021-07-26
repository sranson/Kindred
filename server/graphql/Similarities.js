const { RESTDataSource } = require("apollo-datasource-rest");

class TastediveAPI extends RESTDataSource {
    constructor() {
        super();
    }
    
    async getSimilarities(term, category) {
        return this.get(`https://tastedive.com/api/similar?q=${term}&type=${category}&info=1&limit=8&k=419186-Similari-8DTISBRP`)
    }
}

module.exports = TastediveAPI;


