<template>
  <div>
    <vue-searchable :item-categories="['Ticket', 'Normal']">
      <item title="ScaleArc" category="Ticket" :key="1"></item>
      <item title="DevFactory" category="Normal" :key="2"></item>
      <item title="Crossover" category="Ticket" :key="3"></item>
      <item title="Ignite" category="Normal" :key="4"></item>

      <item title="ScaleArc" category="Ticket" :key="5"></item>
      <item title="DevFactory" category="Normal" :key="6"></item>
      <item title="Crossover" category="Ticket" :key="7"></item>
      <item title="Ignite" category="Normal" :key="8"></item>

      <item title="ScaleArc" category="Ticket" :key="9"></item>
      <item title="DevFactory" category="Normal" :key="10"></item>
      <item title="Crossover" category="Ticket" :key="11"></item>
      <item title="Ignite" category="Normal" :key="12"></item>
    </vue-searchable>
  </div>
</template>
<style lang="scss">
.custom-class {
  .header {
    color: #a00;
  }
}
</style>
