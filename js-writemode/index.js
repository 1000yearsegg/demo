/**
 * @ Author: Sanches
 * @ Date: 2021-02-23 02:38:35
 * @ Last Modified by: Sanches
 * @ Last Modified time: 2021-02-24 11:21:49
 */
'use strict';

var Main = function(outProp) {
    this.localProp = {
        module1: {
            prop1: 'mod1_prop1',
            prop2: 'mod1_prop2'
        },
        module2: {
            prop1: 'mod2_prop1',
            prop2: 'mod2_prop2'
        }
    }

    // this.localProp = Object.assign(this.localProp, outProp)
    $.extend(true, this.localProp, outProp);
    console.log('this.localProp----', this.localProp);

    this.init();
}

Main.prototype = {
    init: function() {
        console.log('Main init.');
        var _this = this;

        _this.module1Init();
        _this.module2Init();
    },
    module1Init: function() {
        console.log('Main module1Init.');
        var _this = this.localProp['module1'];
        console.log('module1Init _this.prop1----', _this.prop1);
        
    },
    module2Init: function() {
        console.log('Main module2Init.');
        var _this = this.localProp['module2'];
        console.log('module2Init _this.prop1----', _this.prop1);
        
    }
}

// var m = new Main();
var m = new Main(
    {
        module2: {
            aaa: 'aaa',
            bbb: 'bbb'
        },
        module3: {
            prop1: 'mod3_prop1',
            prop2: 'mod3_prop2'
        }
    }
);