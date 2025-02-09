import 'dotenv/config';

const BaseUrl = process.env.Base_Url;

export const apiUtils = {

    // GET API
    async getAllObject(request){
        const response =  await request.get(BaseUrl);
        return response;
    },


    // POST API
    async createObject(request, objectData) {
        const response = await request.post(BaseUrl, {data: objectData });
        return response;
    },

    //PUT API
    async updateObject(request, objectId, objectData) {
        const response = await request.put(`${BaseUrl}/${objectId}`,{data: objectData });
        return response;
    },

    // GET BY ID API
    async getObjectById(request, objectId){
        const response = await request.get(`${BaseUrl}/${objectId}`);
        return response;
    },

    // DELETE API
    async deleteObject(request, objectId) {
        const response = await request.delete(`${BaseUrl}/${objectId}`);
        return response;
    }
};