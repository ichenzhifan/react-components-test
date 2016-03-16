'use strict';

jest.unmock('../components/ShallowRenderComponent');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import ShallowRenderComponent from '../components/ShallowRenderComponent';

const shallowRender = TestUtils.createRenderer();

shallowRender.render( <ShallowRenderComponent value = 'test' /> );

const component = shallowRender.getRenderOutput();

describe('CheckboxWithLabel', () => {
    it('the value would "test"', () => {
        expect(component.props.children).toBe('test');

        expect(component.type).toBe('h1');
    });
});
