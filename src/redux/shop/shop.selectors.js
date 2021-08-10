import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';

// const COLLECTION_ID_MAP = {
//     topi: 1,
//     sepatu: 2,
//     jaket: 3,
//     wanita: 4,
//     pria: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectCollections],
//         collections => 
//             collections.find(
//                 collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//             )
//     )

export const selectCollection = collectionUrlParam =>
    createSelector(
      [selectCollections],
      collections => collections[collectionUrlParam]
);
