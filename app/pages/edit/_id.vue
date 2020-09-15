<template>
<div class="container">
    <Navigation />
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
            <button class="button is-link" @click="submit()">更新</button>
        </div>
        <div class="control">
            <button class="button is-link is-light" @click="cancel()">取消</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    computed: {
        ...mapGetters(['getMemos']),
    },
    mounted() {
        this.fetchById(this.$route.params.id)
    },
    methods: {
        ...mapActions(['fetchById']),
        submit () {
        let dbCards = db.collection('memos').doc(this.$route.params.id)
            .set({
            title: this.memo.title,
            body: this.memo.body
            })
        },
        cancel () {
            this.memo.title = "",
            this.memo.body = ""
        },
    },
}
</script>
