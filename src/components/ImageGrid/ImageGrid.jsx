import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadImages } from '../../store/actions';
import Button from '../Button/Button';
import './styles.css';

const ImageGrid = props => {
  const { images, error, loadImages, isLoading } = props;
  useEffect(() => {
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='content'>
      <section className='grid'>
        {images &&
          images.map(image => (
            <div key={image.id} className={`item item-${Math.ceil(image.height / image.width)}`}>
              <img src={image.urls.small} alt={image.alt_description} />
            </div>
          ))}
      </section>
      {error && <div className='error'>{JSON.stringify(error)}</div>}
      <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
        Load Images
      </Button>
    </div>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired
};

ImageGrid.defaultProps = {
  images: []
};

const mapStateToProps = ({ isLoading, images, error }) => {
  return {
    isLoading,
    images,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid);
