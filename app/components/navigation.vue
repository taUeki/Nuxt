<template>
<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <n-link to="/" class="navbar-item">
            <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" alt="Logo">
            </n-link>
            <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
            </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
                <n-link to="/" class="navbar-item">
                    TOP
                </n-link>
                <n-link to="/create" class="navbar-item">
                    メモ作成
                </n-link>
            </div>
        </div>
    </div>
</nav>
</template>

<style>

body {
  background: var(--bg);
}

.navbar {
  background: var(--card-bg);
}

</style>
