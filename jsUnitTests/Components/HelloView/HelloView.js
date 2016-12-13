import React, { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { shallow , mount} from 'enzyme';
import { HelloView } from '../../../js/Components/HelloView/HelloView'
import { expect } from 'chai';
require('../../setUp.js')

describe('<HelloView />', () => {
  it('should render HelloView', () => {
    const wrapper = shallow(<HelloView />);
    expect(wrapper.length).to.equal(1);
  });
});
