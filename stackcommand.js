;(function(w){

    StackCommand = function(){
        this.commands = [];
        this.currentCommand = false;
        this.timer = false;
    };
    // Add a command to the end of the stack
    StackCommand.prototype.addCmd = function(callback,length){
        this.commands.push({cb:callback,l:length});
        if(this.timer===false) this.runCmd();
        return this;
    };
    // Add a command to the beginning of the stack, pause and reset any currently running command
    StackCommand.prototype.insertCmd = function(callback,length){
        if(this.currentcommand!==false) {
            this.clearTimer();
            this.commands.push(this.currentcommand);
            this.currentcommand = false;
        }
        this.commands.push({cb:callback,l:length});
        if(this.timer===false) this.runCmd();
        return this;
    };
    // Add an array of command objects to the stack
    StackCommand.prototype.addCmds = function(callbacks){
        this.commands.concat(callbacks);
        if(this.timer===false) this.runCmd();
    };
    // Add an empty timer to the stack
    StackCommand.prototype.delay = function(time){
        return this.addCmd(function(){},time);
    };
    // Add an empty timer to the beginning of the stack
    StackCommand.prototype.pause = function(time){
        this.clearTimer();
        return this.insertCmd(function(){},time);
    };
    // Remove and return the first command from the stack
    StackCommand.prototype.getCmd = function(){
        return this.commands.shift();
    };
    // Run the first command and call itself back if there are more available
    StackCommand.prototype.runCmd = function(){
        // console.log(this.commands)
        if(!this.commands.length) {
            this.timer = false;
            return;
        }
        var self = this;
        var this.currentcommand = this.getCmd();
        this.timer = setTimeout(function(){
            self.currentcommand.cb();
            self.currentcommand = false;
            self.runCmd();
        },this.currentcommand.l);
    };
    // Clear out the current timer
    StackCommand.prototype.clearTimer = function(){
        clearTimeout(this.timer);
        this.timer = false;
    };

    w.StackCommand = StackCommand;

})(window);
