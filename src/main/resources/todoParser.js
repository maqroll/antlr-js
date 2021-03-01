// Generated from todo.g4 by ANTLR 4.8
// jshint ignore: start
//var antlr4 = require('antlr4/index');
var todoListener = require('./todoListener').todoListener;
var grammarFileName = "todo.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b!\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0005\u0002\r\n\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005\u001a",
    "\n\u0005\f\u0005\u000e\u0005\u001d\u000b\u0005\u0005\u0005\u001f\n\u0005",
    "\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0002\u0002",
    "\u001f\u0002\f\u0003\u0002\u0002\u0002\u0004\u000e\u0003\u0002\u0002",
    "\u0002\u0006\u0013\u0003\u0002\u0002\u0002\b\u001e\u0003\u0002\u0002",
    "\u0002\n\r\u0005\u0004\u0003\u0002\u000b\r\u0007\u0007\u0002\u0002\f",
    "\n\u0003\u0002\u0002\u0002\f\u000b\u0003\u0002\u0002\u0002\r\u0003\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0005\u0006\u0004\u0002\u000f\u0010\u0007",
    "\u0003\u0002\u0002\u0010\u0011\u0005\b\u0005\u0002\u0011\u0012\u0007",
    "\u0004\u0002\u0002\u0012\u0005\u0003\u0002\u0002\u0002\u0013\u0014\u0007",
    "\u0006\u0002\u0002\u0014\u0007\u0003\u0002\u0002\u0002\u0015\u001f\u0003",
    "\u0002\u0002\u0002\u0016\u001b\u0005\u0002\u0002\u0002\u0017\u0018\u0007",
    "\u0005\u0002\u0002\u0018\u001a\u0005\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001f\u0003",
    "\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001e\u0015\u0003",
    "\u0002\u0002\u0002\u001e\u0016\u0003\u0002\u0002\u0002\u001f\t\u0003",
    "\u0002\u0002\u0002\u0005\f\u001b\u001e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "','" ];

var symbolicNames = [ null, null, null, null, "NAME", "STRING", "WS" ];

var ruleNames =  [ "expression", "methodCall", "methodName", "methodCallArguments" ];

function todoParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

todoParser.prototype = Object.create(antlr4.Parser.prototype);
todoParser.prototype.constructor = todoParser;

Object.defineProperty(todoParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

todoParser.EOF = antlr4.Token.EOF;
todoParser.T__0 = 1;
todoParser.T__1 = 2;
todoParser.T__2 = 3;
todoParser.NAME = 4;
todoParser.STRING = 5;
todoParser.WS = 6;

todoParser.RULE_expression = 0;
todoParser.RULE_methodCall = 1;
todoParser.RULE_methodName = 2;
todoParser.RULE_methodCallArguments = 3;


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.methodCall = function() {
    return this.getTypedRuleContext(MethodCallContext,0);
};

ExpressionContext.prototype.STRING = function() {
    return this.getToken(todoParser.STRING, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitExpression(this);
	}
};




todoParser.ExpressionContext = ExpressionContext;

todoParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, todoParser.RULE_expression);
    try {
        this.state = 10;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case todoParser.NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 8;
            this.methodCall();
            break;
        case todoParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 9;
            this.match(todoParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_methodCall;
    return this;
}

MethodCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodCallContext.prototype.constructor = MethodCallContext;

MethodCallContext.prototype.methodName = function() {
    return this.getTypedRuleContext(MethodNameContext,0);
};

MethodCallContext.prototype.methodCallArguments = function() {
    return this.getTypedRuleContext(MethodCallArgumentsContext,0);
};

MethodCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterMethodCall(this);
	}
};

MethodCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitMethodCall(this);
	}
};




todoParser.MethodCallContext = MethodCallContext;

todoParser.prototype.methodCall = function() {

    var localctx = new MethodCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, todoParser.RULE_methodCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.methodName();
        this.state = 13;
        this.match(todoParser.T__0);
        this.state = 14;
        this.methodCallArguments();
        this.state = 15;
        this.match(todoParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_methodName;
    return this;
}

MethodNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodNameContext.prototype.constructor = MethodNameContext;

MethodNameContext.prototype.NAME = function() {
    return this.getToken(todoParser.NAME, 0);
};

MethodNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterMethodName(this);
	}
};

MethodNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitMethodName(this);
	}
};




todoParser.MethodNameContext = MethodNameContext;

todoParser.prototype.methodName = function() {

    var localctx = new MethodNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, todoParser.RULE_methodName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(todoParser.NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodCallArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_methodCallArguments;
    return this;
}

MethodCallArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodCallArgumentsContext.prototype.constructor = MethodCallArgumentsContext;

MethodCallArgumentsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MethodCallArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterMethodCallArguments(this);
	}
};

MethodCallArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitMethodCallArguments(this);
	}
};




todoParser.MethodCallArgumentsContext = MethodCallArgumentsContext;

todoParser.prototype.methodCallArguments = function() {

    var localctx = new MethodCallArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, todoParser.RULE_methodCallArguments);
    var _la = 0; // Token type
    try {
        this.state = 28;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case todoParser.T__1:
            this.enterOuterAlt(localctx, 1);

            break;
        case todoParser.NAME:
        case todoParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 20;
            this.expression();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===todoParser.T__2) {
                this.state = 21;
                this.match(todoParser.T__2);
                this.state = 22;
                this.expression();
                this.state = 27;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.todoParser = todoParser;
