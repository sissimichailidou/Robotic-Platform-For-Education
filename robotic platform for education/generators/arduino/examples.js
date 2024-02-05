'use strict';
goog.provide('Blockly.Arduino.examples');
goog.provide('Blockly.Arduino.math');
goog.require('Blockly.Arduino');


Blockly.Arduino.square_seq = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  const offset_val=this.getInputTargetBlock("offset_kB", 'OFFKB');
  var KA_speed=this.getInputTargetBlock("math_nA", 'KA');
  var code = "";
  Blockly.Arduino.definitions_['define_motors'] = 
  "#define KA_SPEED "+ (KA_speed*2.55) +"\n"+
  "#define KB_SPEED "+ (KA_speed*2.55) +"+("+ offset_val +")\n\n"+
  "AF_DCMotor motor1(1, MOTOR12_1KHZ);\n"+
  "AF_DCMotor motor4(4, MOTOR34_1KHZ);\n\n"+
  "boolean goforward=false;\n\n"+
  "void right(){\n"+
  " motor4.run(FORWARD);\n"+
  " delay(1000);\n"+
  " motor1.run(BACKWARD);\n"+
  " delay(700);\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void left(){\n"+
  " motor4.run(BACKWARD);\n"+
  " delay(700);\n"+
  " motor1.run(FORWARD);\n"+
  " delay(1000);\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void stopkinisi(){\n"+
  " motor1.run(RELEASE);\n"+
  " motor4.run(RELEASE);\n"+
  " delay(800);\n"+
  " }\n\n"+
  "void forward() {\n"+
  "if(!goforward)\n"+
  "{\n"+
  "goforward=true;\n"+
  "motor1.run(FORWARD);\n"+
  "motor4.run(FORWARD);\n"+
  "motor1.setSpeed(KA_SPEED);\n"+
  "motor4.setSpeed(KB_SPEED);\n"+
  "delay(100);\n"+
  "}\n"+"}\n\n"+ 
  "void backward(){ \n"+
  " goforward=false;\n"+
  " motor1.run(BACKWARD);\n"+
  " motor4.run(BACKWARD);\n"+
  " motor1.setSpeed(KA_SPEED);\n"+
  " motor4.setSpeed(KB_SPEED);\n"+
  " delay(1000);\n"+
  " }\n\n";
 var code="forward();\n"+"delay(1000);\n"+"stopkinisi();\n"+"right();\n"+"forward();\n"+"delay(1000);\n"+"stopkinisi();\n"+"right();\n"+"forward();\n"+"delay(1000);\n"+"stopkinisi();\n"+"right();\n"+"forward();\n"+"delay(1000);\n"+"stopkinisi();\n"+"right();\n"; 
  return code;
};

Blockly.Arduino.offset_kB = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
}; 
Blockly.Arduino.math_nA = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};
Blockly.Arduino.square_seq_part1 = function() {
  const offset_val=this.getInputTargetBlock("offset_kB", 'OFFKB');
  var KA_speed=this.getInputTargetBlock("math_nA", 'KA');
  var code = "";
  Blockly.Arduino.definitions_['define_speeds'] = 
  "#define KA_SPEED "+ (KA_speed*2.55) +"\n"+
  "#define KB_SPEED "+ (KA_speed*2.55) +"+("+ offset_val +")\n\n";
  return code;
};
Blockly.Arduino.square_seq_part2 = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var delay1=this.getInputTargetBlock("delay1", 'DE1');
  var delay2=this.getInputTargetBlock("delay2", 'DE2');
  var code = "";
  Blockly.Arduino.definitions_['define_motors'] = 
  "AF_DCMotor motor1(1, MOTOR12_1KHZ);\n"+
  "AF_DCMotor motor4(4, MOTOR34_1KHZ);\n\n"+
  "boolean goforward=false;\n\n"+
  "void right(){\n"+
  " motor4.run(FORWARD);\n"+
  " delay("+ delay1 +");\n"+
  " motor1.run(BACKWARD);\n"+
  " delay("+ delay2 +");\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void left(){\n"+
  " motor4.run(BACKWARD);\n"+
  " delay("+ delay2 +");\n"+
  " motor1.run(FORWARD);\n"+
  " delay("+ delay1 +");\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void stopkinisi(){\n"+
  " motor1.run(RELEASE);\n"+
  " motor4.run(RELEASE);\n"+
  " delay(800);\n"+
  " }\n\n"+
  "void forward() {\n"+
  "if(!goforward)\n"+
  "{\n"+
  "goforward=true;\n"+
  "motor1.run(FORWARD);\n"+
  "motor4.run(FORWARD);\n"+
  "motor1.setSpeed(KA_SPEED);\n"+
  "motor4.setSpeed(KB_SPEED);\n"+
  "delay("+ delay1 +");\n"+
  "}\n"+"}\n\n"+ 
  "void backward(){ \n"+
  " goforward=false;\n"+
  " motor1.run(BACKWARD);\n"+
  " motor4.run(BACKWARD);\n"+
  " motor1.setSpeed(KA_SPEED);\n"+
  " motor4.setSpeed(KB_SPEED);\n"+
  " delay("+ delay2 +");\n"+
  " }\n\n";
	var code = "";
  if (dropdown_direction==="right") { 
    var code="forward();\n"+" delay("+ delay1 +");\n"+"stopkinisi();\n"+"right();\n";
  } else if (dropdown_direction==="left") {
    var code="backward();\n"+" delay("+ delay2 +");\n"+"stopkinisi();\n"+"left();\n"; }
  return code;
};

