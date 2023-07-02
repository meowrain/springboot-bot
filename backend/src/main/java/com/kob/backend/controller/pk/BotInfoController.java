package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
public class BotInfoController {
    @RequestMapping("getbotinfo")
    public List<Map<String,String>> getBotInfo(){
        List<Map<String,String>> list = new LinkedList<>();
        Map<String,String> bot1 = new HashMap<>();
        bot1.put("meow","rain");
        Map<String,String> bot2 = new HashMap<>();
        bot2.put("nice","google");
        list.add(bot1);
        list.add(bot2);
        return list;
    }
}
