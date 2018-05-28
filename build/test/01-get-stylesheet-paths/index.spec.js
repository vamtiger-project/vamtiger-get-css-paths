"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("../..");
const mock_data_1 = require("./mock-data");
describe('vamtiger-regex-html-href should match', function () {
    it('href', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const expected = [
                'some/stylesheet/link/index.css',
                'another/stylesheet/link/index.css',
                'https://yet/another/stylesheet/link/index.css'
            ];
            const stylesheetPaths = __1.default({ html: mock_data_1.default });
            chai_1.expect(stylesheetPaths).to.be.ok;
            chai_1.expect(stylesheetPaths.every(stylesheetPath => expected.some(expectedStylesheetPath => expectedStylesheetPath === stylesheetPath))).to.be.true;
        });
    });
});
//# sourceMappingURL=index.spec.js.map