<template>
  <div class="home">
    <Main/>
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main";
import Table from "@/components/Table";

export default {
  name: "home",
  components: {
    Main,
    Table
  }
};
</script>

<style lang="sass" scoped>
</style>