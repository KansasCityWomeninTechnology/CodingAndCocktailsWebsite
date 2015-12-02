'use strict';

function homeCtrl() {
   let hvm = this;
   //The Nerdery
   // hvm.venue = {
   //    name: 'The Nerdery',
   //    img: require('../../assets/images/logos/Nerdery-Logo-large.png'),
   //    url: 'http://nerdery.com'
   // }
   // hvm.map = { 
   //    center: { 
   //       latitude: 39.105692, 
   //       longitude: -94.581287 
   //    }, 
   //    zoom: 15,
   //    marker: {
   //       id:0,
   //       coords: {
   //          latitude: 39.105692,
   //          longitude: -94.581287
   //       }
   //    }
   // };
   //VML
    hvm.venue = {
      name: 'VML',
      img: require('../../assets/images/logos/VML-logo.png'),
      url: 'http://vml.com'
   }
   hvm.map = { 
      center: { 
         latitude: 39.1206253, 
         longitude: -94.5927612 
      }, 
      zoom: 15,
      marker: {
         id:0,
         coords: {
            latitude: 39.1206253,
            longitude: -94.5927612
         }
      }
   };

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
   }]

   mvm.mentors = [{
      name: 'Kate Nielsen',
      title: 'Mentor',
      img: require('../../assets/images/mentors/katen.jpeg'),
      twitter: 'KateNielsenkate'
   }, {
      name: 'Kayla Hennegin',
      title: 'Mentor',
      img: require('../../assets/images/mentors/kayla.jpeg'),
      twitter: 'bellafaith'
   }, {
      name: 'Amy Kurtz',
      title: 'Mentor',
      img: require('../../assets/images/mentors/amy.jpg'),
      twitter: 'bellafaith'
   }, {
      name: 'Thuy Copeland',
      title: 'Mentor',
      img: require('../../assets/images/mentors/thuyc.jpg'),
      twitter: 'bellafaith'
   }, {
      name: 'Nancy Alpers',
      title: 'Mentor',
      img: require('../../assets/images/mentors/nancy.jpeg'),
      twitter: 'nancyalpers'
   }, {
      name: 'Michelle Tuason',
      title: 'Mentor',
      img: require('../../assets/images/mentors/michelle.png'),
      twitter: ''
   }, {
      name: 'Sarah Withee',
      title: 'Mentor',
      img: require('../../assets/images/mentors/sarahw.jpeg'),
      twitter: ''
   }, {
      name: 'Brenda Riggs',
      title: 'Volunteer',
      img: require('../../assets/images/mentors/brenda.jpeg'),
      twitter: ''
   }]
}



export default angular.module('home.controllers', [])
   .controller('homeCtrl', homeCtrl)
   .controller('codeCtrl', codeCtrl)
   .controller('mentorCtrl', mentorCtrl);