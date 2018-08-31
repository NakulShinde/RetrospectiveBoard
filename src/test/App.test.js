import React from 'react';
import App from './../App';
import {shallow} from 'enzyme';

test('Link changes the class when hovered', () => {
    const component = shallow(<App/>);

    expect(component).toMatchSnapshot();

});