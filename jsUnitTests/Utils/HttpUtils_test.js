'use strict';
import fetchMock from 'fetch-mock';
import HttpUtils from '../../js/Utils/HttpUtils';
import {expect} from 'chai';

describe('http utils test', () => {
    it('should given default value after init', () => {
        let httpUtils = new HttpUtils();

        expect(httpUtils.init().host).to.equal('http://172.29.33.41:8080');
        expect(httpUtils.url).to.equal('');
        expect(httpUtils.method).to.equal('GET');
        expect(httpUtils.headers).to.be.an.instanceOf(Object)
        expect(httpUtils.body_type).to.equal('json');
        expect(httpUtils.bodys).to.be.an.instanceOf(Object)
        expect(httpUtils.credentials).to.equal('omit');
        expect(httpUtils.return_type).to.equal('json');
        expect(httpUtils.overtime).to.equal(0);
        expect(httpUtils.firstThen).to.equal(undefined);
        expect(httpUtils.params).to.equal(undefined);
    });
});
