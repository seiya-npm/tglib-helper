const mkMethod = (method, opts) => {
    
    // define opts
    let data = {};
    let type = false;
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
    
    const sendMessageMethods = [
        'sendMessage',
        'forwardMessage',
        'sendPhoto',
        'sendAudio',
        'sendDocument',
        'sendVideo',
        'sendVoice'
    ];
    if( sendMessageMethods.indexOf(method) > -1 ){
        // base
        data = {
            "@type": "sendMessage",
            "chat_id": opts.chat_id,
            "input_message_content": {}
        };
        if(opts.reply_to_message_id){ // && method != 'forwardMessage'
            data.reply_to_message_id = opts.reply_to_message_id;
        }
        if(opts.disable_notification){
            data.disable_notification = opts.disable_notification;
        }
        // text msg
        if(method == 'sendMessage'){
            type = 'text';
            data.input_message_content["@type"] = "inputMessageText";
            data.input_message_content[type] = {
                "@type": "formattedText",
                "text": opts.text
            }
            if(opts.text_entities){
                data.input_message_content[type].entities = opts.text_entities;
            }
        }
        // forward
        if(method == 'forwardMessage'){
            data.input_message_content = {
                "@type": "inputMessageForwarded",
                "from_chat_id": opts.from_chat_id,
                "message_id": opts.message_id
            };
        }
        // photo msg
        if(method == 'sendPhoto'){
            type = 'photo';
            data.input_message_content["@type"] = "inputMessagePhoto";
        }
        // audio msg
        if(method == 'sendAudio'){
            type = 'audio';
            data.input_message_content["@type"] = "inputMessageAudio";
        }
        // document msg
        if(method == 'sendDocument'){
            type = 'document';
            data.input_message_content["@type"] = "inputMessageDocument";
        }
        // video msg
        if(method == 'sendVideo'){
            type = 'video';
            data.input_message_content["@type"] = "inputMessageVideo";
        }
        // voice msg
        if(method == 'sendVoice'){
            type = 'voice_note';
            data.input_message_content["@type"] = "inputMessageVoiceNote";
        }
        // media msg
        if(type && type != 'text'){
            data.input_message_content[type] = {};
            if(opts.is_remote){
                data.input_message_content[type] = {
                    "@type": "inputFileRemote",
                    "id": opts[type]
                };
            }
            else{
                data.input_message_content[type] = {
                    "@type": "inputFileLocal",
                    "path": opts[type]
                };
            }
            // type specific options
            if(type == 'video' && opts.supports_streaming){
                 data.input_message_content[type].supports_streaming = opts.supports_streaming;
            }
        }
        // caption when needed
        if(opts.caption){
            const captionTypes = [
                'photo',
                'audio',
                'document',
                'video',
                'voice_note'
            ];
            if( captionTypes.indexOf(type) > -1 ){
                data.input_message_content.caption = {
                    "@type": "formattedText",
                    "text": opts.caption
                };
                if(opts.caption_entities){
                    data.input_message_content.caption.entities = opts.caption_entities;
                }
            }
        }
        // return
        return data;
    }
    
    return data;
    // -- end --
}

module.exports = { 
    mkMethod
};