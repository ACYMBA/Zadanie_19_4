import {ADD_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT } from './actions'

export function comments(state = [], action) {
	switch(action.type){
		case ADD_COMMENT:
			return [{
					id:action.id,
					text:action.text,
					votes:0
				}	
				,...state.comments];
		case EDIT_COMMENT:
		return state.map(function(comment) {
			if(comment.id === action.id) {
				return {...comment, text: action.text} ;
			} else {
				return comment;
			}
		});
		case THUMB_UP_COMMENT:
			return state.map(function(comment) {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes + 1};
				} else {
					return comment;
				}
			});
		case THUMB_DOWN_COMMENT:
			return state.map(function(comment) {
				if(comment.id === action.id) {
					return {...comment, votes: comment.votes - 1};
				} else {
					return comment;
				}
			});								
		default:
			return state;
	}
};
