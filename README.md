# Charts
A simple ChartMogul Metrics App using AngularJS, Ionic / Cordova

--------------

This is a simple IOS / Android app that ChartMogul customers can use to view their SaaS metrics on their mobile device.

This example app is under development and has not yet been submitted to the App Store.

#### How it works

Charts requires the [API Keys](https://github.com/chartmogul/metrics-api/blob/master/API-Documentation/api.md) from your [ChartMogul](https://chartmogul.com/) account. It requests theyour account's current metrics from ChartMogul's API and reports them in a dashboard. User API keys are stored in Local Storage and do not leave the device.

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
