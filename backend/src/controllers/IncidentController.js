const connection = require('../database/connection');

module.exports = {
    async index (req, res){
        //get all incidents
        const incidents = await connection('incidents').select('*');

        return res.json(incidents);
    },

    async create (req, res){
        const {title, description, value} = req.body;
        //get from route
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return res.json({id});
    },

    async delete (req, res){
        //get from route
        const {id} = req.params;

        //get from header
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        //checks if the incident was created by this ong
        if(incident && ong_id == incident.ong_id){
            await connection('incidents').where('id', id).delete();  

            //no content response
            return res.status(204).send();
        }
        else{
            //unauthorized
            return res.status(401).json({error: 'Operation not allowed'});
        }

    }
}