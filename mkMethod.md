# mkMethod function
Usage: `mkMethod(method,opts)`

## [getMe](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_me.html)
A simple method for testing your auth token. Requires no parameters. Returns information about the current user.
Returns [Object"User"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user.html).

## [parseTextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1parse_text_entities.html)
Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text. This is an offline method. Can be called before authorization. Can be called synchronously.
Returns [Object"FormattedText"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1formatted_text.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| text | String | Yes | The text which should be parsed. |
| parse_mode | String | Optional | Text parse mode. `Markdown` or `HTML`, `Markdown` by default. |

## [sendMessage](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html)
Sends a [text message](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_text.html). Returns the sent message.
Returns [Object"Message"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| chat_id | Integer | Yes | Unique identifier for the target chat. |
| text | String | Yes | Text of the message to be sent. |
| text_entities | Array | Optional | A JSON-serialized array for an [TextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity.html). |
| reply_to_message_id | Integer | Optional | Identifier of the message to reply to or 0. |
| disable_notification | Boolean | Optional | Pass true to disable notification for the message. Not supported in secret chats. |

## [forwardMessage](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forward_messages.html)
Forwards previously sent message. Returns the forwarded message. If a message can't be forwarded, null will be returned instead of the message.
Returns [Object"Message"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| chat_id | Integer | Yes | Identifier of the chat to which to forward message. |
| from_chat_id | Integer | Yes | Identifier of the chat from which to forward message.  |
| message_id | Integer | Yes | Identifier of the message to forward. |
| disable_notification | Boolean | Optional | Pass true to disable notification for the message, doesn't work if messages are forwarded to a secret chat. |

## [sendPhoto](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html)
Sends a [photo message](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_photo.html). Returns the sent message.
Returns [Object"Message"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| chat_id | Integer | Yes | Unique identifier for the target chat. |
| photo | String | Yes | Local path to the file. |
| is_remote | Boolean | No | Change input to remote file id. |
| caption | String | Optional | Photo caption; 0-200 characters. |
| caption_entities | Array | Optional | A JSON-serialized array for an [TextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity.html). |
| reply_to_message_id | Integer | Optional | Identifier of the message to reply to or 0. |
| disable_notification | Boolean | Optional | Pass true to disable notification for the message. Not supported in secret chats. |

## [sendAudio](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html)
Sends an [audio message](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_audio.html). Returns the sent message.
Returns [Object"Message"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| chat_id | Integer | Yes | Unique identifier for the target chat. |
| audio | String | Yes | Local path to the file. |
| is_remote | Boolean | No | Change input to remote file id. |
| caption | String | Optional | Audio caption; 0-200 characters. |
| caption_entities | Array | Optional | A JSON-serialized array for an [TextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity.html). |
| reply_to_message_id | Integer | Optional | Identifier of the message to reply to or 0. |
| disable_notification | Boolean | Optional | Pass true to disable notification for the message. Not supported in secret chats. |

## [sendDocument](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html)
Sends a [document message](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_document.html). Returns the sent message.
Returns [Object"Message"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| chat_id | Integer | Yes | Unique identifier for the target chat. |
| document | String | Yes | Local path to the file. |
| is_remote | Boolean | No | Change input to remote file id. |
| caption | String | Optional | Document caption; 0-200 characters. |
| caption_entities | Array | Optional | A JSON-serialized array for an [TextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity.html). |
| reply_to_message_id | Integer | Optional | Identifier of the message to reply to or 0. |
| disable_notification | Boolean | Optional | Pass true to disable notification for the message. Not supported in secret chats. |

## [sendVideo](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html)
Sends a [video message](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_video.html). Returns the sent message.
Returns [Object"Message"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| chat_id | Integer | Yes | Unique identifier for the target chat. |
| video | String | Yes | Local path to the file. |
| is_remote | Boolean | No | Change input to remote file id. |
| caption | String | Optional | Video caption; 0-200 characters. |
| caption_entities | Array | Optional | A JSON-serialized array for an [TextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity.html). |
| reply_to_message_id | Integer | Optional | Identifier of the message to reply to or 0. |
| disable_notification | Boolean | Optional | Pass true to disable notification for the message. Not supported in secret chats. |

## [sendVoice](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html)
Sends a [voice note message](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_voice_note.html). Returns the sent message.
Returns [Object"Message"](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html).

| Parameters | Type | Required | Description |
| - | - | - | - |
| chat_id | Integer | Yes | Unique identifier for the target chat. |
| voice_note | String | Yes | Local path to the file. |
| is_remote | Boolean | No | Change input to remote file id. |
| caption | String | Optional | Voice note caption; 0-200 characters. |
| caption_entities | Array | Optional | A JSON-serialized array for an [TextEntities](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity.html). |
| reply_to_message_id | Integer | Optional | Identifier of the message to reply to or 0. |
| disable_notification | Boolean | Optional | Pass true to disable notification for the message. Not supported in secret chats. |