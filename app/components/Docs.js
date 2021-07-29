import React from 'react';

// DOCS COMPONENT
const Docs = () => {
    return (<div className="docs">
        <h4>
            App Architecture
        </h4>
        <div className="docs-tabspace">
            <p> - This is a plain React app built on 17.0.x version</p>
            <p> - The app is served by an express app with a webpack dev server for HMR</p>
            <p> - The app is bundled using webpack 4, using standard bundling config</p>
            <p> - The app uses react-router to swtich routes</p>
            <p> - This app uses useReducer to imitate redux like behaviour and createContext hook to pass that data store across the app, as of now only the <code>Home</code> Component</p>
            <p> - The app folder is divided into 4 sections</p>
        </div>
        <div className="docs-doublespace">
            <p> 1) Actions : To make all the state change dispatchs as well as external side effect based calls</p>
            <p> 2) Components : All the low level components are placed here</p>
            <p> 3) Containers : These act as high level components who connect to the store as well as filter data to thse components</p>
            <p> 4) Reducers : All state management pieces/reducers </p>
        </div>
        <h4>
            Modules
        </h4>
        <div className="docs-tabspace">
            <p> - Material-UI : Component library</p>
            <p> - CanvasJS : Charting library</p>
            <p> - Mui Date-Picker : Component for date picker, this was used as the browser&apos;s native datepicker don&apos;t have extended support for some browsers IE</p>
            <p> - Jest to run tests </p>
            <p> - Utility libraries like Lodash, Moment, Webpack, eslint </p>
        </div>
        <h4>
            Install and run
        </h4>
        <div className="docs-tabspace">
            <p> - Run <code>npm install</code> to install all dependencies</p>
            <p> - Run <code>npm start</code> to start server, wait until bundle is built and ready to serve</p>
            <p> - On a browser go to <code>localhost:8082</code> to load the app</p>
            <p> - Tested on Node@12 and Node@14</p>
        </div>
        <h4>
            Testing
        </h4>
        <div className="docs-tabspace">
            <p> - Tests can be run by running <code>npm run test</code></p>
            <p> - Currently the actions folder and reducers folders are tested to for data integrity</p>
        </div>
    </div>)
}
export default Docs;