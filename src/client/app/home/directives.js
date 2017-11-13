function navbar() {
   return {
      template: require('./partials/navbar.html'),
      controller: 'navCtrl as nvm'
   }
}
function hero() {
    return {
        restrict:'E',
        scope: {
           url: '@'
        },
        template: require('./partials/hero.html')
   }
}
function thecode() {
   return {
      template: require('./partials/code.html'),
      controller: 'codeCtrl as cvm'
  }
}
function cocktails() {
   return {
      template: require('./partials/cocktails.html')
   }
}
function mentors() {
   return {
      template: require('./partials/mentors.html'),
      controller: 'mentorCtrl as mvm'
   }
}
function signup() {
   return {
      template: require('./partials/signup.html'),
      controller: 'topicCtrl as tvm'
   }
}
function contact() {
   return {
      template: require('./partials/contact.html')
   }
}
function sessionlist() {
  return {
     template: require('./partials/sessionlist.html')
  }
}
function tools() {
  return {
     template: require('./partials/tools.html')
  }
}
function resources() {
  return {
     template: require('./partials/resources.html')
  }
}
function financialaid() {
  return {
     template: require('./partials/financialaid.html'),
     controller: 'finaidCtrl as fvm'
  }
}
function aboutdropdown() {
  return {
    template: require('./partials/aboutdropdown.html'),
    controller: 'dropdownCtrl as dvm'
  }
}
function resourcesdropdown() {
  return {
    template: require('./partials/resourcesdropdown.html'),
    controller: 'dropdownCtrl as dvm'
  }
}

export default angular.module('home.directives', [])
   .directive('navbar', navbar)
   .directive('hero', hero)
   .directive('thecode', thecode)
   .directive('cocktails', cocktails)
   .directive('mentors', mentors)
   .directive('signup', signup)
   .directive('contact', contact)
   .directive('sessionlist', sessionlist)
   .directive('tools', tools)
   .directive('resources', resources)
   .directive('financialaid', financialaid)
   .directive('aboutdropdown', aboutdropdown)
   .directive('resourcesdropdown', resourcesdropdown)
