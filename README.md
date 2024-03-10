# hcard-builder

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## A note on file structure
All components can be found under components directory. The purpose of `BaseControls` is to have a directory dedicated to maintain, develop and scale a UI library. Basically to have a design system for consistecy and better documentation.

## A note on unit tests
All the files that Jest can recognise are formatted with **.test.js
You may also have reaslised that related tests for a component are exactly in the same place that
component can be found. This is different from the traditional way of having a `tests` directory in the project and write all the tests there. Descion is made to make development expereince better by removing the hassle for navigating through the project to read a component implementation and again navigating in the `tests` directory to find related tests. You can find more information in this article from Kent C. Dodds who is a test specialist and a professional trainer who I adopted a lot of methodolgies when writing tests: [avoid-nesting-when-youre-testing](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)

## A note on third party packages
This project is very lite with third party packages, all the solutions are custome in order to improve performace. The only third party package at this stage(beside core Vue ecosystem packages) is Vuelidate which a project benefits massively from form validation logics.


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
