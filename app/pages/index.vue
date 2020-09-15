<template>
  <div class="container">
    <Navigation />
    <div class="section">
      <div class="columns is-multiline">
        <div v-for="memo in getMemos" :key="memo.id" class="column is-4">
            <div class="card">
              <div class="card-image is-16by9">
                <figure class="image">
                  <n-link to="1v2slSK9UBfWvjrCkpIR">
                    <img src="~/static/dariru.png" />
                  </n-link>
                </figure>
              </div>
              <div class="card-content">
                <p class="content title has-text-centered">{{ memo.title }}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"

export default {
  computed: {
    ...mapGetters(['getMemos']),
  },
  mounted() {
    this.fetchMemos()
  },
  methods: {
    ...mapActions(['fetchMemos'])
  }
} 
</script>

<style>
.column {
  display: flex;
}
</style>
