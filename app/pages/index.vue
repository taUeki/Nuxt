<template>
<div class="section">
  <div class="field">
    <label class="label">タイトル</label>
    <div class="control">
      <input class="input" type="text" placeholder="タイトルを入力">
    </div>
  </div>
  <div class="field">
    <label class="label">リソースURL</label>
    <div class="control">
      <input class="input" type="url" placeholder="リソースURLを入力">
    </div>
  </div>
  <div class="field">
    <label class="label">記事テキスト</label>
    <div class="control">
      <textarea class="textarea" placeholder="記事を入力"></textarea>
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">登録</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">キャンセル</button>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
