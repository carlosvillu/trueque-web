var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function(data) {
    return {
      'index.html': [
        '<!DOCTYPE html>',
        '<html lang="es">',
          '<head>',
            '<meta charset="utf-8">',
            '<link href="//oss.maxcdn.com/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet" type="text/css" />',
            '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
          '</head>',
          '<body>',
            '<div id="root"></div>',
            '<script src="//oss.maxcdn.com/jquery/2.2.0/jquery.min.js"></script>',
            '<script src="//oss.maxcdn.com/semantic-ui/2.1.8/semantic.min.js"></script>',
            '<script src="' + data.main + '"></script>',
          '</body>',
        '</html>'
      ].join('')
    }
  }
})
