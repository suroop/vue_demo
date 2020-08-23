/**
 * 状态对象
 * @type {{}}
 */
import {ADD_COMMENT} from "./mutation-type";

export default {
  addComment({commit},todo){
    commit(ADD_COMMENT,{todo});
  }
}
