'use strict';
goog.provide('Blockly.Blocks.arxika');
goog.require('Blockly.Blocks');

Blockly.Arduino['arduino_setup'] = function(block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'firstsetup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'mainloop');
 
  Blockly.Arduino.setups_['setup'] = statements_setup;
 
  var code = statements_loop;
  return code;
};
Blockly.Arduino.bibliothikes = function() {
  var code = "";
  Blockly.Arduino.definitions_['bibliothikes'] = 
  "#include <NewPing.h>\n"+
  "#include <Servo.h>\n"+
  "#include <Adafruit_MotorShield.h>\n"+
  "#include <AFMotor.h>\n\n";
	 return code;
};
Blockly.Arduino.max_apostasi = function() {
  var A_MAX=this.getInputTargetBlock("math_nA", 'a_max');
  var code = "";
  Blockly.Arduino.definitions_['max_apost'] = 
  "#define MAX_APOSTASI "+ A_MAX +"\n";
	 return code;
};
Blockly.Arduino.trigger_echo = function() {
var dropdown_trigger = this.getFieldValue('PIN_TRIGGER');
var dropdown_echo = this.getFieldValue('PIN_ECHO');
var code = "";
Blockly.Arduino.definitions_['pin_trigger'] = 
"#define PIN_T "+ dropdown_trigger +"\n";
Blockly.Arduino.definitions_['pin_echo'] = 
"#define PIN_E "+ dropdown_echo +"\n";
  return code;
};