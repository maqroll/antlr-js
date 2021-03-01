// Our grammar is called C3PO.
grammar todo;

expr        : OP expr CP                    #parenExp
	    | <assoc=right> expr POWER expr #power
	    | expr PROD? expr               #prod
	    | expr (PLUS|MINUS) expr        #plusminus
	    | VAR                           #var
	    | NUM                           #const;

CP      : ')';
OP      : '(';
PLUS    : '+';
MINUS   : '-';
PROD    : '*';
POWER   : '^';
NUM     : [0-9.]+;
VAR     : [a-z];
WS      : ' ' -> skip;