Blockly.Arduino.paradigm2_part1 = function() {
  var offset_val=this.getInputTargetBlock("offset_kB", 'OFFKB');
  var KA_speed=this.getInputTargetBlock("math_nA", 'KA');
  var code = "";
  Blockly.Arduino.definitions_['define_speeds2'] = 
  "#define KA_SPEED "+ (KA_speed*2.55) +"\n"+
  "#define KB_SPEED "+ (offset_val*2.55) +"\n\n"+"AF_DCMotor motor1(1, MOTOR12_1KHZ);\n"+
  "AF_DCMotor motor4(4, MOTOR34_1KHZ);\n\n"+
  "boolean goforward=false;\n\n";
  return code;
};
Blockly.Arduino.paradigm2_part2 = function() {
  var delay1=this.getInputTargetBlock("delay1", 'DE1');
  var delay2=this.getInputTargetBlock("delay2", 'DE2');
  var delay3=this.getInputTargetBlock("delay3", 'DE3');
  var code = "";
  Blockly.Arduino.definitions_['define_delays2'] = 
  "void right(){\n"+
  " motor4.run(FORWARD);\n"+
  " delay("+ delay1 +");\n"+
  " motor1.run(BACKWARD);\n"+
  " delay("+ delay2 +");\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void left(){\n"+
  " motor4.run(BACKWARD);\n"+
  " delay("+ delay2 +");\n"+
  " motor1.run(FORWARD);\n"+
  " delay("+ delay1 +");\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void forward() {\n"+
  "if(!goforward)\n"+
  "{\n"+
  "goforward=true;\n"+
  "motor1.run(FORWARD);\n"+
  "motor4.run(FORWARD);\n"+
  "motor1.setSpeed(KA_SPEED);\n"+
  "motor4.setSpeed(KB_SPEED);\n"+
  "delay("+ delay3 +");\n"+
  "}\n"+"}\n\n";
  return code;
};
Blockly.Arduino.paradigm2_part3 = function() {
  var delay4=this.getInputTargetBlock("delay4", 'DE4');
  var delay5=this.getInputTargetBlock("delay5", 'DE5');
  var code = "";
  Blockly.Arduino.definitions_['define_delays3'] = 
  "void stopkinisi(){\n"+
  " motor1.run(RELEASE);\n"+
  " motor4.run(RELEASE);\n"+
  " delay("+ delay4 +");\n"+
  " }\n\n"+
  "void backward(){ \n"+
  " goforward=false;\n"+
  " motor1.run(BACKWARD);\n"+
  " motor4.run(BACKWARD);\n"+
  " motor1.setSpeed(KA_SPEED);\n"+
  " motor4.setSpeed(KB_SPEED);\n"+
  " delay("+ delay5 +");\n"+
  " }\n\n";
  return code;
};
Blockly.Arduino.paradigm2_part4 = function() {
var dropdown_direction = this.getFieldValue('DIRECTION');
var code = "";
  if(dropdown_direction==="forward"){
    var code="forward();\n";
  } else if (dropdown_direction==="right") { 
    var code="right();\n";
  } else if (dropdown_direction==="left") {
    var code="left();\n";
  } else if (dropdown_direction==="backward"){
    var code="backward();\n";
  } else if (dropdown_direction==="stop"){
    var code="stopkinisi();\n";
  }
  return code;
};
Blockly.Arduino.delay1 = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};
Blockly.Arduino.delay2 = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};
Blockly.Arduino.delay3 = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};
Blockly.Arduino.delay4 = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};
Blockly.Arduino.delay5 = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};