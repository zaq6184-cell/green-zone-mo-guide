/* Dev only: serve the redesign prototypes at http://localhost:8770 */
process.env.PORT = '8770';
process.argv[2] = require('path').join(__dirname, 'mocks', 'options');
require('../src/serve.js');
