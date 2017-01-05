'use strict';

import angular from 'angular';

import './controllers.js';
import './directives.js';


export default angular.module('sessions', ['sessions.controllers', 'sessions.directives'])
   .name;

