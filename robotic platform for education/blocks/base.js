'use strict';
goog.provide('Blockly.Blocks.base');
goog.require('Blockly.Blocks');

Blockly.Blocks['base_delay'] = {
  init: function() {
    this.setColour(200);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Delay:")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('For adding delay in the program');
  }
};
Blockly.Blocks['end_loop'] = {
  init: function() {
    this.setColour(200);
	this.appendDummyInput()
        .appendField("End Program");
    this.setPreviousStatement(true, null);
    this.setTooltip('For ending the main function of the program');
  }
};
	
		
		
		
		