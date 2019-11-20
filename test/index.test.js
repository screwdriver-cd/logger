'use strict';

/* eslint-disable no-underscore-dangle */

const chai = require('chai');
const assert = chai.assert;
const mockery = require('mockery');
const sinon = require('sinon');

sinon.assert.expose(chai.assert, { prefix: '' });

describe('index test', () => {
    let winstonMock;

    before(() => {
        mockery.enable({
            useCleanCache: true,
            warnOnUnregistered: false
        });
    });

    beforeEach(() => {
        winstonMock = {
            info: sinon.stub(),
            error: sinon.stub()
        };
        mockery.registerMock('winston', {
            createLogger: () => winstonMock,
            transports: {
                Console: sinon.stub()
            }
        });
    });

    afterEach(() => {
        mockery.deregisterAll();
        mockery.resetCache();
    });

    after(() => {
        mockery.disable();
    });

    it('tests logger', () => {
        const logger = require('../index.js'); // eslint-disable-line global-require

        logger.error('this is an error');

        assert.calledOnce(winstonMock.error);
        assert.calledWith(winstonMock.error, 'this is an error');
    });
});
