'use strict';
import fetchMock from 'fetch-mock';
import HttpUtils from '../../js/Utils/HttpUtils';
import { expect } from 'chai';

describe('http utils test', () => {
    let httpUtils;

    beforeEach('set up', ()=>{
        httpUtils = new HttpUtils();
        httpUtils.init();

    })

    it('should given default value after init', () => {
        expect(httpUtils.host).to.equal('http://172.29.33.41:8080');
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

    it('should get sucessfully with param', (done) => {
        fetchMock.get(httpUtils.host+'/api?q=hello&', {hello: 'world'});

        httpUtils.setUrl('/api').setMethod('GET').setParams({q:'hello'}).setReturnType('json').dofetch().then((result) => {
            expect(result).to.not.empty;
            expect(result.hello).to.equal('world');
            done();
        });
    });

    it('should call then start when given it',(done) => {
        fetchMock.get(httpUtils.host+'/api', {hello: 'world'});

        httpUtils.setUrl('/api').setMethod('GET').setReturnType('json').thenStart((data)=>{
            data.json = function(){return {hello: 'changed world'}}
            return data;
        }).dofetch().then((result) => {
            expect(result.hello).to.equal('changed world');
            done();
        });
    });

    it('should call post method with request body', (done)=>{
        fetchMock.post(httpUtils.host + '/api/post', '201');
        httpUtils.init();

        httpUtils.setUrl('/api/post').setMethod('POST').setBody({hello: 'world'}).setBodyType('text').dofetch().then((result) => {
            expect(result).to.equal(201);
            done();
        }).catch((err)=>{
            console.log(err);
        });
    })

    after('clean up', ()=>{
        fetchMock.restore();
    })
});
