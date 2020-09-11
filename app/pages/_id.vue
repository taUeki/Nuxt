<template>
<div class="container">
    <Navigation />
    <div class="columns">
        <div class="column is-8 is-offset-2">
        <figure class="image is-16by9">
            <img src="@/static/dariru.png" />
        </figure>
        </div>
    </div>

    <section class="section">
        <div class="columns">
        <div class="column is-8 is-offset-2">
            <div class="content is-medium">
            <h1 class="title">{{ memo.title }}</h1>
            <p>{{ memo.body }}</p>
            </div>
        </div>
        </div>
    </section>
</div>
</template>

<script>
import {firebase, db } from '@/plugins/firebase'
import Navigation from '@/components/navigation'
// import { useRouter } from 'nuxt/router'

export default {
  data () {
    return {
      memo: []
    }
  },
  mounted() {
    this.featchById()
  },
  methods: {
    featchById() {
        //console.log(this.$route.params.id)
        let memosRef = db.collection('memos').doc(this.$route.params.id).get()
        .then(doc => {
            let memo = doc.data()
            memo.id = doc.id
            this.memo = memo
        })
        .catch(err => {
            console.log('Error getting documents', err)
        })
    }  
  },
}

</script>
