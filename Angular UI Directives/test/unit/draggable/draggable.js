'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('draggable', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('draggable');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('draggable.config')).toBeTruthy();
    });

    

    
    it('should load directives module', function() {
        expect(hasModule('draggable.directives')).toBeTruthy();
    });
    

    

});
