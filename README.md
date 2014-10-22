stackcommand
============

A Javascript class for delaying actions.

This class is fairly easy to use.  It will allow you to delay functions and make a queue of actions to be played out.

Create a new instance of a command stack

    var cmdstack = new CommandStack();
    
Now you can use a number of methods

    cmdstack.addCmd(callback,time); // Works just like a setTimeout, Adds command to end of stack
    cmdstack.insertCmd(callback,time); // Adds command to beginning of stack
    cmdstack.delay(time); // Adds an empty timer to the end of the stack
    cmdstack.pause(time); // Adds an empty timer to the beginning of the stack
    cmdstack.clearTimer(); // stops the current stack indefinitely
    
I found this functionality to be quite useful, and hopefully you will as well.  Let me know if you have any questions at hamdiggy@gmail.com
