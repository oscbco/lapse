# @oscbco/lapse
Returns how long ago a given date was

## Installation
  ```console
    npm install @oscbco/lapse
  ```

## Parameters
  - language: `en` for english or `es` for spanish. The messages for these two languages are hard coded for now
  - The fist date (expressed in milliseconds). This is expected to be in the past with respect to the second date or to the present. Otherwise `false` is returned.
  - An optional second date (expressed in milliseconds). If omitted the current date will be used.

## Examples
  ```js
  const pinnedDate = new Date("1/31/2020 16:59:00").getTime();

  getLapse('en', new Date("1/31/2020 16:58:30").getTime(), pinnedDate))
  // Less than a minute ago

  getLapse('en', new Date("1/31/2020 16:58:00").getTime(), pinnedDate))
  // 1 minute ago

  getLapse('en', new Date("1/31/2020 15:48:30").getTime(), pinnedDate))
  // 1 hour ago

  getLapse('en', new Date("1/30/2020 15:48:30").getTime(), pinnedDate))
  // 1 day ago


  getLapse('es', new Date("1/20/2020 15:48:30").getTime(), pinnedDate))
  // Hace 1.6 semanas

  getLapse('es', new Date("12/25/2019 15:48:30").getTime(), pinnedDate))
  // Hace 1.3 meses

  getLapse('es', new Date("12/25/2018 15:48:30").getTime(), pinnedDate))
  // Hace 1.1 años

  getLapse('es', new Date("1/31/2019 16:59:00").getTime(), pinnedDate))
  // Hace 1 año

  ```
## Tests
  ```console
    npm test
  ```