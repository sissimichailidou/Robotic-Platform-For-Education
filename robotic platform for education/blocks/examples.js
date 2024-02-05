'use strict';
goog.provide('Blockly.Blocks.examples');
goog.require('Blockly.Blocks');
goog.provide('Blockly.Blocks.math');

Blockly.Blocks['square_seq'] = {  init: function() {
    this.setColour(180);
    this.appendDummyInput()
       .appendField("Square Route (in 2 Wheels)")
	this.appendDummyInput()
	.appendField("Velocity (%)")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("math_nA", 'KA')
	this.appendDummyInput()
	.appendField("Offset:")
	this.appendValueInput("offset_kB", 'OFFKB')
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Example of code for square route');
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
Blockly.Blocks['paradigmtitle1'] = {  init: function() {
    this.setColour(330);
	this.appendDummyInput()
	.appendField("Example")
  }
};
Blockly.Blocks['askisititle1'] = {  init: function() {
    this.setColour(330);
	this.appendDummyInput()
	.appendField("Basic Parameter Control")
  }
};
Blockly.Blocks['askisititle2'] = {  init: function() {
    this.setColour(330);
	this.appendDummyInput()
	.appendField("Advanced Parameter Control")
  }
};
Blockly.Blocks['square_seq_part1'] = {  init: function() {
    this.setColour(280);
	this.appendDummyInput()
	.appendField("Velocity (%)")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("math_nA", 'KA')
	this.appendDummyInput()
	.appendField("Offset:")
	this.appendValueInput("offset_kB", 'OFFKB')
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Determines the vehicle's velocity");
  }
};
Blockly.Blocks['square_seq_part2'] = {  init: function() {
    this.setColour(280);
	this.appendDummyInput()
	.appendField("(in milliseconds)")
	.appendField("Time Forward")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("delay1", 'DE1')
	this.appendDummyInput()
	.appendField("Time Backward")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("delay2", 'DE2')
	this.setInputsInline(true);
	this.appendDummyInput()
	.appendField("Movement:")
	.appendField(new Blockly.FieldDropdown([["Clockwise", "right"], ["Anti-Clockwise", "left"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Determines the time that the vehicle will be moving");
  }
};
Blockly.Blocks['paradigm2_part1'] = {  init: function() {
    this.setColour(280);
	this.appendDummyInput()
	.appendField("Right Wheel Velocity (%)")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("math_nA", 'KA')
	this.appendDummyInput()
	.appendField("Left Wheel Velocity (%)")
	this.appendValueInput("offset_kB", 'OFFKB')
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Determines the vehicle's velocity");
  }
};
Blockly.Blocks['paradigm2_part2'] = {  init: function() {
    this.setColour(280);
	this.appendDummyInput()
	.appendField("Time of Wheel Spinning:")
	.appendField("One Wheel Forward")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("delay1", 'DE1')
	this.appendDummyInput()
	.appendField("The Other Wheel Backward")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("delay2", 'DE2')
	this.appendDummyInput()
	.appendField("Both Wheels Forward")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("delay3", 'DE3')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Determines how much time does the turning of the vehicle last");
  }
};
Blockly.Blocks['paradigm2_part3'] = {  init: function() {
    this.setColour(280);
	this.appendDummyInput()
	.appendField("Both Wheels Stop")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("delay4", 'DE4')
	this.appendDummyInput()
	.appendField("Both Wheels Backward")
	.setAlign(Blockly.ALIGN_RIGHT)
     this.appendValueInput("delay5", 'DE5')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Determines the vehicle's stop or backward movement");
  }
};
Blockly.Blocks['paradigm2_part4'] = {  init: function() {
    this.setColour(280);
	this.appendDummyInput()
	.appendField("Direction:")
	.appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Determines the vehicle's direction of movement");
  }
};
Blockly.Blocks['delay1'] = {
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
Blockly.Blocks['delay2'] = {
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
Blockly.Blocks['delay3'] = {
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
Blockly.Blocks['delay4'] = {
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

Blockly.Blocks['delay5'] = {
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


