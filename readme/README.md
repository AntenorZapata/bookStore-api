# Alarm Checker


### Quick References

- [Project Structure](#project-structure)
- [Project Architecture](#architectural-pattern)
- [Technologies](#technologies)


### Overview

This application has for its objective the testing of the web-socket API of the iFleet Middleware application. For this purpuse, the app create a stable connection with the web-socket server hosted at the Middleware service and illustrate the received data in a visual interface.

## Project Structure

```
├── node_modules                                // node installed modules;
├── public                                      // application public resources;
├── src                                         // application source files;
    ├── assets                                        // images files;
    ├── components                                    // React Components;     
    ├── routes                                        // routing react component;
    ├── screens                                       // main app screens;
    ├── styles                                        // style files;
    ├── App.js                                        // application corecomponent;
    └── index.js                                      // root level component;
├── package-lock.json                           // node auto-generated module 
├── package.json                                // node module package manager;
└── README.md                                   // project README instructions;
```

## Technologies

- [React](https://reactjs.org/)

- [Socket.io](https://socket.io/)

---

## Architectural Pattern

    ContainerView Pattern
    Container - Smart Componnent
    View - Dumb Componnent
