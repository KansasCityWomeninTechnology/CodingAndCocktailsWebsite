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
      }
   ]
}

export default angular.module('sessions.controllers', [])
   .controller('sessionsCtrl', sessionsCtrl);
