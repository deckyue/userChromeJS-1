// ==UserScript==
// @name                 CustomSidebarButton.uc.js
// @description       側邊攔按鈕
// @author               skofkyo
// @license               MIT License
// @compatibility    Firefox 29+
// @charset              UTF-8
// @version              2016.7.16            
// @include              main
// @include              chrome://browser/content/browser.xul
// @note                   2016.7.16 重寫代碼
// @homepageURL    https://github.com/skofkyo/userChromeJS/blob/master/userButton/02-Sidebarbutton.uc.js
// ==/UserScript==
(function() {

    window.CustomSidebarButton = {

        addmovebtn: function() {
            CustomizableUI.createWidget({
                id: 'CustomSidebarButton',
                type: 'custom',
                defaultArea: CustomizableUI.AREA_NAVBAR,
                onBuild: function(aDocument) {
                    var tb = aDocument.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'toolbarbutton');
                    var props = {
                        id: 'CustomSidebarButton',
                        class: 'toolbarbutton-1 chromeclass-toolbar-additional',
                        removable: 'true',
                        overflows: "false",
                        label: '側邊欄開關',
                        tooltiptext: "左鍵：書籤側邊攔\n右鍵：歷史側邊攔",
                        type: 'button',
                        style: "list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABzklEQVQ4jcWQz0/aYBzGv1f/Ci8KcYGIvzYcRhCVAqWFUt6W/rB929ESutEMPEyDO5iMmOwf8OjBg38javLssK1xELjuST6HJ/k83zd5if571jcy083M/mwze4BU9j3S2x+Q3s4nbOUO8W638A9bOx+Rzh7M1jcyU8rly7NSrYOHx6fSw+NTqVht49v3qVOsqS+THz+NSsuEpPsLVBUbO4flVzoW2lCsPk7qDGWRQWQckuah8QfmRLD7lwuYwQjFahtUbmjQP8UQdY665qLjRmBuBLnro84cSLqHptlLaFkBOjyCGY5wKmmgM7kL1Rng6vbOAJBS7BCKHQJAahlXt3eG6gxwJndBlaYJkXEAWCMiqqkOaqqDVR8PYE1kHJWmCRIUG0L7IhkIig1BsVceICIS2he/varqoPrmxfm+LIlXZxx1xpPBfF+WxGvoPhq6nwzm+7IknmQGkM0gGUhmAOlNXxb5r9eyQjB/iHQuXyAiUt0IqhutPJDaOzpi/hAtKwQ1zeDZi29w3rJwKnfhxRN48QQnoobdwvkC+8cCKooFL76BbPReSXMH92b/8sUIxzCCEfjwGnx4jW7vKzru5wUY/wIjHMMKx88aH9z/AnRJPbZJkdIWAAAAAElFTkSuQmCC)",
                        onclick: 'CustomSidebarButton.iconClick(event);',
                        context: '_child',
                    };
                    for (var p in props)
                        tb.setAttribute(p, props[p]);
                    return tb;
                }
            });
        },

        iconClick: function(event) {
            switch (event.button) {
                case 0:
                    toggleSidebar("viewBookmarksSidebar");
                    break;
                /*
                case 1:
                    toggleSidebar("viewHistorySidebar");
                    break;
                case 2:
                    try {
                        toggleSidebar('viewStylishSidebar');
                    } catch (ex) {
                        alert("\u672A\u5B89\u88DDStylish \u7121\u6B64\u5074\u908A\u6B04");
                    }
                    break;
                */
                case 2:
                    toggleSidebar("viewHistorySidebar");
                    break;
            }
        },

    };

    window.CustomSidebarButton.addmovebtn();

}());