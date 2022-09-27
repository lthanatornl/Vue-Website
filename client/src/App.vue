<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color=#8DD9CC
      flat
      
    >
    <v-container class="py-0 fill-height">
    <MDBNavbarBrand href="#">
      <img
        src="https://resume.win.tue.nl/images/logo.png?c0b0d6fef1494fee6bb16b50a463ee3a"
        height="50"
        alt=""
        loading="lazy"
      />
        
    </MDBNavbarBrand>
        
        
        <v-btn
          v-for="(item, i) in items"
          :key="i" :to ="item.link" link
          text
        >
          {{ item.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              height="auto"
              rounded="lg"
              width="100%"
            >
            
              <router-view></router-view>

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        {title: "Home", icon: "mdi-home", link:"/"},
        {title: "Article", icon: "mdi-turned_in", link:"/article"},
        {title: "About", icon: "mdi-CardAccountDetails", link:"/about"},

      ],
      
    }),
  }
</script>