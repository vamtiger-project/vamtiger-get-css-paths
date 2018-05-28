"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const vamtiger_get_stylesheet_links_1 = require("vamtiger-get-stylesheet-links");
const vamtiger_regex_html_href_1 = require("vamtiger-regex-html-href");
exports.default = (params) => {
    const html = params.html;
    const links = vamtiger_get_stylesheet_links_1.default({ html });
    const paths = links && links
        .map(link => XRegExp.exec(link, vamtiger_regex_html_href_1.default))
        .filter(match => match ? true : false)
        .map((match) => match.href || '');
    return paths;
};
//# sourceMappingURL=index.js.map