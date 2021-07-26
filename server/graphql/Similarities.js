const { RESTDataSource } = require("apollo-datasource-rest");


// class JobsApi
class TastediveAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://tastedive.com/api/similar?q=insecure&type=shows&info=1&limit=8";
    }

    // async getAllJobs
    async getSimilarities() {
        return this.get("")
    }
}

module.exports = TastediveAPI;