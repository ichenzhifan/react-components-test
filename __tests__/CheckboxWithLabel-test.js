'use strict';

jest.unmock('../components/CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import CheckboxWithLabel from '../components/CheckboxWithLabel';

describe('CheckboxWithLabel', () => {

    // Render a checkbox with label in the document
    let checkbox = TestUtils.renderIntoDocument( < CheckboxWithLabel labelOn = 'On'
        labelOff = 'Off' / > );

    let checkboxNode = ReactDOM.findDOMNode(checkbox);

    /**
     * 1. verify the it's off by default
     */
    it('default to off label', () => {
        expect(checkboxNode.textContent).toEqual('Off');
    });

    /**
     * 2. defaults to unchecked
     */
    it('default to off label', () => {
    	let checkboxElement = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
        expect(checkboxElement.checked).toBe(false);
    });

    /**
     * 3. Simulate a click and verify that it is now On
     */
    it('default to off label', () => {
        TestUtils.Simulate.change(
            TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
        );

        expect(checkboxNode.textContent).toEqual('On');
    });
});
