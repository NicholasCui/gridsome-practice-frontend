<template>
  <header
    class="header sticky"
  >
    <div
      class="container"
    >
      <div
        class="left"
      ><g-link
          to="/"
          class="home-link"
        ><img
            src="../assets/img/logo.svg"
            alt="Nichlas W. Andersen"
            class="logo"
          ></g-link></div>
      <nav
        class="nav right"
      >
        <g-link
          to="/journal"
          class="nav__link"
        >Journal</g-link>
        <g-link
          to="/contact"
          class="nav__link"
        >Say Hi!</g-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  height: 6rem;
  z-index: 10
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%
}

.header>.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%
}

.home-link {
  text-decoration: none
}

.logo {
  height: 1.5rem
}

.site-name {
  font-size: .9rem;
  font-weight: 700;
  letter-spacing: .05em;
  text-decoration: none;
  text-transform: uppercase
}

.nav > a{
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border .15s
}

.nav>:last-of-type {
  margin: 0
}

.nav>.active,
.nav>.active:hover {
  border-color: inherit
}
</style>
