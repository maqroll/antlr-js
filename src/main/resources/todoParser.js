// Generated from todo.g4 by ANTLR 4.9.1
// jshint ignore: start
//import antlr4 from 'antlr4';
import todoListener from './todoListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000b\u001e\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "\f\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002\u0013\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0019\n\u0002\f\u0002\u000e\u0002\u001c\u000b\u0002",
    "\u0003\u0002\u0002\u0003\u0002\u0003\u0002\u0002\u0003\u0003\u0002\u0005",
    "\u0006\u0002\"\u0002\u000b\u0003\u0002\u0002\u0002\u0004\u0005\b\u0002",
    "\u0001\u0002\u0005\u0006\u0007\u0004\u0002\u0002\u0006\u0007\u0005\u0002",
    "\u0002\u0002\u0007\b\u0007\u0003\u0002\u0002\b\f\u0003\u0002\u0002\u0002",
    "\t\f\u0007\n\u0002\u0002\n\f\u0007\t\u0002\u0002\u000b\u0004\u0003\u0002",
    "\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\n\u0003\u0002\u0002",
    "\u0002\f\u001a\u0003\u0002\u0002\u0002\r\u000e\f\u0007\u0002\u0002\u000e",
    "\u000f\u0007\b\u0002\u0002\u000f\u0019\u0005\u0002\u0002\u0007\u0010",
    "\u0012\f\u0006\u0002\u0002\u0011\u0013\u0007\u0007\u0002\u0002\u0012",
    "\u0011\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0003\u0002\u0002\u0002\u0014\u0019\u0005\u0002\u0002\u0007\u0015",
    "\u0016\f\u0005\u0002\u0002\u0016\u0017\t\u0002\u0002\u0002\u0017\u0019",
    "\u0005\u0002\u0002\u0006\u0018\r\u0003\u0002\u0002\u0002\u0018\u0010",
    "\u0003\u0002\u0002\u0002\u0018\u0015\u0003\u0002\u0002\u0002\u0019\u001c",
    "\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b",
    "\u0003\u0002\u0002\u0002\u001b\u0003\u0003\u0002\u0002\u0002\u001c\u001a",
    "\u0003\u0002\u0002\u0002\u0006\u000b\u0012\u0018\u001a"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class todoParser extends antlr4.Parser {

    static grammarFileName = "todo.g4";
    static literalNames = [ null, "')'", "'('", "'+'", "'-'", "'*'", "'^'", 
                            null, null, "' '" ];
    static symbolicNames = [ null, "CP", "OP", "PLUS", "MINUS", "PROD", 
                             "POWER", "NUM", "VAR", "WS" ];
    static ruleNames = [ "expr" ];

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

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, todoParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case todoParser.OP:
	            localctx = new ParenExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 3;
	            this.match(todoParser.OP);
	            this.state = 4;
	            this.expr(0);
	            this.state = 5;
	            this.match(todoParser.CP);
	            break;
	        case todoParser.VAR:
	            localctx = new VarContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 7;
	            this.match(todoParser.VAR);
	            break;
	        case todoParser.NUM:
	            localctx = new ConstContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 8;
	            this.match(todoParser.NUM);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 22;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, todoParser.RULE_expr);
	                    this.state = 11;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 12;
	                    this.match(todoParser.POWER);
	                    this.state = 13;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new ProdContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, todoParser.RULE_expr);
	                    this.state = 14;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 16;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===todoParser.PROD) {
	                        this.state = 15;
	                        this.match(todoParser.PROD);
	                    }

	                    this.state = 18;
	                    this.expr(5);
	                    break;

	                case 3:
	                    localctx = new PlusminusContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, todoParser.RULE_expr);
	                    this.state = 19;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 20;
	                    _la = this._input.LA(1);
	                    if(!(_la===todoParser.PLUS || _la===todoParser.MINUS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 21;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

todoParser.EOF = antlr4.Token.EOF;
todoParser.CP = 1;
todoParser.OP = 2;
todoParser.PLUS = 3;
todoParser.MINUS = 4;
todoParser.PROD = 5;
todoParser.POWER = 6;
todoParser.NUM = 7;
todoParser.VAR = 8;
todoParser.WS = 9;

todoParser.RULE_expr = 0;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = todoParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PlusminusContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(todoParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(todoParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterPlusminus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitPlusminus(this);
		}
	}


}

todoParser.PlusminusContext = PlusminusContext;

class ProdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PROD() {
	    return this.getToken(todoParser.PROD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterProd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitProd(this);
		}
	}


}

todoParser.ProdContext = ProdContext;

class ConstContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(todoParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterConst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitConst(this);
		}
	}


}

todoParser.ConstContext = ConstContext;

class VarContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR() {
	    return this.getToken(todoParser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitVar(this);
		}
	}


}

todoParser.VarContext = VarContext;

class ParenExpContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OP() {
	    return this.getToken(todoParser.OP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CP() {
	    return this.getToken(todoParser.CP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterParenExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitParenExp(this);
		}
	}


}

todoParser.ParenExpContext = ParenExpContext;

class PowerContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	POWER() {
	    return this.getToken(todoParser.POWER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.enterPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof todoListener ) {
	        listener.exitPower(this);
		}
	}


}

todoParser.PowerContext = PowerContext;


todoParser.ExprContext = ExprContext; 
