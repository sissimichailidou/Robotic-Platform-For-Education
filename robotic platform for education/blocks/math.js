'use strict';

goog.provide('Blockly.Blocks.math');
goog.require('Blockly.Blocks');


Blockly.Blocks.math.HUE = 230;

Blockly.Blocks['math_number'] = {
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
