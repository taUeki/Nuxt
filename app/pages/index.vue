<template>
  <div class="container">
    <Navigation />
    <div class="section">
      <div class="columns is-multiline">
        <div v-for="memo in memos" :key="memo.id" class="column is-4">
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
import {firebase, db } from '@/plugins/firebase'


export default {
  data () {
    return {
      memos: []
    }
  },
  mounted() {
    this.featch()
  },
  methods: {
    featch() {
      let memosRef = db.collection('memos').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          //これでドキュメント取得できる
          let memo = doc.data()
          memo.id = doc.id
          this.memos.push(memo)
        })
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })
    }
  },
} 
</script>

<style>
.column {
  display: flex;
}
</style>
