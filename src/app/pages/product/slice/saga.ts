import { takeLatest, put, delay, all, call } from 'redux-saga/effects';
import { apiCallAdmin } from 'utils/axios';
import { productActions } from '.';

function* fetchProducts(data) {
  yield delay(500);
  const {
    payload: { page, limit },
  } = data;

  try {
    const res = yield call(
      apiCallAdmin,
      'GET',
      `/products?page=${page}&limit=${limit}`,
    );

    if (res.data?.code === 200) {
      yield put(productActions.fetchProductsSuccess(res.data?.data));
    } else {
      yield put(productActions.setError(JSON.stringify(res.data?.data)));
    }
  } catch (error) {
    yield put(
      productActions.setError(
        JSON.stringify(error) ||
          'An error occured while trying to fetch products',
      ),
    );
  }
}

function* fetchQueriedProducts(data) {
  yield delay(500);
  const {
    payload: { page, limit, query },
  } = data;

  try {
    const res = yield call(
      apiCallAdmin,
      'GET',
      `/products?${page ? `page=${page}` : ''}${
        limit ? `&limit=${limit}` : ''
      }${query ? `&search=${query}` : ''}`,
    );

    if (res.data?.code === 200) {
      yield put(productActions.fetchProductsBySearchSuccess(res.data?.data));
    } else {
      yield put(productActions.setError(JSON.stringify(res.data?.data)));
    }
  } catch (error) {
    yield put(
      productActions.setError(
        JSON.stringify(error) ||
          'An error occured while trying to fetch products',
      ),
    );
  }
}

function* fetchFilteredProducts(data) {
  yield delay(500);
  const {
    payload: { page, limit, filterObject },
  } = data;
  let brandPresent = false;
  let ratePresent = false;
  let pricePresent = false;
  let discountPresent = false;
  let ascending = false;
  let descending = false;

  console.log('The Filter object within the saga: ', filterObject);

  if (filterObject.brandArr) {
    filterObject.brandArr.length > 0
      ? (brandPresent = true)
      : (brandPresent = false);
  }

  if (filterObject.rateArr) {
    filterObject.rateArr.length > 0
      ? (ratePresent = true)
      : (ratePresent = false);
  }

  if (filterObject.priceObj) {
    Object.entries(filterObject.priceObj).length > 0
      ? (pricePresent = true)
      : (pricePresent = false);
  }

  if (filterObject.discountArr) {
    filterObject.discountArr.length > 0
      ? (discountPresent = true)
      : (discountPresent = false);
  }
  if (filterObject.dateSort !== '') {
    filterObject.dateSort === 'old to new'
      ? (ascending = true)
      : (descending = true);
  }

  try {
    const res = yield call(
      apiCallAdmin,
      'GET',
      `/products?page=${page}&limit=${limit}&${
        brandPresent && filterObject.brandArr.length > 0
          ? filterObject.brandArr.length === 1
            ? filterObject.brandArr.map(
                (brand: string) => `brand[in]=${brand}&`,
              )
            : filterObject.brandArr
                .map((brand: string) => `brand[in]=${brand}&`)
                .join('')
          : ''
      }${
        ratePresent && filterObject.rateArr.length > 0
          ? filterObject.rateArr.length === 1
            ? filterObject.rateArr.map((rate: string) => `rating[in]=${rate}&`)
            : filterObject.rateArr
                .map((rate: string) => `rating[in]=${rate}&`)
                .join('')
          : ''
      }${
        pricePresent &&
        `price[gte]=${filterObject.priceObj.min}&price[lte]=${filterObject.priceObj.max}`
      }${
        discountPresent && filterObject.discountArr.length > 0
          ? filterObject.discountArr.length === 1
            ? `&discount_percentage[gte]=${filterObject.discountArr[0]}`
            : filterObject.discountArr
                .map(
                  (percentage: string) =>
                    `&discount_percentage[gte]=${percentage}`,
                )
                .join('')
          : ''
      }`,
    );

    if (res.data?.code === 200) {
      if (ascending) {
        res.data?.data.results.sort(
          (
            a: { createdAt: string | number | Date },
            b: { createdAt: string | number | Date },
          ) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );
      }
      if (descending) {
        res.data?.data.results.sort(
          (
            a: { createdAt: string | number | Date },
            b: { createdAt: string | number | Date },
          ) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
      }
      console.log(res.data?.data);
      yield put(productActions.fetchProductsSuccess(res.data?.data));
    } else {
      yield put(productActions.setError(JSON.stringify(res.data?.data)));
    }
  } catch (error) {
    yield put(
      productActions.setError(
        JSON.stringify(error) ||
          'An error occured while trying to fetch products',
      ),
    );
  }
}

function* handleFetchProduct(data) {
  yield delay(500);
  const {
    payload: { id, history },
  } = data;
  try {
    const res = yield call(apiCallAdmin, 'GET', `/products/${id}`, id);

    if (res.data?.code === 200) {
      yield put(productActions.setProduct(res.data?.data));
      history.push(`items/${id}`);
    } else {
      yield put(productActions.setError(JSON.stringify(res.data?.data)));
    }
  } catch (error) {
    yield put(
      productActions.setError(
        JSON.stringify(error) ||
          'An error occured while trying to view product details',
      ),
    );
  }
}

function* handleFetchReviews(
  data: ReturnType<typeof productActions.getReviews>,
) {
  yield delay(500);
  const {
    payload: { id },
  } = data;
  try {
    const res = yield call(apiCallAdmin, 'GET', `/ratings?product=${id}`, id);

    if (res.data?.code === 200) {
      yield put(productActions.setReviews(res.data?.data));
    } else {
      yield put(productActions.setError(JSON.stringify(res.data?.data)));
    }
  } catch (error) {
    yield put(
      productActions.setError(
        JSON.stringify(error) ||
          'An error occured while trying to fetch product reviews',
      ),
    );
  }
}

function* handleFetchBrands() {
  yield delay(500);
  try {
    const res = yield call(apiCallAdmin, 'GET', `/brands`);
    if (res.data?.code === 200) {
      yield put(productActions.fetchBrandsSuccess(res.data?.data));
    }
  } catch (error) {
    yield put(productActions.setError(JSON.stringify(error)));
  }
}

function* fetchAllCategories() {
  yield delay(500);
  try {
    const res = yield call(apiCallAdmin, 'GET', `/categories`);
    if (res.data?.code === 200) {
      yield put(productActions.setProductCategory(res.data?.data.results));
      yield put(productActions.setLoadingState(false));
    }
  } catch (error) {
    yield put(
      productActions.setError(
        JSON.stringify(error) ||
          'An error occured while trying to fetch products',
      ),
    );
  }
}

export default function* productSaga() {
  yield all([
    takeLatest(productActions.fetchProducts.type, fetchProducts),
    takeLatest(
      productActions.fetchProductsByFilter.type,
      fetchFilteredProducts,
    ),

    takeLatest(productActions.fetchProductsBySearch.type, fetchQueriedProducts),
    takeLatest(productActions.getProduct.type, handleFetchProduct),
    takeLatest(productActions.fetchProductsCategories.type, fetchAllCategories),
    takeLatest(productActions.getReviews.type, handleFetchReviews),
    takeLatest(productActions.fetchBrands.type, handleFetchBrands),
  ]);
}
