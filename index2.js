const languages = {
  en: {
    'seconds': (time) => {
      return 'Less than a minute ago'
    },
    'minutes': (time) => {
      if (time === 1) {
        return time + ' minute ago'
      }
      return time + ' minutes ago'
    },
    'hours': (time) => {
      if (time === 1) {
        return time + ' hour ago'
      }
      return time + ' hours ago'
    },
    'days': (time) => {
      if (time === 1) {
        return time + ' day ago'
      }
      return time + ' days ago'
    },
    'weeks': (time) => {
      if (time === 1) {
        return time + ' week ago'
      }
      return time + ' weeks ago'
    },
    'months': (time) => {
      if (time === 1) {
        return time + ' month ago'
      }
      return time + ' months ago'
    },
    'years': (time) => {
      if (time === 1) {
        return time + ' year ago'
      }
      return time + ' years ago'
    }
  },
  es: {
    'seconds': (time) => {
      return 'Hace menos de un minuto'
    },
    'minutes': (time) => {
      if (time === 1) {
        return 'Hace ' + time + ' minuto'
      }
      return 'Hace ' + time + ' minutos'
    },
    'hours': (time) => {
      if (time === 1) {
        return 'Hace ' + time + ' hora'
      }
      return 'Hace ' + time + ' horas'
    },
    'days': (time) => {
      if (time === 1) {
        return 'Hace ' + time + ' dia'
      }
      return 'Hace ' + time + ' dias'
    },
    'weeks': (time) => {
      if (time === 1) {
        return 'Hace ' + time + ' semana'
      }
      return 'Hace ' + time + ' semanas'
    },
    'months': (time) => {
      if (time === 1) {
        return 'Hace ' + time + ' mes'
      }
      return 'Hace ' + time + ' meses'
    },
    'years': (time) => {
      if (time === 1) {
        return 'Hace ' + time + ' año'
      }
      return 'Hace ' + time + ' años'
    }
  }
}
function getLapse (lang, milliseconds) {
  const pinned = new Date("1/31/2020 16:59:00").getTime(); //1/31/2020 16:59
  milliseconds = pinned - milliseconds;
  if (milliseconds < 60000) {
    return languages[lang].seconds();
  } else if (milliseconds < 3600000) {
    return languages[lang].minutes(parseInt(milliseconds / 1000 / 60));
  } else if (milliseconds < 86400000) {
    return languages[lang].hours(parseInt(milliseconds / 1000 / 60 / 60));
  } else if (milliseconds < 216000000) {
    return languages[lang].days(parseInt(milliseconds / 1000 / 60 / 60 / 24));
  } else if (milliseconds < 2419200000) {
    return languages[lang].weeks(Number(((milliseconds / 604800000)).toFixed(1)));
  } else if (milliseconds < 29030400000) {
    return languages[lang].months(Number(((milliseconds / 2419200000)).toFixed(1)));
  } else  {
    return languages[lang].years(Number(((milliseconds / 31536000000)).toFixed(1)));
  }
}



let time = getLapse('en', new Date("1/31/2020 16:58:30").getTime());
console.log(time);
time = getLapse('en', new Date("1/31/2020 16:58:00").getTime());
console.log(time);
time = getLapse('en', new Date("1/31/2020 16:48:30").getTime());
console.log(time);
time = getLapse('en', new Date("1/31/2020 15:48:30").getTime());
console.log(time);
time = getLapse('en', new Date("1/30/2020 15:48:30").getTime());
console.log(time);
time = getLapse('en', new Date("1/20/2020 15:48:30").getTime());
console.log(time);
time = getLapse('en', new Date("12/25/2019 15:48:30").getTime());
console.log(time);
time = getLapse('en', new Date("12/25/2018 15:48:30").getTime());
console.log(time);
time = getLapse('en', new Date("1/31/2019 16:59:00").getTime());
console.log(time);


time = getLapse('es', new Date("1/31/2020 16:58:30").getTime());
console.log(time);
time = getLapse('es', new Date("1/31/2020 16:58:00").getTime());
console.log(time);
time = getLapse('es', new Date("1/31/2020 16:48:30").getTime());
console.log(time);
time = getLapse('es', new Date("1/31/2020 15:48:30").getTime());
console.log(time);
time = getLapse('es', new Date("1/30/2020 15:48:30").getTime());
console.log(time);
time = getLapse('es', new Date("1/20/2020 15:48:30").getTime());
console.log(time);
time = getLapse('es', new Date("12/25/2019 15:48:30").getTime());
console.log(time);
time = getLapse('es', new Date("12/25/2018 15:48:30").getTime());
console.log(time);
time = getLapse('es', new Date("1/31/2019 16:59:00").getTime());
console.log(time);