(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"all"]                                  ={url:H+"/business/all/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"today"]                                ={url:H+"/business/today/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"yesterday"]                            ={url:H+"/business/yesterday/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"rat"]                                  ={url:H+"/business/rat/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"sleep-study-pres-assessment-phone"]    ={url:H+"/business/sleep-study-pres-assessment-phone/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};

        
    m[p+"snapforms-sleep-registration"] ={url:H+"/business/snapforms-sleep-registration/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"number-of-sleep-study-by-year-and-month"]={url:H+"/business/number-of-sleep-study-by-year-and-month/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"number-of-sleep-study-by-year"]={url:H+"/business/number-of-sleep-study-by-year/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    
    m[p+"snapforms-sleep-registration-chart-this-month"] ={url:H+"/business/snapforms-sleep-registration-chart-this-month/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
})();
