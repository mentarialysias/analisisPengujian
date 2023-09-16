module.exports = require("./dist");



// Google Analytics tracking code
const script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6D5JD4JDQY';
document.head.appendChild(script);

script.onload = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-6D5JD4JDQY');
};
