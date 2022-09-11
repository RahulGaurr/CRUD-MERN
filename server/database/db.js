import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-7qpb6ca-shard-00-00.1lzcncs.mongodb.net:27017,ac-7qpb6ca-shard-00-01.1lzcncs.mongodb.net:27017,ac-7qpb6ca-shard-00-02.1lzcncs.mongodb.net:27017/?ssl=true&replicaSet=atlas-or24cu-shard-0&authSource=admin&retryWrites=true&w=majority`;
try {
    await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true})
    console.log('Database connected successfully')
} catch (error) {
    console.log('Error while connecting with the database', error)
}
}

export default Connection;