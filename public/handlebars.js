(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ad'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"trending\">\r\n      <div class=\"trending-content\">\r\n        <p class=\"trending-name\">\r\n          "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"trending-author\">\r\n          <a href=\"#\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a>\r\n        </p>\r\n      </div>\r\n    </article>\r\n";
},"useData":true});
templates['chat'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"this-chat\">\r\n  <div class=\"this-message\">\r\n    <p>"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </div>\r\n  <span class=\"this-author-left\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n";
},"useData":true});
templates['chatbutton'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\r\n  <div id=\"create-chat-modal\" class=\"hidden\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <div class=\"modal-header\">\r\n        <h3>Create a Chat</h3>\r\n        <button type=\"button\" class=\"modal-close-button\">&times;</button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"chat-input-element\">\r\n          <label for=\"chat-text-input\">Chat</label>\r\n          <textarea id=\"chat-text-input\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"modal-cancel-button\">Cancel</button>\r\n        <button type=\"button\" class=\"minimodal-accept-button\">Send Chat</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['createbutton'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\r\n  <div id=\"create-chat-modal\" class=\"hidden\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <div class=\"modal-header\">\r\n        <h3>Create a Chatroom</h3>\r\n        <button type=\"button\" class=\"modal-close-button\">&times;</button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"chat-input-element\">\r\n          <label for=\"chat-text-input\">Chat Name</label>\r\n          <textarea id=\"chat-text-input\"></textarea>\r\n        </div>\r\n        <div class=\"chat-input-element\">\r\n          <label for=\"chat-attribution-input\">Other User</label>\r\n          <input type=\"text\" id=\"chat-attribution-input\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"modal-cancel-button\">Cancel</button>\r\n        <button type=\"button\" class=\"modal-accept-button\">Create chatroom</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"./index.html\"><h1 class=\"site-title\"><i class=\"far fa-comments\"></i> ChatterBox</h1></a>\r\n\r\n<nav class=\"navbar\">\r\n  <ul class=\"navlist\">\r\n    <li class=\"navitem navlink\"><a href=\"#\">Home</a></li>\r\n    <li class=\"navitem navlink\"><a href=\"#\">Login</a></li>\r\n  </ul>\r\n</nav>\r\n";
},"useData":true});
templates['homechat'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"chat\">\r\n  <div class=\"chat-content\">\r\n    <p class=\"chat-name\">\r\n      "
    + alias4(((helper = (helper = helpers.chatName || (depth0 != null ? depth0.chatName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatName","hash":{},"data":data}) : helper)))
    + "\r\n    </p>\r\n    <p class=\"chat-author\">\r\n      <a href='chat/"
    + alias4(((helper = (helper = helpers.chatName || (depth0 != null ? depth0.chatName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatName","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.members || (depth0 != null ? depth0.members : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"members","hash":{},"data":data}) : helper)))
    + "</a>\r\n    </p>\r\n  </div>\r\n</article>\r\n";
},"useData":true});
templates['main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<meta charset=\"utf-8\">\r\n		<title>ChatterBox</title>\r\n		<link rel=\"stylesheet\" href=\"./style.css\" media=\"screen\">\r\n		<script src=\"./index.js\" charset=\"utf-8\" defer></script>\r\n		<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.9/css/all.css\" crossorigin=\"anonymous\">\r\n	</head>\r\n	<body>\r\n	  "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n	</body>\r\n</html>\r\n";
},"useData":true});
templates['404'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<main class=\"lcontainer\">\r\n    <h2>404</h2>\r\n    <h3>Oops, page not found.</h3>\r\n  </main>\r\n";
},"usePartial":true,"useData":true});
templates['convo'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.chat,depth0,{"name":"chat","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<main class=\"chatter-container\">\r\n<div class=\"chat-names\">\r\n  <h2>"
    + container.escapeExpression(((helper = (helper = helpers.chatName || (depth0 != null ? depth0.chatName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"chatName","hash":{},"data":data}) : helper)))
    + "</h2>\r\n</div>\r\n\r\n<main class=\"chat-container\">\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.messages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</main>\r\n\r\n</main>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials.chatbutton,depth0,{"name":"chatbutton","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['homepage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.ad,depth0,{"name":"ad","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.homechat,depth0,{"name":"homechat","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<main class=\"mcontainer\">\r\n\r\n  <main class=\"rcontainer\">\r\n    <div class=\"ads\">\r\n      <p>Trending</p>\r\n    </div>\r\n\r\n    <main class=\"inner\">\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.trending : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </main>\r\n  </main>\r\n\r\n  <main class=\"container\">\r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.homechats : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  </main>\r\n\r\n</main>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials.createbutton,depth0,{"name":"createbutton","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['login'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<main class=\"lcontainer\">\r\n  <h2>Anonymous</h2>\r\n  <h3>you are already logged in</h3>\r\n</main>\r\n";
},"usePartial":true,"useData":true});
})();