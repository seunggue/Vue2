<template>
  <div>
    <h1>여기는 최상위입니다.</h1>
    <todo-list category="싸피"></todo-list>
    <todo-list category="점심"></todo-list>
    <TodoList category="저녁" />
  </div>
</template>

<script>
// 1.컴포넌트를 가져온다.
import TodoList from "./components/TodoList.vue";

// 2. 가져온 컴포넌트를 등록한다.
export default {
  components: {
    TodoList
  }
};
</script>

<style>
</style>.