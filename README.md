# Robotic-Platform-For-Education

In this educational platform, a code generator was developed that translates the graphic blocks into code sections accepted by Arduino, i.e. a variant of the C++ programming language. The students who use this platform don’t need to have prior programming knowledge. While compiling the code, all the possible syntax errors and bugs are eliminated thanks to the code generator, and the students manage to program their robotic vehicle simply by connecting the blocks and selecting the parameter values. Therefore, this platform offers interactivity and facilitates experimenting and gaining practical experiences while solving educational robotics problems.

**Necessary equipment:**
* A robotic vehicle (with up to 4 DC motor wheels) 
* Arduino MEGA
* USB connector for your Arduino
* Arduino IDE installed in your computer

**How to use this platform:**
1. Open the html file in your preferred browser.
2. From the library of blocks choose those that will solve your robotic problem.
3. Stack them so they graphically form a complete program.
4. Make sure you selected and filled correctly all the parameters.
5. Open the tab ‘Arduino’, and copy the code that was automatically generated. 
6. Create a new Sketch on Arduino IDE, and paste the code there.
7. Upload the code to your Arduino. 

**The platform offers the students a library of blocks for:**
* Initialization
* Loops And Conditions
* Numbers And Values
* Movement Control
* Step-By-Step Control

The robotic vehicle can be programmed to move forward, backward, left, and right as well as to stop. Every movement can last for a specific amount of time, or for a specific distance that is determined by the user. Obstacle avoidance can be included, if the user defines the trigger and echo pins where the ultrasonic sensor connects to the Arduino. Movement routines can be repeated, or start under certain conditions.

This project uses resources from: [Google Blockly](https://github.com/google/blockly)
