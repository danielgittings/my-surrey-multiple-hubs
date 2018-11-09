import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Image from '../components/Image';
import BodyCopy from '../components/BodyCopy';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const values = {
  image: {
    imageStyleBanner: {
      url: 'https://unsplash.it/1000/300'
    },
    alt: "Here is the alt text"
  }
}

storiesOf('Image', module)
  .add('basic image', () => <Image values={values} />);

const bodyValues = {
  body: {
    value: `<p>Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is <strong>some</strong> paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. <em>Here</em> is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some <a href="https://surrey.ac.uk">paragraph text</a>. Here is some paragraph text. Here is some paragraph text. </p> <p>Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. </p> <p>Here is some paragraph text. Here is some paragraph text. Here is some <strong>paragraph</strong> text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. Here is some paragraph text. </p>`
  }
}

storiesOf('BodyCopy', module)
  .add('basic', () => <BodyCopy values={bodyValues} />);

