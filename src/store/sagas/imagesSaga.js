import { IMAGES } from '../constants/Images';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { fetchImages } from '../../api/index';
import { setImages, setError } from '../actions';

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

const getPage = state => state.nextPage;
