﻿angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
    $provide.value("$locale", {
        "DATETIME_FORMATS": { "MONTH": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "SHORTMONTH": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "DAY": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "SHORTDAY": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "AMPMS": ["AM", "PM"], "medium": "d MMM y HH:mm:ss", "short": "dd/MM/yyyy HH:mm", "fullDate": "EEEE, d MMMM y", "longDate": "d MMMM y", "mediumDate": "d MMM y", "shortDate": "dd/MM/yyyy", "mediumTime": "HH:mm:ss", "shortTime": "HH:mm" }, "NUMBER_FORMATS": { "DECIMAL_SEP": ".", "GROUP_SEP": ",", "PATTERNS": [{ "minInt": 1, "minFrac": 0, "macFrac": 0, "posPre": "", "posSuf": "", "negPre": "-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 3 }, { "minInt": 1, "minFrac": 2, "macFrac": 0, "posPre": "\u00A4", "posSuf": "", "negPre": "\u00A4-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 2 }], "CURRENCY_SYM": "£" },
        "pluralCat": function(n) {
            if (n == 1) {
                return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
        },
        "id": "en-gb"
    });
}]);