module.exports = {
    port : process.env.PORT || 3001,
    db : process.env.MONGODB || 'mongodb://localhost:27017/CNE_NOTAS_BDD',
    SECRET : process.env.SECRET || 'TEMPORAL_SECRET'
}