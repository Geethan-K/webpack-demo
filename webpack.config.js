const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:
        {
            path:path.join(__dirname,'/dist'),
            publicPath: '/dist/',
            filename:'bundle.js'
        
           
        },
    mode:'none',
    module:
        {
            rules:
                [
                    {
                        test:'/\.(png|jpg)$/',
                        use:['file-loader']
                    }
                ]
        }
}