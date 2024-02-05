'use strict';

goog.provide('Blockly.Blocks.logic');
goog.require('Blockly.Blocks');
Blockly.Blocks.logic.HUE = 210;

Blockly.Blocks['controls_if'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendValueInput('AN0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('KANE0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                                         'controls_if_else']));
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('αλλιώςαν', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('αλλιώς', 1);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('αλλιώςαν'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('αλλιώς'), 10) || 0;
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('AN' + i)
          .setCheck('Boolean')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
      this.appendStatementInput('KANE' + i)
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      this.appendStatementInput('ALLIWS')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    }
  },
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
 
  compose: function(containerBlock) {
    if (this.elseCount_) {
      this.removeInput('ALLIWS');
    }
    this.elseCount_ = 0;
    for (var i = this.elseifCount_; i > 0; i--) {
      this.removeInput('AN' + i);
      this.removeInput('KANE' + i);
    }
    this.elseifCount_ = 0;
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          var ifInput = this.appendValueInput('AN' + this.elseifCount_)
              .setCheck('Boolean')
              .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
          var doInput = this.appendStatementInput('KANE' + this.elseifCount_);
          doInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
         
          if (clauseBlock.valueConnection_) {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        case 'controls_if_else':
          this.elseCount_++;
          var elseInput = this.appendStatementInput('ALLIWS');
          elseInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
          
          if (clauseBlock.statementConnection_) {
            elseInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        default:
          throw 'Άγνωστο στοιχείο';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          var inputIf = this.getInput('AN' + i);
          var inputDo = this.getInput('KANE' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ALLIWS');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Άγνωστο block';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['controls_if_if'] = {
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_elseif'] = {
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_else'] = {
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['logic_compare'] = {
  init: function() {
    var OPERATORS = rtl ? [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          [Blockly.Msg.inf, 'LT'],
          [Blockly.Msg.infeg, 'LTE'],
          [Blockly.Msg.sup, 'GT'],
          [Blockly.Msg.supeg, 'GTE']
        ] : [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['<', 'LT'],
          ['\u2264', 'LTE'],
          ['>', 'GT'],
          ['\u2265', 'GTE']
        ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
      };
      return TOOLTIPS[op];
    });
    this.prevBlocks_ = [null, null];
  },
  onchange: function() {
    if (!this.workspace) {
      return;
    }
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.setParent(null);
          block.bumpNeighbours_();
        }
      }
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};
