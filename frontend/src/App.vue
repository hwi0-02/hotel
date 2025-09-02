<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 간단한 스타일링 */
nav {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983; /* 활성화된 링크 스타일 */
}
</style>