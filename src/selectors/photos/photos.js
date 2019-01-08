export const getGalleryPhotos = state => Object.values(state.photos);

export const getPhoto = (state, id) =>
  getGalleryPhotos(state).find(photo => photo.id === id);
