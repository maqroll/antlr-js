grammar todo;

rule_enum
:   'enum' ID '{' enum_values+ '}'';';

enum_values
:   enum_value (COMMA enum_value)+;

enum_value
:   ID ('=' number)?;

number
  :  HEX_NUMBER
  |  INTEGER_NUMBER
  ;

HEX_NUMBER
:   '0' 'x' HEX_DIGIT+;

INTEGER_NUMBER
:   DIGIT+;

fragment
HEX_DIGIT : ('0'..'9'|'a'..'f'|'A'..'F') ;

fragment
DIGIT   :   ('0'..'9');

COMMA   :   ',';

ID  :   ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*;

SPACE : (' ' | '\t' | '\r' | '\n') {skip();};
