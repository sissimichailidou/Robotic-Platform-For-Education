'use strict';

goog.provide('Blockly.Blocks.kinisi');
goog.require('Blockly.Blocks');
goog.provide('Blockly.Blocks.math');

Blockly.Blocks.math.HUE = 230;


Blockly.Blocks['kin4motors'] = {  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField("4 Wheels:")
	    .appendField("Movement:")
        .appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]]), "DIRECTION");
	this.appendDummyInput()
	.appendField("The velocity's value (%) is determined in the last block")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("math_number", 'Number')
     .setAlign(Blockly.ALIGN_RIGHT)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('For 4 DC motors');
  }
};
Blockly.Blocks['init_ultrasonic'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
	    .appendField("Ultrasonic Sensor")
        .appendField(new Blockly.FieldImage("https://w7.pngwing.com/pngs/1024/532/png-transparent-ultrasonic-transducer-sensor-range-finders-arduino-sonar-forcesensing-resistor-electronics-measurement-microcontroller.png", 64, 64))
	   .appendField("Obstacle in")
       .appendField(new Blockly.FieldDropdown([["10cm","10"],["15cm","15"], ["20cm","20"], ["25cm","25"]]), "EMPODIO");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('For avoiding obstacles');
  }
};
Blockly.Blocks['kin2backmotors'] = {  init: function() {
    this.setColour(280);
    this.appendDummyInput()
       .appendField("2 Wheels:")
	   .appendField("Velocity (%) Right Wheel")
	this.setInputsInline(true);
	 this.appendValueInput("math_nA", 'KA')
     this.appendValueInput("math_nB", 'KB')
	.appendField("Left Wheel")
	this.setInputsInline(true);
	this.appendDummyInput()
	.appendField("Offset")
	this.appendValueInput("offset_kB", 'OFFKB')
	this.setInputsInline(true);
	this.appendDummyInput()
	.appendField("Movement:")
	.appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('For the 2 back DC motors');
  }
};

Blockly.Blocks['math_nA'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.Blocks['math_nB'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.Blocks['offset_kB'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};
Blockly.Blocks['apostasi'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.Blocks['kin1motor'] = {  init: function() {
    this.setColour(280);
    this.appendDummyInput()
       .appendField("One Wheel:")
	.appendField(new Blockly.FieldDropdown([["Front Left", "3"], ["Front Right", "2"], ["Back Left", "4"], ["Back Right", "1"]]), "KINITIRAS")
	   .appendField("Velocity (%)")
	this.setInputsInline(true);
	 this.appendValueInput("math_nA", 'KA')
	this.appendDummyInput()
	.appendField("Movement:")
	.appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('For one DC motor');
  }
};
Blockly.Blocks['kin2apostasi'] = {  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField("2 Wheels:")
	    .appendField("Movement:")
        .appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]]), "DIRECTION");
	this.appendDummyInput()
	    .appendField("Velocity (%)")
	this.setInputsInline(true);
    this.appendValueInput("math_nA", 'KA')
	this.appendDummyInput()
	.appendField("Distance (millimetres)")
     this.appendValueInput("apostasi", 'APOSTASI')
     .setAlign(Blockly.ALIGN_RIGHT)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('For distance control');
  }
};
