'use strict';
goog.provide('Blockly.Arduino.base');
goog.require('Blockly.Arduino');


Blockly.Arduino.base_delay = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.end_loop = function() {
  var code = "exit(0);\n";
  return code;
};

