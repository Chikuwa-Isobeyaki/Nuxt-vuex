<template>
  <section class="container">
    <div>
      <!-- <p>{{ $store.state.message }}</p> -->
      <p>{{ $store.state.hello.message }}</p>
      <!-- <button v-on:click="$store.commit('updateMessage', 'Commit with payload')">Update</button> -->
      <!-- <button v-on:click="$store.dispatch('updateMessageAction')">dispatch</button> -->
      <!-- <button v-on:click="$store.dispatch('updateMessageAction', 'Dispatch with payload')">dispatch</button> -->
      <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Dispatch with payload')">dispatch</button>
    </div>
  </section>
</template>

<script>

export default {
}
</script>
