import React from 'react';
import SnapShotLink from '../snapshot_link';
import renderer from 'react-test-renderer';

describe('Link ', () => {
  const component = renderer.create(
    <SnapShotLink
      page="http://www.facebook.com">
      Facebook / Doesnt have to be the same as the app
    </SnapShotLink>
  );
  let tree = component.toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('changes the class when hovered', () => {
    tree.props.onMouseEnter();
    // snaposhot need to be re-rendered when action has been performed
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('changes the class when left', () => {
    tree.props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});