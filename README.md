![image](https://cloud.githubusercontent.com/assets/1544557/19449642/44435154-945b-11e6-889e-40e8896e3f12.png)

# Hello RxJS

This project showcases RxJS observables and operators and how they can be combined to perform tasks of varying difficulty. Also included is one slightly more involved example that combines the power of observables with a realtime database via Firebase.

## Prerequisites
* You will need to have NodeJS and NPM installed from [nodejs.org](https://nodejs.org)
* If you want to run the Firebase example, you will need a Google account

## Getting the code
Run the following in the terminal or command prompt to download and enter the project:
```bash
git clone https://github.com/UltimateAngular/hello-rxjs.git
cd hello-rxjs
```

## Running the app
Run the following commands in the project directory to install dependencies and start the app:

```bash
npm i
npm start # or ng serve
```

Then navigate to http://localhost:4200 and the app will be running.

# Firebase

In order to view the Firebase example, you will need to take a couple extra steps.

## Setting up a Firebase account
Navigate to https://firebase.google.com/ and click the "GET STARTED FOR FREE" button. Once you have signed in via Google, you will have access to your Firebase console.

## Setting up Firebase in the Angular app
From your [Firebase console](https://console.firebase.google.com/), click "CREATE NEW PROJECT". Then fill in the necessary details and go to that project's dashboard. Then click the "Add Firebase To Your Web App" button toward the top-right of the screen.

Open the project in a code editor and navigate to `src > app > app.module.ts`. Then replace the data in the `firebaseConfig` constant with the information showing in your project's dashboard. Last but not least, save the file.

> **Note:** make sure you are in one of the `08-realtime-streams` branches, otherwise you will not see the constant in `app.module.ts`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
