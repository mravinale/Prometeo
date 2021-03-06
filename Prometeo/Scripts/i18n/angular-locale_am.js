﻿angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
    $provide.value("$locale", {
        "DATETIME_FORMATS": { "MONTH": ["ጃንዩወሪ", "ፌብሩወሪ", "ማርች", "ኤፕረል", "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክተውበር", "ኖቬምበር", "ዲሴምበር"], "SHORTMONTH": ["ጃንዩ", "ፌብሩ", "ማርች", "ኤፕረ", "ሜይ", "ጁን", "ጁላይ", "ኦገስ", "ሴፕቴ", "ኦክተ", "ኖቬም", "ዲሴም"], "DAY": ["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], "SHORTDAY": ["እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], "AMPMS": ["ጡዋት", "ከሳዓት"], "medium": "d MMM y h:mm:ss a", "short": "dd/MM/yyyy h:mm a", "fullDate": "EEEE, d MMMM y", "longDate": "d MMMM y", "mediumDate": "d MMM y", "shortDate": "dd/MM/yyyy", "mediumTime": "h:mm:ss a", "shortTime": "h:mm a" }, "NUMBER_FORMATS": { "DECIMAL_SEP": ".", "GROUP_SEP": ",", "PATTERNS": [{ "minInt": 1, "minFrac": 0, "macFrac": 0, "posPre": "", "posSuf": "", "negPre": "-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 3 }, { "minInt": 1, "minFrac": 2, "macFrac": 0, "posPre": "\u00A4", "posSuf": "", "negPre": "(\u00A4", "negSuf": ")", "gSize": 3, "lgSize": 3, "maxFrac": 2 }], "CURRENCY_SYM": "Br" },
        "pluralCat": function(n) {
            if (n == 0 || n == 1) {
                return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
        },
        "id": "am"
    });
}]);