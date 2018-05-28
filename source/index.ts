import * as XRegExp from 'xregexp';
import getLinks from 'vamtiger-get-stylesheet-links';
import {default as regex, Match} from 'vamtiger-regex-html-href';

export default (params: Params) => {
    const html = params.html;
    const links = getLinks({ html });
    const paths = links && links
        .map(link => XRegExp.exec(link, regex))
        .filter(match => match ? true : false)
        .map((match: Match) => match.href || '');

    return paths;
}

export interface Params {
    html: string;
}