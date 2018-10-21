<template>
  <div class="todo">
    <h2 class="todo__heading">Plan your day</h2>

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

    <section class="todo__list-wrapper">
      <div class="todo__list-wip"
        :class="{ 'todo__list-wip--full': !completed.length }"
        v-if="list.length">
        <h2 class="todo__list-title">In progress</h2>

        <ul class="todo__list">
          <li v-for="task in list"
          class="todo__list-item">
            <p class="todo__list-item-copy">{{ task }}</p>
            <button class="todo__remove"
            @click="toggleScratch($event.target.parentNode)">
              Scratch
            </button>
          </li>
        </ul>
      </div>

      <div class="todo__list-completed"
        v-if="completed.length">
        <h2 class="todo__list-title">Completed</h2>

        <ul class="todo__list todo__list-done">
          <li v-for="task in completed"
          class="todo__list-item todo__list-item--removed">
            <p class="todo__list-item-copy">{{ task }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TODO",
  data() {
    return {
      item: "",
      list: [],
      completed: []
    };
  },
  methods: {
    addToList() {
      if (this.item && (!this.list.includes(this.item) && !this.completed.includes(this.item))) {
        this.list.push(this.item);
      }
    },
    clearList() {
      this.list = [];
      this.completed = [];
      this.itemRemoved = false;
    },
    toggleScratch(ev) {
      this.list.splice(this.list.indexOf(ev.children[0].innerText), 1);
      this.completed.push(ev.children[0].innerText);
    }
  }
};
</script>

<style lang="scss">
.todo {
  $parent: &;

  border: 1px solid #000;
  border-radius: 4px;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  text-align: center;

  &__heading {
    margin-top: 0;
  }

  &__form {
    margin-bottom: 20px;
  }

  &__input {
    border-radius: 4px;
    margin-right: 10px;
  }

  &__list-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__list-completed {
    border: 1px solid red;
  }

  &__list-wip,
  &__list-completed {
    border-radius: 4px;
    flex: 1;
    margin: 20px 5px 0;
    padding: 0 10px;
  }

  &__list-wip {
    border: 1px solid blue;

    &--full {
      border: none;
      flex: none;
      margin: 20px auto 0;

      #{$parent}__list-title {
        margin-top: 0;
      }
    }
  }

  &__list {
    align-items: start;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 15px auto 0;
    padding: 0 10px;
  }

  &__list-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;

    &--removed {
      text-decoration: line-through;
    }
  }

  &__list-item-copy {
    display: inline-block;
    margin: 0;
    text-align: left;
  }

  &__remove {
    margin-left: 10px;
  }
}
</style>
