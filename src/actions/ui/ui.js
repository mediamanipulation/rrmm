// Import action types
import { HIDE_COMMENT, SHOW_COMMENT } from "../../constants/actions";

// Hide comment action creator
export const hideComment = () => ({
  type: HIDE_COMMENT
});

// Show comment action creator
export const showComment = id => ({
  type: SHOW_COMMENT,
  payload: id
});
