'use strict';
goog.provide('Blockly.Blocks.arxika');
goog.require('Blockly.Blocks');

Blockly.Blocks['arduino_setup'] = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Setup);
    this.appendDummyInput()
        .appendField("Initial Setup:");
    this.appendStatementInput("firstsetup");
    this.appendDummyInput()
        .appendField(Blockly.Msg.Loop);
    this.appendDummyInput()
        .appendField("Main Loop:");
    this.appendStatementInput("mainloop");
    this.setTooltip('for stacking and organizing of the blocks');
    this.setDeletable(true);
  }
};
Blockly.Blocks['bibliothikes'] = {  init: function() {
    this.setColour(100);
    this.appendDummyInput()
        .appendField("Add Libraries")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('The libraries are essential for the vehicle to move.');
  }
};
Blockly.Blocks['max_apostasi'] = {  init: function() {
    this.setColour(100);
    this.appendDummyInput()
	   .appendField("Maximum distance for the ultrasonic sensor in cm:")
	this.setInputsInline(true);
	 this.appendValueInput("math_nA", 'a_max')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('The maximum distance in cm that the ultrasonic sensor will broadcast its signal');
  }
};
Blockly.Blocks['trigger_echo'] = {  init: function() {
    this.setColour(100);
	this.appendDummyInput()
	.appendField("Trigger Pin:")
	.appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"],["A4", "A4"], ["A5", "A5"]]), "PIN_TRIGGER");
	this.appendDummyInput()
	.appendField("Echo Pin:")
	.appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"],["A4", "A4"], ["A5", "A5"]]), "PIN_ECHO");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Select the pins where the ultrasonic sensor is connected');
  }
};