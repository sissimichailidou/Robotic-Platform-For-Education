'use strict';

goog.provide('Blockly.Arduino');

goog.require('Blockly.Generator');

Blockly.Arduino = new Blockly.Generator('Arduino');
Blockly.Arduino.addReservedWords(
  'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts'
);

Blockly.Arduino.ORDER_ATOMIC = 0;        
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;  
Blockly.Arduino.ORDER_UNARY_PREFIX = 2; 
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3; 
Blockly.Arduino.ORDER_ADDITIVE = 4;      
Blockly.Arduino.ORDER_SHIFT = 5;         
Blockly.Arduino.ORDER_RELATIONAL = 6;
Blockly.Arduino.ORDER_EQUALITY = 7; 
Blockly.Arduino.ORDER_BITWISE_AND = 8; 
Blockly.Arduino.ORDER_BITWISE_XOR = 9; 
Blockly.Arduino.ORDER_BITWISE_OR = 10;   
Blockly.Arduino.ORDER_LOGICAL_AND = 11;  
Blockly.Arduino.ORDER_LOGICAL_OR = 12;  
Blockly.Arduino.ORDER_CONDITIONAL = 13; 
Blockly.Arduino.ORDER_ASSIGNMENT = 14; 
Blockly.Arduino.ORDER_NONE = 99;    

var profile = {
  arduino: {
    description: "Arduino standard-compatible board",
    digital: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
    analog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
    serial: 9600
  },
  arduino_mega: {
    description: "Arduino Mega-compatible board"
  }
};
profile["default"] = profile["arduino"];

Blockly.Arduino.init = function(workspace) {

  Blockly.Arduino.definitions_ = Object.create(null);

  Blockly.Arduino.setups_ = Object.create(null);

	if (!Blockly.Arduino.variableDB_) {
		Blockly.Arduino.variableDB_ =
				new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
	} else {
		Blockly.Arduino.variableDB_.reset();
	}

	var defvars = [];
	var variables = Blockly.Variables.allVariables(workspace);
	for (var x = 0; x < variables.length; x++) {
		defvars[x] = 'int ' +
				Blockly.Arduino.variableDB_.getName(variables[x],
				Blockly.Variables.NAME_TYPE) + ';\n';
	}
	Blockly.Arduino.definitions_['variables'] = defvars.join('\n');
};

Blockly.Arduino.finish = function(code) {
  code = '  ' + code.replace(/\n/g, '\n  ');
  code = code.replace(/\n\s+$/, '\n');
  code = 'void loop() \n{\n' + code + '\n}';
   
  var imports = [];
  var definitions = [];
  for (var name in Blockly.Arduino.definitions_) {
    var def = Blockly.Arduino.definitions_[name];
    if (def.match(/^#include/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }
  var setups = [];
  for (var name in Blockly.Arduino.setups_) {
    setups.push(Blockly.Arduino.setups_[name]);
  }

  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n') + '\nvoid setup() \n{\n  '+setups.join('\n  ') + '\n}'+ '\n\n';
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

Blockly.Arduino.scrubNakedValue = function(line) {
  return line + ';\n';
};

Blockly.Arduino.quote_ = function(string) {
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};

Blockly.Arduino.scrub_ = function(block, code) {
  if (code === null) {
    return '';
  }
  var commentCode = '';
  if (!block.outputConnection || !block.outputConnection.targetConnection) {

    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.Arduino.prefixLines(comment, '// ') + '\n';
    }
  
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.Arduino.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.Arduino.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.Arduino.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
