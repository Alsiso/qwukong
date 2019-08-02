module.exports = {
    port: 3000,
    proxyConfig: [{
        path: '/example',
        config: { target: 'https://www.easy-mock.com/mock/5b864dd0a2ac284c8d7113a0/', changeOrigin: true, }
    }]
}