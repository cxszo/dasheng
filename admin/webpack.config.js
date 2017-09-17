module.exports = function(env) {
    console.log(env)
    return require(`./config/webpack.${env}.js`)
}