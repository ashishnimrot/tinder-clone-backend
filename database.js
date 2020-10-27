import mongoose from 'mongoose'

const connectDB = async () => {
    try{

        console.log(process.env.database )
        const conn = await mongoose.connect(process.env.database,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useFindAndModify: false
        })

        console.log(`MongoDB Conncected: ${conn.connection.host}`)
    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB