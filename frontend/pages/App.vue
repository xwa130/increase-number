<template>
  <v-app toolbar footer>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      enable-resize-watcher
      absolute>
      <v-list dense>
        <v-list-tile
          target='_blank'
          href='https://github.com/xwa130/increase-number'
          @click.stop='drawer = !drawer'>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Source Code</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class='indigo' dark fixed>
      <v-toolbar-side-icon @click.stop='drawer = !drawer'></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-down'>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer class="indigo" fixed>
      <span class="white--text">2017 Ecoation Innovative Solutions Inc.</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true
      }
    }
  }
</script>