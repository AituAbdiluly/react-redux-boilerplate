# React Redux Boilerplate

<img alt="Logo" align="right" src="http://www.clker.com/cliparts/N/0/4/q/4/R/react-redux.svg.hi.png" width="35%" />

This boilerplate consists of packages such as:

- [React 17](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://styled-components.com/)
- [Webpack 5](https://webpack.js.org/)

## Clone and install:

```sh
git clone https://github.com/AituAbdiluly/react-redux-boilerplate.git
cd react-redux-boilerplate
```

Here is structure of the boilerplate:

```
react-redux-boilerplate
├── README.md
├── package.json
├── .gitignore
├── .babelrc
├── .prettierrc
├── .webpack.config.js
├── public
│   ├── index.html
└── src
    ├── App.jsx
    ├── index.js
    ├── redux
	│   ├── root-reducer.js
	│   ├── store.js
	│   └── sample // this is only sample, feel free to remove this directory
        │	├── sample.reducers.js
	│   	├── sample.actions.js
	│   	├── store.types.js
    	└── components
	    ├── global.styles.js
	    └── sample // this is only sample, feel free to remove this directory
		    ├── sample.components.js
		    ├── sample.styles.js
```

### npm

```sh
npm install
npm start
```

### Yarn

```sh
yarn install
yarn start
```

## Build:

Builds the app for production to the `build` folder.

### npm

```sh
npm run build
```

### Yarn

```sh
yarn build
```
