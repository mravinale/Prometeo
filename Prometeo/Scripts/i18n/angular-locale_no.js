﻿angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
    $provide.value("$locale", {
        "DATETIME_FORMATS": { "MONTH": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], "SHORTMONTH": ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."], "DAY": ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], "SHORTDAY": ["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."], "AMPMS": ["AM", "PM"], "medium": "d. MMM y HH:mm:ss", "short": "dd.MM.yy HH:mm", "fullDate": "EEEE d. MMMM y", "longDate": "d. MMMM y", "mediumDate": "d. MMM y", "shortDate": "dd.MM.yy", "mediumTime": "HH:mm:ss", "shortTime": "HH:mm" }, "NUMBER_FORMATS": { "DECIMAL_SEP": ",", "GROUP_SEP": " ", "PATTERNS": [{ "minInt": 1, "minFrac": 0, "macFrac": 0, "posPre": "", "posSuf": "", "negPre": "-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 3 }, { "minInt": 1, "minFrac": 2, "macFrac": 0, "posPre": "\u00A4 ", "posSuf": "", "negPre": "\u00A4 -", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 2 }], "CURRENCY_SYM": "kr" },
        "pluralCat": function(n) {
            if (n == 1) {
                return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
        },
        "id": "no"
    });
}]);