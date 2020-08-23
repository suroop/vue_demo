/**
 * 状态对象
 * @type {{}}
 */
import {ADD_COMMENT} from "./mutation-type";
export default {
  [ADD_COMMENT](state,{todo}){
    state.Comments.push(todo);
  }
}
