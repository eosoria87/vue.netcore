<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="info">
    <b-navbar-brand :to="{ name: 'Home' }"> Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to= "{ name:'OwnerList' }">Acciones del propietario</b-nav-item>
      <b-nav-item href="#">Owner Actions</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
};
</script>