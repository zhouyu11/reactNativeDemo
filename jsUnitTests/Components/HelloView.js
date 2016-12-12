import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { HelloView } from '../../js/Components/HelloView'
import { expect } from 'chai';

describe('<HelloView />', () => {
  it('should render HelloView', () => {
    const wrapper = shallow(<HelloView />);
    expect(wrapper.length).to.equal(1);
  });
});
