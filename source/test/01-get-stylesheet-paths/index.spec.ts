import { expect } from 'chai';
import * as XRegExp from 'xregexp';
import getStylesheetPaths from '../..';
import html from './mock-data';

describe('vamtiger-regex-html-href should match', function () {
    it('href', async function () {
        const expected = [
            'some/stylesheet/link/index.css',
            'another/stylesheet/link/index.css',
            'https://yet/another/stylesheet/link/index.css'
        ];
        const stylesheetPaths = getStylesheetPaths({html});

        expect(stylesheetPaths).to.be.ok;
        expect(stylesheetPaths.every(stylesheetPath => expected.some(expectedStylesheetPath => expectedStylesheetPath === stylesheetPath))).to.be.true;
    })
})