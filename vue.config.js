module.exports = {
    devServer: {
        proxy: 'http://localhost:8080',
        public: 'http://192.168.1.2:8080',
    }
}