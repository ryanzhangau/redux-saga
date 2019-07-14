import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadImages } from '../../store/actions';
import Button from '../Button/Button';
import Stats from '../Stats/Stats';
import './styles.css';

const ImageGrid = props => {
  const { images, error, loadImages, isLoading, imageStats } = props;
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
              <Stats stats={imageStats[image.id]} />
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

const mapStateToProps = ({ isLoading, images, error, imageStats }) => {
  return {
    isLoading,
    images,
    error,
    imageStats
  };
};

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid);
