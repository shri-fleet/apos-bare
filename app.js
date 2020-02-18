var path = require('path');

var apos = require('apostrophe')({
  shortName: 'test-lug',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }

  },
  
  // This configures our default page template
  'apostrophe-pages': {
    types: [
      //This is the new section
      {
        name: 'default',
        label: 'Sendhuraan New Template'
      },
      //The rest is what what was there already
      {
        name: 'home',
        label: 'Home'
      },
    ]
  }
});
