# alx-client (alx-client)

alx assessment
## Project link
[click me](https://github.com/user/repo/blob/branch/other_file.md)

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
## Repo structure
Sometimes it’s helpful to know what all these different files are for…

```
├── public/                  # pure static assets (directly copied)
├── src/
│   ├── assets/
|   |   ├── mock ── bar-data.js       #charts mock data
|   │   │        └──doughnut-data.js    #charts mock data
|   │   │        └──payment-issues.js   #charts mock data
|   │   └── quasar.variables.styl # Quasar Stylus variables for you to tweak
|   │   └── server.js       # mock api
│   ├── assets/              # dynamic assets (processed by webpack)
│   ├── components/          # .vue components used in pages & layouts
│   ├── css/                 # CSS/Stylus/Sass/... files for your app
|   |   ├── app.styl
|   │   └── quasar.variables.styl # Quasar Stylus variables for you to tweak
│   ├── layouts/MainLayout.vue             # layout .vue files
│   ├── pages/PageDashboard.vue            # page .vue files
│   ├── boot/main.js                # boot files (app initialization code)
│   ├── router/              # Vue Router
|   |   ├── index.js         # Vue Router definition
|   │   └── routes.js        # App Routes definitions
│   ├── store/               # Vuex Store
|   |   ├── index.js         # Vuex Store definition
│   ├── App.vue              # root Vue component of your App
│   └── index.template.html  # Template for index.html
├── src-ssr/                 # SSR specific code (like production Node webserver)
├── src-pwa/                 # PWA specific code (like Service Worker)
├── src-cordova/             # Cordova generated folder used to create Mobile Apps
├── src-electron/            # Electron specific code (like "main" thread)
├── src-bex/                 # BEX (browser extension) specific code (like "main" thread)
├── dist/                    # where production builds go
│   ├── pwa/                 # example when building PWA
│   └── ....
├── quasar.conf.js           # Quasar App Config file
├── babel.config.js          # Babeljs config
├── .editorconfig            # editor config
├── .eslintignore            # ESlint ignore paths
├── .eslintrc.js             # ESlint config
├── .postcssrc.js            # PostCSS config
├── .stylintrc               # Stylus lint config
├── .gitignore               # GIT ignore paths
├── package.json             # npm scripts and dependencies
└── README.md                # readme for your website/App
```
##interfaces
pc view

![alt text](https://github.com/joekabucho/alx-client/blob/main/public/tutorial/CPT2104250942-1904x918.gif?raw=true)

mobile/tab view


![alt text](https://github.com/joekabucho/alx-client/blob/main/public/tutorial/CPT2104251003-1910x932.gif?raw=true)


##tests
The project has dummy api st up uding mirageJS to build mock API requests
you can tests one default request using

```bash
npm run test:unit
```

local test

![alt text](https://github.com/joekabucho/alx-client/blob/main/public/tutorial/local.png?raw=true)


on init the project should call all pi end points and serve the data in json form

![alt text](https://github.com/joekabucho/alx-client/blob/main/public/tutorial/Screenshot%20from%202021-04-25%2009-54-48.png?raw=true)


this will mimick a real actual api server
