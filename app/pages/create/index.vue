<template>
<div class="section">
  <div class="field">
    <label class="label">タイトル</label>
    <div class="control">
      <input v-model="memo.title" class="input" type="text" placeholder="タイトルを入力">
    </div>
  </div>
  
  <div class="field">
    <label class="label">記事テキスト</label>
    <div class="control">
      <textarea v-model="memo.body" class="textarea" placeholder="記事を入力"></textarea>
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="submit()">登録</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">キャンセル</button>
    </div>
  </div>
</div>
</template>

<script>
import {firebase, db } from '@/plugins/firebase'

export default {
  data () {
    return {
      memo: {
        title: "",
        body: ""
     },
   }
 },
 methods: {
    submit () {
      let dbCards = db.collection('memos').doc()
        .set({
          title: this.memo.title,
          body: this.memo.body,
        })
    },
 },
}
</script>
