// Generated from todo.g4 by ANTLR 4.9.1
// jshint ignore: start
//import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\b,\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0007\u0005\u0018\n\u0005\f\u0005\u000e",
    "\u0005\u001b\u000b\u0005\u0003\u0006\u0003\u0006\u0007\u0006\u001f\n",
    "\u0006\f\u0006\u000e\u0006\"\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0006\u0007\'\n\u0007\r\u0007\u000e\u0007(\u0003\u0007\u0003",
    "\u0007\u0002\u0002\b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u0003\u0002\u0006\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0003",
    "\u0002$$\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002.\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003",
    "\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002\u0002\u0007\u0013\u0003",
    "\u0002\u0002\u0002\t\u0015\u0003\u0002\u0002\u0002\u000b\u001c\u0003",
    "\u0002\u0002\u0002\r&\u0003\u0002\u0002\u0002\u000f\u0010\u0007*\u0002",
    "\u0002\u0010\u0004\u0003\u0002\u0002\u0002\u0011\u0012\u0007+\u0002",
    "\u0002\u0012\u0006\u0003\u0002\u0002\u0002\u0013\u0014\u0007.\u0002",
    "\u0002\u0014\b\u0003\u0002\u0002\u0002\u0015\u0019\t\u0002\u0002\u0002",
    "\u0016\u0018\t\u0003\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002",
    "\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002",
    "\u0019\u001a\u0003\u0002\u0002\u0002\u001a\n\u0003\u0002\u0002\u0002",
    "\u001b\u0019\u0003\u0002\u0002\u0002\u001c \u0007$\u0002\u0002\u001d",
    "\u001f\n\u0004\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f",
    "\"\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002",
    "\u0002\u0002!#\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$",
    "\u0007$\u0002\u0002$\f\u0003\u0002\u0002\u0002%\'\t\u0005\u0002\u0002",
    "&%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(&\u0003\u0002",
    "\u0002\u0002()\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*+\b",
    "\u0007\u0002\u0002+\u000e\u0003\u0002\u0002\u0002\u0006\u0002\u0019",
    " (\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class todoLexer extends antlr4.Lexer {

    static grammarFileName = "todo.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "','" ];
	static symbolicNames = [ null, null, null, null, "NAME", "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "NAME", "STRING", "WS" ];

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
todoLexer.NAME = 4;
todoLexer.STRING = 5;
todoLexer.WS = 6;



