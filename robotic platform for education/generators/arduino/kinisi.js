'use strict';

goog.provide('Blockly.Arduino.kinisi');
goog.provide('Blockly.Arduino.math');
goog.require('Blockly.Arduino');
	
Blockly.Arduino.kin4motors = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var max_speed=this.getInputTargetBlock('math_number');
  Blockly.Arduino.definitions_['define_motors'] = 
  "#define MAX_SPEED "+ (max_speed*2.55) +"\n\n"+
	  "AF_DCMotor motor1(1, MOTOR12_1KHZ);\n"+
	  "AF_DCMotor motor2(2, MOTOR12_1KHZ);\n"+
	  "AF_DCMotor motor3(3, MOTOR34_1KHZ);\n"+
	  "AF_DCMotor motor4(4, MOTOR34_1KHZ);\n\n"+
	  "boolean goforward=false;\n"+
	  "int speedSet = 0;\n\n"+
 "void stopkinisi(){\n"+
  " motor1.run(RELEASE);\n"+
  " motor2.run(RELEASE);\n"+
  " motor3.run(RELEASE);\n"+
  " motor4.run(RELEASE);\n"+
  " }\n\n"+
"void backward(){ \n"+
  " goforward=false;\n"+
  " motor1.run(BACKWARD);\n"+
  " motor2.run(BACKWARD);\n"+
  " motor3.run(BACKWARD);\n"+
  " motor4.run(BACKWARD);\n"+
  " for (speedSet = 0; speedSet < MAX_SPEED; speedSet +=2)\n"+
  " {\n"+
  " motor1.setSpeed(speedSet);\n"+
  " motor2.setSpeed(speedSet);\n"+
  " motor3.setSpeed(speedSet);\n"+
  " motor4.setSpeed(speedSet);\n"+
  " delay(10);\n"+
  " }\n"+
  " }\n\n"+
"void left(){\n"+
  " motor3.run(BACKWARD);\n"+
  " motor4.run(BACKWARD);\n"+
  " delay(400);\n"+
  " motor1.run(FORWARD);\n"+
  " motor2.run(FORWARD);\n"+
  " delay(400);\n"+
  " motor1.run(FORWARD);\n"+
  " motor2.run(FORWARD);\n"+
  " motor3.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n"+
  " }\n\n"+
