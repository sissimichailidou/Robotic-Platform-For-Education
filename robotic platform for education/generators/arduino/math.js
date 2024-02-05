'use strict';

goog.provide('Blockly.Arduino.math');

goog.require('Blockly.Arduino');


Blockly.Arduino.math_number = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Arduino.speed_number = function() {
 var valuespeed_ = block.getFieldValue('speed_');
    return [valuespeed_, Blockly.Arduino.ORDER_ATOMIC];
};