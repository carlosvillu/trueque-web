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
            '<meta name="viewport" content="width=device-width, user-scalable=no">',
            '<link href="//oss.maxcdn.com/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet" type="text/css" />',
            '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
          '</head>',
          '<body>',
            '<div id="root"></div>',
            '<script src="//oss.maxcdn.com/jquery/2.2.0/jquery.min.js"></script>',
            '<script src="//oss.maxcdn.com/semantic-ui/2.1.8/semantic.min.js"></script>',
            '<script src="https://cdn.rawgit.com/anonymous/ab411aaa959cf07202b9/raw/3bfd81f07fb3be4304506837d4b5a83204ee2033/modernizr.js"></script>',
            '<script src="https://cdn.rawgit.com/anonymous/466b36bb4457803338d4/raw/67915fa0a6265d707a7eaa986258eee7230ad753/classie.js"></script>',
            '<script src="https://cdn.rawgit.com/anonymous/a18cbdb0a461368ada31/raw/4b0d530a3013ce8c7fb12c1ee8e1bff6fac86e27/helper.js"></script>',
            '<script src="https://cdn.rawgit.com/anonymous/ab411aaa959cf07202b9/raw/3bfd81f07fb3be4304506837d4b5a83204ee2033/grid3d.js"></script>',
            '<script src="' + data.main + '"></script>',
          '</body>',
        '</html>'
      ].join('')
    }
  }
})
