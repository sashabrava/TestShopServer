package org.sashabrava.shopserver.controllers;

import org.json.JSONObject;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Locale;

@Controller
@RequestMapping(path = "/")
public class TemplateController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @ResponseBody
    @GetMapping(value = "/api", produces = "application/json")

    public String indexAPI() {
        JSONObject json = new JSONObject();
        ReloadableResourceBundleMessageSource messageSource =    new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:messages");
        MessageSourceAccessor accessor = new MessageSourceAccessor(messageSource, Locale.getDefault());
        String message = accessor.getMessage("index", "Error receiving message from properties file. Please contact the administrator.");
        json.put("text", message);
        return json.toString();
    }

    @ResponseBody
    @GetMapping(value = "/api/check-alive", produces = "application/json")
    public String checkAlive() {
        JSONObject json = new JSONObject();
        json.put("status", "Running");
        return json.toString();
    }
}
