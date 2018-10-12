<template>
  <div class="todo">
    <h1 class="todo__heading">Plan your day</h1>
    <div class="todo__form">
      <input v-model="item"
      class="todo__input"
      type="text" 
      placeholder="I need to..">
      <button class="todo__add"
       @click="addToList">
        Add
      </button>
    </div>

    <button class="todo__clear" 
     @click="clearList">
      Clear list
     </button>

    <ul class="todo__list">
      <li v-for="task in list" 
      class="todo__list-item"
      :class="{ 'todo__list-item--removed': itemRemoved }">
        {{ task }}
        <button class="todo__remove" 
         @click="toggleScratch">
          Scratch
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TODO',
    data () {
      return {
        item: '',
        list: [],
        itemRemoved: false
      }
    },
    methods: {
      addToList() {
        this.list.push(this.item);
      },
      clearList() {
        this.list = [];
        this.itemRemoved = false;
      },
      toggleScratch() {
        console.log(this);
        this.itemRemoved = true;
      }
    }
  }
</script>

<style lang="scss">
.todo {
  &__heading {
    color: red;
  }

  &__form {

  }

  &__input {

  }

  &__add {

  }

  &__clear {

  }

  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__list-item {
    &--removed {
      text-decoration: line-through;
    }
  }

  &__remove {

  }
}
</style>
