// Generated from todo.g4 by ANTLR 4.8
// jshint ignore: start
//var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by todoParser.
function todoListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

todoListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
todoListener.prototype.constructor = todoListener;

// Enter a parse tree produced by todoParser#expression.
todoListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by todoParser#expression.
todoListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by todoParser#methodCall.
todoListener.prototype.enterMethodCall = function(ctx) {
};

// Exit a parse tree produced by todoParser#methodCall.
todoListener.prototype.exitMethodCall = function(ctx) {
};


// Enter a parse tree produced by todoParser#methodName.
todoListener.prototype.enterMethodName = function(ctx) {
};

// Exit a parse tree produced by todoParser#methodName.
todoListener.prototype.exitMethodName = function(ctx) {
};


// Enter a parse tree produced by todoParser#methodCallArguments.
todoListener.prototype.enterMethodCallArguments = function(ctx) {
};

// Exit a parse tree produced by todoParser#methodCallArguments.
todoListener.prototype.exitMethodCallArguments = function(ctx) {
};



exports.todoListener = todoListener;