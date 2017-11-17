'use strict';

function homeCtrl() {
   let hvm = this;
   //The Nerdery
   hvm.venue = {
      name: 'The Nerdery',
      img: require('../../assets/images/logos/Nerdery-logo.png'),
      url: 'http://nerdery.com',
      address: '100 E 7 St #401, Kansas City, MO 64106'
   }
   hvm.map = {
      center: {
         latitude: 39.105692,
         longitude: -94.581287
      },
      zoom: 15,
      marker: {
         id:0,
         coords: {
            latitude: 39.105692,
            longitude: -94.581287
         }
      }
   };
   //VML
  //   hvm.venue = {
  //     name: 'VML',
  //     img: require('../../assets/images/logos/VML-logo.png'),
  //     url: 'http://vml.com',
  //     address: '250 Richards Rd, Kansas City, MO 64116'
  //  }
  //  hvm.map = {
  //     center: {
  //        latitude: 39.1206253,
  //        longitude: -94.5927612
  //     },
  //     zoom: 15,
  //     marker: {
  //        id:0,
  //        coords: {
  //           latitude: 39.1206253,
  //           longitude: -94.5927612
  //        }
  //     }
  //  };

}

homeCtrl.$inject = []

function codeCtrl() {
   let cvm = this;
   cvm.tools = [{
      name: 'Github',
      url: 'https://github.com/',
      img: require('../../assets/images/logos/femalecodertocat.png')
   }, {
      name: 'Yeoman',
      url: 'http://yeoman.io/',
      img: require('../../assets/images/logos/yo.png')
   }, {
      name: 'Sass',
      url: 'http://sass-lang.com/',
      img: require('../../assets/images/logos/logo-sass.png')
   },{
      name: 'Angular',
      url: 'https://angular.io/',
      img: require('../../assets/images/logos/angular.png')
   }]
}

function mentorCtrl() {
   let mvm = this;

   mvm.leaders = [{
      name: 'Sarah Duitsman',
      title: 'Director',
      img: require('../../assets/images/mentors/sarah.png'),
      twitter: 'skduits'
   }, {
      name: 'Jennifer Wadella',
      title: 'Founder',
      img: require('../../assets/images/mentors/jennifer.png'),
      twitter: 'likeOMGitsFEDAY'
   }, {
      name: 'Kayla Hennegin',
      title: 'Curriculum Director',
      img: require('../../assets/images/mentors/kayla.png'),
      twitter: 'bellafaith'
   }, {
      name: 'Lyndsey Padget',
      title: 'Presentation Director',
      img: require('../../assets/images/mentors/lyndsey.png'),
      twitter: 'lyndseypadget'
   }, {
      name: 'Gabi Dombrowski',
      title: 'Mentor Director',
      img: require('../../assets/images/mentors/gabi.jpg'),
      twitter: 'gabdom'
   }]

   mvm.mentors = [{
      name: 'Tamara Copple',
      title: 'Mentor',
      img: require('../../assets/images/mentors/tamara.png'),
      twitter: 'Ceiligirl72'
   }, {
      name: 'Heather Birdwell',
      title: 'Mentor',
      img: require('../../assets/images/mentors/heather.jpg'),
      twitter: 'kcbusymom'
   }, {
      name: 'Tatiana Alexenko',
      title: 'Mentor',
      img: require('../../assets/images/mentors/tatiana.jpg'),
      twitter: 'codecocktailskc'
   }, {
      name: 'Ashley Sullins',
      title: 'Mentor',
      img: require('../../assets/images/mentors/ashley.jpeg'),
      twitter: 'ashleycc87'
   }, {
      name: 'Sara Heins',
      title: 'Mentor',
      img: require('../../assets/images/mentors/sara.jpg'),
      twitter: 'theheins57'
   }, {
      name: 'Ashley Holbrook',
      title: 'Mentor',
      img: require('../../assets/images/mentors/ashleyh.jpg'),
      twitter: 'ultralovets'
   }, {
      name: 'Amy Norris',
      title: 'Mentor',
      img: require('../../assets/images/mentors/amy.jpg'),
      twitter: 'amynorris'
   }, {
      name: 'Rachel Hathaway',
      title: 'Mentor',
      img: require('../../assets/images/mentors/rachel.jpg'),
      twitter: 'codecocktailskc'
   }, {
      name: 'Muriel Green',
      title: 'Mentor',
      img: require('../../assets/images/mentors/muriel.jpg'),
      twitter: 'murlgreen1'
   }]
}

function topicCtrl () {
   let tvm = this;

   tvm.topics = [{
      month: 'January 13th',
      topic: 'Introduction to HTML',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-html-tickets-39425679268?aff=ccweb'
   },{
      month: 'February 10th',
      topic: 'Introduction to CSS',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-css-tickets-39470123201?aff=ccweb'
   },{
      month: 'March 10th',
      topic: 'Introduction to Command Line',
      url: 'https://www.eventbrite.com/e/coding-cocktails-introduction-to-command-line-tickets-39470265627?aff=ccweb'
   },{
      month: 'April 14th',
      topic: 'Introduction to Version Control',
      url: 'https://kcwit.eventbrite.com'
   },{
      month: 'May 12th',
      topic: 'Introduction to Front End Architecture',
      url: 'https://kcwit.eventbrite.com'
   },{
      month: 'June 9th',
      topic: 'Programming Concepts 101: Introduction to JavaScript',
      url: 'https://kcwit.eventbrite.com'
   },{
      month: 'July 14th',
      topic: 'Programming Concepts 102: A deeper dive into JavaScript',
      url: 'https://kcwit.eventbrite.com'
   },{
      month: 'August 11th',
      topic: 'Introduction to Package Managers',
      url: 'https://kcwit.eventbrite.com'
   },{
      month: 'September 8th',
      topic: 'Server-side APIs: Node.js, REST & SOAP',
      url: 'https://kcwit.eventbrite.com'
   },{
      month: 'October 13th',
      topic: 'Introduction to Single Page Applications',
      url: 'https://kcwit.eventbrite.com'
   },{
      month: 'November 10th',
      topic: 'Micro-Hackathon',
      url: 'https://kcwit.eventbrite.com'
   }]
}

function finaidCtrl() {
   let fvm = this;
   fvm.logos = [{
      name: 'Kansas City Women in Technology',
      url: 'http://kcwomenintech.org/',
      img: require('../../assets/images/logos/kcwit_logo_white.png')
   },{
      name: 'Github',
      url: 'https://github.com/',
      img: require('../../assets/images/logos/GitHub_Logo.png')
   },]
}

export default angular.module('home.controllers', [])
   .controller('homeCtrl', homeCtrl)
   .controller('codeCtrl', codeCtrl)
   .controller('mentorCtrl', mentorCtrl)
   .controller('topicCtrl', topicCtrl)
   .controller('finaidCtrl', finaidCtrl);
