// Generated from todo.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import todoListener from './todoListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\f$\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0006\u0002\u000f\n\u0002\r\u0002\u000e\u0002\u0010\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003",
    "\u0019\n\u0003\r\u0003\u000e\u0003\u001a\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004 \n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0002",
    "\u0002\u0006\u0002\u0004\u0006\b\u0002\u0003\u0003\u0002\b\t\u0002\"",
    "\u0002\n\u0003\u0002\u0002\u0002\u0004\u0015\u0003\u0002\u0002\u0002",
    "\u0006\u001c\u0003\u0002\u0002\u0002\b!\u0003\u0002\u0002\u0002\n\u000b",
    "\u0007\u0003\u0002\u0002\u000b\f\u0007\u000b\u0002\u0002\f\u000e\u0007",
    "\u0004\u0002\u0002\r\u000f\u0005\u0004\u0003\u0002\u000e\r\u0003\u0002",
    "\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u000e\u0003\u0002",
    "\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002",
    "\u0002\u0002\u0012\u0013\u0007\u0005\u0002\u0002\u0013\u0014\u0007\u0006",
    "\u0002\u0002\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0018\u0005\u0006",
    "\u0004\u0002\u0016\u0017\u0007\n\u0002\u0002\u0017\u0019\u0005\u0006",
    "\u0004\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002",
    "\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002",
    "\u0002\u0002\u001b\u0005\u0003\u0002\u0002\u0002\u001c\u001f\u0007\u000b",
    "\u0002\u0002\u001d\u001e\u0007\u0007\u0002\u0002\u001e \u0005\b\u0005",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 \u0007\u0003\u0002\u0002\u0002!\"\t\u0002\u0002\u0002\"\t\u0003",
    "\u0002\u0002\u0002\u0005\u0010\u001a\u001f"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class todoParser extends antlr4.Parser {

    static grammarFileName = "todo.g4";
    static literalNames = [ null, "'enum'", "'{'", "'}'", "';'", "'='", 
                            null, null, "','" ];
    static symbolicNames = [ null, null, null, null, null, null, "HEX_NUMBER", 
                             "INTEGER_NUMBER", "COMMA", "ID", "SPACE" ];
    static ruleNames = [ "rule_enum", "enum_values", "enum_value", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = todoParser.ruleNames;
        this.literalNames = todoParser.literalNames;
        this.symbolicNames = todoParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	rule_enum() {
	    let localctx = new Rule_enumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, todoParser.RULE_rule_enum);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.match(todoParser.T__0);
	        this.state = 9;
	        this.match(todoParser.ID);
	        this.state = 10;
	        this.match(todoParser.T__1);
	        this.state = 12; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 11;
	            this.enum_values();
	            this.state = 14; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===todoParser.ID);
	        this.state = 16;
	        this.match(todoParser.T__2);
	        this.state = 17;
	        this.match(todoParser.T__3);
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
	}



	enum_values() {
	    let localctx = new Enum_valuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, todoParser.RULE_enum_values);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.enum_value();
	        this.state = 22; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.match(todoParser.COMMA);
	            this.state = 21;
	            this.enum_value();
	            this.state = 24; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===todoParser.COMMA);
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
	}



	enum_value() {
	    let localctx = new Enum_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, todoParser.RULE_enum_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(todoParser.ID);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===todoParser.T__4) {
	            this.state = 27;
	            this.match(todoParser.T__4);
	            this.state = 28;
	            this.number();
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
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, todoParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!(_la===todoParser.HEX_NUMBER || _la===todoParser.INTEGER_NUMBER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
	}


}

todoParser.EOF = antlr4.Token.EOF;
todoParser.T__0 = 1;
todoParser.T__1 = 2;
todoParser.T__2 = 3;
todoParser.T__3 = 4;
todoParser.T__4 = 5;
todoParser.HEX_NUMBER = 6;
todoParser.INTEGER_NUMBER = 7;
todoParser.COMMA = 8;
todoParser.ID = 9;
todoParser.SPACE = 10;

todoParser.RULE_rule_enum = 0;
todoParser.RULE_enum_values = 1;
todoParser.RULE_enum_value = 2;
todoParser.RULE_number = 3;

class Rule_enumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = todoParser.RULE_rule_enum;
    }

	ID() {
	    return this.getToken(todoParser.ID, 0);
	};

	enum_values = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Enum_valuesContext);
	    } else {
	        return this.getTypedRuleContext(Enum_valuesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterRule_enum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitRule_enum(this);
		}
	}


}



class Enum_valuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = todoParser.RULE_enum_values;
    }

	enum_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Enum_valueContext);
	    } else {
	        return this.getTypedRuleContext(Enum_valueContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(todoParser.COMMA);
	    } else {
	        return this.getToken(todoParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterEnum_values(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitEnum_values(this);
		}
	}


}



class Enum_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = todoParser.RULE_enum_value;
    }

	ID() {
	    return this.getToken(todoParser.ID, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterEnum_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitEnum_value(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = todoParser.RULE_number;
    }

	HEX_NUMBER() {
	    return this.getToken(todoParser.HEX_NUMBER, 0);
	};

	INTEGER_NUMBER() {
	    return this.getToken(todoParser.INTEGER_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitNumber(this);
		}
	}


}




todoParser.Rule_enumContext = Rule_enumContext; 
todoParser.Enum_valuesContext = Enum_valuesContext; 
todoParser.Enum_valueContext = Enum_valueContext; 
todoParser.NumberContext = NumberContext; 