"void right(){\n"+
  " motor3.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n"+
  " delay(400);\n"+
  " motor1.run(BACKWARD);\n"+
  " motor2.run(BACKWARD);\n"+
  " delay(400);\n"+
  " motor1.run(FORWARD);\n"+
  " motor2.run(FORWARD);\n"+
  " motor3.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n"+
  " }\n\n"+
  " void forward() {\n"+
  " if(!goforward)\n"+
  " {\n"+
  " goforward=true;\n"+
  " motor1.run(FORWARD); \n"+
  " motor2.run(FORWARD);\n"+
  " motor3.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n"+
  " for (speedSet = 0; speedSet < MAX_SPEED; speedSet +=2)\n"+
  " {\n"+
  " motor1.setSpeed(speedSet);\n"+
  " motor2.setSpeed(speedSet);\n"+
  " motor3.setSpeed(speedSet);\n"+
  " motor4.setSpeed(speedSet);\n"+
  " delay(10);\n"+
  " }\n"+
  " }\n"+
  " }\n";
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
Blockly.Arduino.init_ultrasonic = function() {
  var dropdown_empodio = this.getFieldValue('EMPODIO');
  Blockly.Arduino.definitions_['var_sonic']=
  'NewPing sonic(PIN_T, PIN_E, MAX_APOSTASI);\n'+
  'Servo servokinitiras;\n'+
  'int apostasi = 100;\n\n';
  Blockly.Arduino.setups_['setup_sonic']= 
  'servokinitiras.attach(10);\n'+
  'servokinitiras.write(115);\n'+
  'delay(2000);\n'+
  'apostasi = readPing();\n'+
  'delay(100);\n'+
  'apostasi = readPing();\n'+
  'delay(100);\n'+
  'apostasi = readPing();\n'+
  'delay(100);\n'+
  'apostasi = readPing();\n'+
  'delay(100);\n\n';
  Blockly.Arduino.definitions_['sonic_elegxos']=
  'int checkRight(){\n'+
  'servokinitiras.write(50);\n'+
  'delay(500);\n'+
  'int apostasi = readPing();\n'+
  'delay(100);\n'+
  'servokinitiras.write(115); \n'+
  'return apostasi;\n'+
  '}\n\n'+
  'int checkLeft(){\n'+
  'servokinitiras.write(170);\n'+
  'delay(500);\n'+
  'int apostasi = readPing();\n'+
  'delay(100);\n'+
  'servokinitiras.write(115);\n'+
  'return apostasi;\n'+
  'delay(100);\n'+
  '}\n\n'+
  'int readPing() {\n'+
  'delay(50);\n'+
  'int apo = sonic.ping_cm();\n'+
  'if(apo==0)\n'+
  '{\n'+
  'apo = 250;\n'+
  '}\n'+
  'return apo;\n'+
  '}\n';
  var code ='int apo_left = 0;\n'+
  'int apo_right = 0;\n'+
  'delay(20);\n\n'+
  'if(apostasi<='+ dropdown_empodio +'){\n'+
  'stopkinisi();\n'+
  'delay(100);\n'+
  'backward();\n'+
  'delay(200);\n'+
  'stopkinisi();\n'+
  'delay(200);\n'+
  'apo_right = checkRight();\n'+
  'delay(200);\n'+
  'apo_left = checkLeft();\n'+
  'delay(200);\n'+
  'if(apo_right>=apo_left){\n'+
  'right();\n'+
  'stopkinisi();\n'+
  '}else\n'+
  '{\n'+
  'left();\n'+
  'stopkinisi();\n'+
  '}\n'+
  '}else\n'+
  '{\n'+
  'forward();\n'+
  '}\n'+
  'apostasi = readPing();\n';   
  return code;
};

Blockly.Arduino.kin2backmotors = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var KA_speed=this.getInputTargetBlock("math_nA", 'KA');
  var KB_speed=this.getInputTargetBlock("math_nB", 'KB');
  const offset_val=this.getInputTargetBlock("offset_kB", 'OFFKB');
  var code = "";
  Blockly.Arduino.definitions_['define_motors'] = 
  "#define KA_SPEED "+ (KA_speed*2.55) +"\n"+
  "#define KB_SPEED "+ (KB_speed*2.55)+"+("+ offset_val +")\n\n"+
  "AF_DCMotor motor1(1, MOTOR12_1KHZ);\n"+
  "AF_DCMotor motor4(4, MOTOR34_1KHZ);\n\n"+
  "boolean goforward=false;\n\n"+
  "void right(){\n"+
  " motor4.run(FORWARD);\n"+
  " delay(1200);\n"+
  " motor1.run(BACKWARD);\n"+
  " delay(1000);\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n"+
  " delay(1000);\n"+
  "}\n\n"+
  "void left(){\n"+
  " motor4.run(BACKWARD);\n"+
  " delay(1000);\n"+
  " motor1.run(FORWARD);\n"+
  " delay(500);\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n"+
  " delay(800);\n"+
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
  "delay(800);\n"+
  "}\n"+"}\n\n"+ 
  "void backward(){ \n"+
  " goforward=false;\n"+
  " motor1.run(BACKWARD);\n"+
  " motor4.run(BACKWARD);\n"+
  " motor1.setSpeed(KA_SPEED);\n"+
  " motor4.setSpeed(KB_SPEED);\n"+
  " delay(1000);\n"+
  " }\n\n";
  if (dropdown_direction==="forward") {
 var code="forward();\n";  
  } else if (dropdown_direction==="backward"){
 var code="backward();\n";
  } else if (dropdown_direction==="right") { 
    var code="right();\n";
  } else if (dropdown_direction==="left") {
    var code="left();\n";
  } else if (dropdown_direction==="stop"){
    var code="stopkinisi();\n";
  };
  return code;
};

