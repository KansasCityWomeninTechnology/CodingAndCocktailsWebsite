'use strict';

function sessionsCtrl() {
   let svm = this;
   svm.sessions = [{
      title: 'Coding & Cocktails - The Tools',
      description: 'This is a reference for the developer tools we will be using in class and how to configure them.',
      id: 'tools',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/TheTools.pdf')
      }] 
      }, {
      title: 'Mid Year Review',
      description: 'This session we take the time to solidify our understanding and practice what we have learned so far.',
      date: '06/11/2016',
      id: 'review',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session10Worksheet.pdf')
      },
      {
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/MidYearReview'
      }] 
      }, {
      title: 'Introduction to JavaScript using jQuery',
      description: 'This session covers what Javascript and jQuery are, why they are important to front-end developers and how to incorporate them in our websites.',
      date: '05/14/2016',
      id: 'jQuery',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/jQueryWorksheet.pdf')
      },
      {
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/jQueryIntro'
      }] 
      }, {
      title: 'Introduction to CSS Compilers',
      description: 'This session covers CSS Compilers: what they are, how they work and how they help make your styling development easier.',
      date: '04/09/2016',
      id: 'cssCompilers',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/CSSCompilerWorksheet.pdf')
      },
      {
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/CSSCompilers'
      }] 
      }, {
      title: 'Introduction to Version Control',
      description: 'This session covers version control using Git and why it is so important as well as exploring GitHub.',
      date: '03/12/2016',
      id: 'versionControl',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session7Worksheet.pdf')
      },
      {
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/GitBasics'
      }] 
      }, {
      title: 'Introduction to the Command Line',
      description: 'This session covers what we use the command line for, why we use the command line along with some common commands.',
      date: '02/13/2016',
      id: 'commandLine',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session6Worksheet.pdf')
      },
      {
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/CommandLine'
      }] 
      }, {
      title: 'Introduction to HTML & CSS',
      description: 'This session covers HTML & CSS basics.',
      date: '01/09/2016',
      id: 'htmlCss',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session5Worksheet.pdf')
      },
      {
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/IntroToHTMLAndCSS/#/'
      }] 
      }, {
      title: 'Setting up Your Dev Environment',
      description: 'This session covers how to set up your development environment and learning tools and techniques to help your workflow.',
      date: '10/10/2015',
      id: 'devEnv',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session4Worksheet.pdf')
      },
      {
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/SettingUpYourDevEnvironment/#/'
      }] 
      }, {
      title: 'Intro to Web Concepts',
      description: 'This session covers the fundamentals of web development.',
      date: '08/08/2015',
      id: 'webConcepts',
      links: [{
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/IntroToWebConcepts/'
      }] 
      },  {
      title: 'Build a Blog with Jekyll',
      description: 'Last session we got familiar with the command line and installing tools to help us build websites. This session we’re going to create our own blogs using a tool called Jekyll.​',
      date: '06/13/2015',
      id: 'jeckyllBlog',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session2Worksheet.pdf')
      }] 
      }, {
      title: 'Intro to Modern Web Apps with Yeoman',
      description: 'To create the web applications of today, we have to get together the tools we need to build them. HTML, CSS, and JavaScript are the basic building blocks of web pages; in this session you’ll learn to get the most out of them using these tools.',
      date: '04/11/2015',
      id: 'yeoman',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session1Worksheet.pdf')
      }] 
      }
   ]
}

export default angular.module('sessions.controllers', [])
   .controller('sessionsCtrl', sessionsCtrl);