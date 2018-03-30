# mkMethod function
Usage: `mkMethod(method,opts)`

## [parseTextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1parse_text_entities.html)
Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text. This is an offline method. Can be called before authorization. Can be called synchronously.
Returns object_ptr\<FormattedText\>.

| Parameters | Type | Required | Description |
| - | - | - | - |
| text | String | Yes | The text which should be parsed. |
| parse_mode | String | Optional | Text parse mode. `Markdown` or `HTML`, `Markdown` by default. |