Blockly.Arduino.math_nA = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Arduino.math_nB = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Arduino.offset_kB = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
}; 
Blockly.Arduino.apostasi = function() {
  var code = window.parseFloat(this.getFieldValue('NUM'));
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};
Blockly.Arduino.kin2apostasi = function() {
var dropdown_direction = this.getFieldValue('DIRECTION');
var timi_apostasis=this.getInputTargetBlock("apostasi", 'APOSTASI');
  var KA_speed=this.getInputTargetBlock("math_nA", 'KA');
  var code = "";
  Blockly.Arduino.definitions_['define_motors'] = 
  "#define KA_SPEED "+ (KA_speed*2.55) +"\n"+
  "#define KB_SPEED "+ (KA_speed*2.55) +"+(40)\n"+ "#define DT "+ ((200*timi_apostasis)/(KA_speed)) +"\n\n"+
  "AF_DCMotor motor1(1, MOTOR12_1KHZ);\n"+
  "AF_DCMotor motor4(4, MOTOR34_1KHZ);\n\n"+
  "boolean goforward=false;\n\n"+
  "void right(){\n"+
  " motor4.run(FORWARD);\n"+
  " delay(DT/2);\n"+
  " motor1.run(BACKWARD);\n"+
  " delay(DT/2);\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void left(){\n"+
  " motor4.run(BACKWARD);\n"+
  " delay(DT/2);\n"+
  " motor1.run(FORWARD);\n"+
  " delay(DT/2);\n"+
  " motor1.run(FORWARD);\n"+
  " motor4.run(FORWARD);\n\n"+
  "}\n\n"+
  "void stopkinisi(){\n"+
  " motor1.run(RELEASE);\n"+
  " motor4.run(RELEASE);\n"+
  " delay(DT);\n"+
  " }\n\n"+
  "void forward() {\n"+
  "if(!goforward)\n"+
  "{\n"+
  "goforward=true;\n"+
  "motor1.run(FORWARD);\n"+
  "motor4.run(FORWARD);\n"+
  "motor1.setSpeed(KA_SPEED);\n"+
  "motor4.setSpeed(KB_SPEED);\n"+
  "delay(DT);\n"+
  "}\n"+"}\n\n"+ 
  "void backward(){ \n"+
  " goforward=false;\n"+
  " motor1.run(BACKWARD);\n"+
  " motor4.run(BACKWARD);\n"+
  " motor1.setSpeed(KA_SPEED);\n"+
  " motor4.setSpeed(KB_SPEED);\n"+
  " delay(DT);\n"+
  " }\n\n";
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
Blockly.Arduino.kin1motor = function() {
  var numkin = this.getFieldValue('KINITIRAS');
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var KA_speed=this.getInputTargetBlock("math_nA", 'KA');
  var code = "";
  Blockly.Arduino.definitions_['define_motors'] = 
  "#define KA_SPEED "+ (KA_speed*2.55) +"\n\n"+
  "AF_DCMotor motor"+ numkin +"("+ numkin +");\n"+
  "boolean goforward=false;\n\n"+
  "void forward() {\n"+
  "if(!goforward)\n"+
  "{\n"+
  "goforward=true;\n"+
  "motor"+ numkin +".run(FORWARD);\n"+
  "motor"+ numkin +".setSpeed(KA_SPEED);\n"+
  "delay(10);\n"+
  "};\n"+"};\n\n"+ 
  "void backward(){ \n"+
  " goforward=false;\n"+
  " motor"+ numkin +".run(BACKWARD);\n"+
  " motor"+ numkin +".setSpeed(KA_SPEED);\n"+
  " delay(10);\n"+
  " };\n\n";
  if (dropdown_direction==="forward") {
 var code="forward();\n";  
  } else if (dropdown_direction==="backward"){
 var code="backward();\n";
  };
  return code;
};