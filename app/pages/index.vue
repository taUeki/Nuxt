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
