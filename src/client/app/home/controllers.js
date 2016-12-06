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
   //  hvm.venue = {
   //    name: 'VML',
   //    img: require('../../assets/images/logos/VML-logo.png'),
   //    url: 'http://vml.com',
   //    address: '250 Richards Rd, Kansas City, MO 64116'
   // }
   // hvm.map = {
   //    center: {
   //       latitude: 39.1206253,
   //       longitude: -94.5927612
   //    },
   //    zoom: 15,
   //    marker: {
   //       id:0,
   //       coords: {
   //          latitude: 39.1206253,
   //          longitude: -94.5927612
   //       }
   //    }
   // };

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
   }, {
      name: 'Gulp',
      url: 'http://gulpjs.com/',
      img: require('../../assets/images/logos/gulp-2x.png')
   }, {
      name: 'Jekyll',
      url: 'http://jekyllrb.com/',
      img: require('../../assets/images/logos/jekyll-logo.png')
   }, {
      name: 'Bundler',
      url: 'http://bundler.io/',
      img: require('../../assets/images/logos/gembundler.png')
   }]
}

function mentorCtrl() {
   let mvm = this;

   mvm.leaders = [{
      name: 'Sarah Duitsman',
      title: 'Director',
      img: require('../../assets/images/mentors/sarahd.jpg'),
      twitter: 'skduits'
   }, {
      name: 'Tamara Copple',
      title: 'Co-Director',
      img: require('../../assets/images/mentors/tamarac.png'),
      twitter: 'Ceiligirl72'
   }, {
      name: 'Jennifer Wadella',
      title: 'Founder',
      img: require('../../assets/images/mentors/jennifer.png'),
      twitter: 'likeOMGitsFEDAY'
   }, {
      name: 'Kayla Hennegin',
      title: 'Director of Curriculum',
      img: require('../../assets/images/mentors/kayla.jpeg'),
      twitter: 'bellafaith'
   }, {
      name: 'Lyndsey Padget',
      title: 'Presentation Director',
      img: require('../../assets/images/mentors/lyndsey.jpg'),
      twitter: 'lyndseypadget'
   }, ]

   mvm.mentors = [{
      name: 'Heather Birdwell',
      title: 'Mentor',
      img: require('../../assets/images/mentors/heather.jpg'),
      twitter: 'kcbusymom'
   }, {
      name: 'Sharyl Bressette',
      title: 'Mentor',
      img: require('../../assets/images/mentors/femalecodertocat.png'),
      twitter: 'codecocktailskc'
   }, {
      name: 'Tatiana Alexenko',
      title: 'Mentor',
      img: require('../../assets/images/mentors/tatiana.jpg'),
      twitter: 'codecocktailskc'
   }, {
      name: 'Gabi Dombrowski',
      title: 'Mentor',
      img: require('../../assets/images/mentors/gabi.jpg'),
      twitter: 'gabdom'
   }, {
      name: 'Ashley Sullins',
      title: 'Mentor',
      img: require('../../assets/images/mentors/ashley.jpeg'),
      twitter: 'ashleycc87'
   }, {
      name: 'Kelsey Leftwich',
      title: 'Mentor',
      img: require('../../assets/images/mentors/kelsey.jpg'),
      twitter: 'kelseyleftwich'
   }, {
      name: 'Sara Heins',
      title: 'Mentor',
      img: require('../../assets/images/mentors/sara.jpg'),
      twitter: 'theheins57'
   }, {
      name: 'Kate Nielsen',
      title: 'Mentor',
      img: require('../../assets/images/mentors/katen.jpeg'),
      twitter: 'KateNielsenkate'
   }, {
      name: 'Amy Kurtz',
      title: 'Mentor',
      img: require('../../assets/images/mentors/amy.jpg'),
      twitter: 'amyontheweb'
   }, {
      name: 'Thuy Copeland',
      title: 'Mentor',
      img: require('../../assets/images/mentors/thuyc.jpg'),
      twitter: 'mindgraffiti'
   }]
}

function topicCtrl () {
   let tvm = this;

   tvm.topics = [{
      month: 'January 14th',
      topic: 'Introduction to HTML'
   }, {
      month: 'February 11th',
      topic: 'Introduction to CSS'
   }, {
      month: 'March 11th',
      topic: 'Introduction to Command Line'
   }, {
      month: 'April 8th',
      topic: 'Introduction to Version Control'
   }, {
      month: 'May 13th',
      topic: 'Introduction to CSS Compilers'
   }, {
      month: 'June 10th',
      topic: 'Introduction to DOM Manipulation with jQuery'
   }, {
      month: 'July 8th',
      topic: 'Programming Fundamentals with JavaScript'
   }, {
      month: 'August 12th',
      topic: 'Introduction to Package Managers'
   }, {
      month: 'September 9th',
      topic: 'Introduction to Front End Architecture'
   }, {
      month: 'October 14th',
      topic: 'Introduction to Single Page Applications'
   }, {
      month: 'November 11th',
      topic: 'Micro-Hackathon'
   }]
}

//January 2017: Basic Website Deployment

export default angular.module('home.controllers', [])
   .controller('homeCtrl', homeCtrl)
   .controller('codeCtrl', codeCtrl)
   .controller('mentorCtrl', mentorCtrl)
   .controller('topicCtrl', topicCtrl);
