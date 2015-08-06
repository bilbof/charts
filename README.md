# Charts
A simple ChartMogul Metrics App using AngularJS, Ionic / Cordova

--------------

A simple IOS / Android app that ChartMogul customers can use to view their SaaS metrics on their mobile device.

This example app is under development and is not available in the App Store.

### Screenshots

<img src="https://raw.githubusercontent.com/bilbof/charts/86c17363767f923d13b33b96085b7651599cb9fa/login_screen.png" alt="Login"  width="275" height="500"/> <img src="https://github.com/bilbof/charts/blob/86c17363767f923d13b33b96085b7651599cb9fa/app.png?raw=true" alt="App" width="275" height="500"/>

#### How it works

Charts requires the [API Keys](https://github.com/chartmogul/metrics-api/blob/master/API-Documentation/api.md) from your [ChartMogul](https://chartmogul.com/) account. It requests your account's current metrics from ChartMogul's API and reports them in a dashboard. User API keys are stored in Local Storage and do not leave the device.

To do:
- Metrics over time
- Dashboard customisation
- Customer request

### Instructions for running locally

1. Install Ionic / Cordova

`npm install -g cordova ionic`

2. Clone this repo

3. Run locally

```
cd this_repository
ionic serve
```

Punching in `ionic` into the CLI will provide instructions for running this app on your iPhone.
