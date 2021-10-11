exports.appSettings = {
    db: (function(){
        return process.env.MONGODB_CONNECTION || 'mongodb://172.18.0.2:27017/contentdb';
    })()
};
