// ==UserScript==
// @name         myBSU Revival
// @namespace    http://mybsu.groups.id
// @version      1.0
// @description  Auto-redirects you from my.bsu.edu to myBSU Revival, instead of going to the new, despised MyBallState
// @author       satara765
// @match        *://my.bsu.edu/*
// @grant        none
// @updateURL    https://cdn.jsdelivr.net/gh/satara765/mybsu-revival@latest/benny.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/satara765/mybsu-revival@latest/benny.user.js
// ==/UserScript==

(function() {
    'use strict';
    window.location.replace("https://mybsu.groups.id/?us");
})();
