<template>
  <div
    class="container"
  >
    <slot />
  </div>
</template>

<style scoped>
.layout {
  padding: 0
}

.layout.sticky-header {
  padding: 6rem 0 0
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem
}

@media (min-width: 860px) {
  .container {
      padding:0 6rem
  }
}
</style>
