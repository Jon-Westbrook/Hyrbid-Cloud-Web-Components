import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Googlestars extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <script type="application/ld+json">
        {`{"@context":"http://schema.org","@type":"SoftwareApplication","applicationCategory":"BusinessApplication","name":"${this.props.product}","aggregateRating":{"@type":"AggregateRating","ratingValue":${this.props.score},"reviewCount":${this.props.count},"bestRating":10,"worstRating":0}}`}
      </script>
    );
  }
}

Googlestars.propTypes = {
  product: PropTypes.string,
  count: PropTypes.string,
  score: PropTypes.string,
};

export default Googlestars;
