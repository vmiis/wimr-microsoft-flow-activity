(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"all"]                          ={url:H+"/business/all/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"snapforms-sleep-registration"] ={url:H+"/business/snapforms-sleep-registration/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"number-of-sleep-study-by-year-and-month"]={url:H+"/business/number-of-sleep-study-by-year-and-month/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
    m[p+"number-of-sleep-study-by-year"]={url:H+"/business/number-of-sleep-study-by-year/page.html",Table:'flow-activity',form_module:'jsonv',prefix:p,router:1};
})();
