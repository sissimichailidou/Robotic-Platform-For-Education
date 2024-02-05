'use strict';

goog.provide('Blockly.Arduino.logic');

goog.require('Blockly.Arduino');


Blockly.Arduino.controls_if = function() {
  var n = 0;
  var argument = Blockly.Arduino.valueToCode(this, 'AN' + n,
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'KANE' + n);
  var code = 'if (' + argument + ') {\n' + branch + '\n}';
  for (n = 1; n <= this.elseifCount_; n++) {
    argument = Blockly.Arduino.valueToCode(this, 'AN' + n,
      Blockly.Arduino.ORDER_NONE) || 'false';
    branch = Blockly.Arduino.statementToCode(this, 'KANE' + n);
    code += ' else if (' + argument + ') {\n' + branch + '}';
  }
  if (this.elseCount_) {
    branch = Blockly.Arduino.statementToCode(this, 'ALLIWS');
    code += ' else {\n' + branch + '\n}';
  }
  return code + '\n';
};

Blockly.Arduino.logic_compare = function() {
  var mode = this.getFieldValue('OP');
  var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Arduino.logic_compare.OPERATORS = {
  EQ: '==',
  NEQ: '!=',
  LT: '<',
  LTE: '<=',
  GT: '>',
  GTE: '>='
};
