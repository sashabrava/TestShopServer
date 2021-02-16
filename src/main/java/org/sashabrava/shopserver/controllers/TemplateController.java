package org.sashabrava.shopserver.controllers;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
        json.put("text", "Main page of Shop Server is up and running");
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
