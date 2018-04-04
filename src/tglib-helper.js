const mkMethod = (method, opts) => {
    
    // define opts
    let data = {};
    opts = opts || {};
    
    // -- methods --
    
    if(method == 'parseTextEntities'){
        data = {
            "@type": "parseTextEntities",
            "text": opts.text,
            "parse_mode": {
                "@type": "textParseModeMarkdown" // Markdown by default
            }
        }
        if(opts.parse_mode == 'HTML'){
            data.parse_mode["@type"] = "textParseModeHTML"
        }
        return data;
    }
    
    if(method == 'getMe'){
        data = {
            "@type": "getMe"
        }
        return data;
    }
    
    if(method == 'sendMessage'){
        data = {
            "@type": "sendMessage",
            "chat_id": opts.chat_id,
            "input_message_content": {
                "@type": "inputMessageText",
                "text": {
                    "@type": "formattedText",
                    "text": opts.text
                }
            }
        };
        if(opts.text_entities){
            data.input_message_content.text.entities = opts.text_entities;
        }
        if(opts.reply_to_message_id){
            data.reply_to_message_id = opts.reply_to_message_id;
        }
        return data;
    }
    
    if(method == 'forwardMessage'){
        data = {
            "@type": "forwardMessages",
            "chat_id": opts.chat_id,
            "from_chat_id": opts.from_chat_id,
            "message_ids": [ opts.message_id ]
        };
        if(opts.disable_notification){
            data.disable_notification = opts.disable_notification;
        }
        return data;
    }
    
    if(method == 'sendPhoto'){
        data = {
            "@type": "sendMessage",
            "chat_id": opts.chat_id,
            "input_message_content": {
                "@type": "inputMessagePhoto",
                "photo": {
                    "@type": "inputFileLocal",
                    "path": opts.path
                }
            }
        };
        if(opts.caption){
            data.input_message_content.caption = {
                "@type": "formattedText",
                "text": opts.caption
            };
            if(opts.caption_entities){
                data.input_message_content.caption.entities = opts.caption_entities;
            }
        }
        if(opts.reply_to_message_id){
            data.reply_to_message_id = opts.reply_to_message_id;
        }
        return data;
    }
    
    return data;
    // -- end --
}

module.exports = { 
	mkMethod
};