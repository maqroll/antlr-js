// Generated from todo.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\fD\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0006",
    "\u0007,\n\u0007\r\u0007\u000e\u0007-\u0003\b\u0006\b1\n\b\r\b\u000e",
    "\b2\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f",
    "\u0003\f\u0007\f=\n\f\f\f\u000e\f@\u000b\f\u0003\r\u0003\r\u0003\r\u0002",
    "\u0002\u000e\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\u0002\u0013\u0002\u0015\n\u0017\u000b\u0019\f\u0003",
    "\u0002\u0006\u0005\u00022;CHch\u0005\u0002C\\aac|\u0006\u00022;C\\a",
    "ac|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002D\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003\u001b\u0003\u0002",
    "\u0002\u0002\u0005 \u0003\u0002\u0002\u0002\u0007\"\u0003\u0002\u0002",
    "\u0002\t$\u0003\u0002\u0002\u0002\u000b&\u0003\u0002\u0002\u0002\r(",
    "\u0003\u0002\u0002\u0002\u000f0\u0003\u0002\u0002\u0002\u00114\u0003",
    "\u0002\u0002\u0002\u00136\u0003\u0002\u0002\u0002\u00158\u0003\u0002",
    "\u0002\u0002\u0017:\u0003\u0002\u0002\u0002\u0019A\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0007g\u0002\u0002\u001c\u001d\u0007p\u0002\u0002",
    "\u001d\u001e\u0007w\u0002\u0002\u001e\u001f\u0007o\u0002\u0002\u001f",
    "\u0004\u0003\u0002\u0002\u0002 !\u0007}\u0002\u0002!\u0006\u0003\u0002",
    "\u0002\u0002\"#\u0007\u007f\u0002\u0002#\b\u0003\u0002\u0002\u0002$",
    "%\u0007=\u0002\u0002%\n\u0003\u0002\u0002\u0002&\'\u0007?\u0002\u0002",
    "\'\f\u0003\u0002\u0002\u0002()\u00072\u0002\u0002)+\u0007z\u0002\u0002",
    "*,\u0005\u0011\t\u0002+*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002",
    "\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.\u000e\u0003",
    "\u0002\u0002\u0002/1\u0005\u0013\n\u00020/\u0003\u0002\u0002\u00021",
    "2\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u00023\u0010\u0003\u0002\u0002\u000245\t\u0002\u0002\u00025\u0012\u0003",
    "\u0002\u0002\u000267\u00042;\u00027\u0014\u0003\u0002\u0002\u000289",
    "\u0007.\u0002\u00029\u0016\u0003\u0002\u0002\u0002:>\t\u0003\u0002\u0002",
    ";=\t\u0004\u0002\u0002<;\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?\u0018\u0003",
    "\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002AB\t\u0005\u0002\u0002B",
    "C\b\r\u0002\u0002C\u001a\u0003\u0002\u0002\u0002\u0006\u0002-2>\u0003",
    "\u0003\r\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class todoLexer extends antlr4.Lexer {

    static grammarFileName = "todo.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'enum'", "'{'", "'}'", "';'", "'='", null, 
                         null, "','" ];
	static symbolicNames = [ null, null, null, null, null, null, "HEX_NUMBER", 
                          "INTEGER_NUMBER", "COMMA", "ID", "SPACE" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "HEX_NUMBER", 
                      "INTEGER_NUMBER", "HEX_DIGIT", "DIGIT", "COMMA", "ID", 
                      "SPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

todoLexer.EOF = antlr4.Token.EOF;
todoLexer.T__0 = 1;
todoLexer.T__1 = 2;
todoLexer.T__2 = 3;
todoLexer.T__3 = 4;
todoLexer.T__4 = 5;
todoLexer.HEX_NUMBER = 6;
todoLexer.INTEGER_NUMBER = 7;
todoLexer.COMMA = 8;
todoLexer.ID = 9;
todoLexer.SPACE = 10;

todoLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 11:
		this.SPACE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};


todoLexer.prototype.SPACE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		skip();
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};



