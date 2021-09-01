<template>
  <v-container fluid>
    <v-row dense class="mx-auto mt-10">
      <v-col>
        <v-card
          hover
          to="/catalog"
          id="accountimg"
          rounded="xl"
          height="200"
          width="350"
        >
          <v-container>
            <v-row class="mx-auto mt-10">
              <v-col cols="5">
                <v-img contain src="../assets/catalog.svg" aspect-ratio="1.6">
                </v-img>
              </v-col>
              <v-col class="mt-4"> Votre catalogue </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          hover
          to="/orders"
          id="accountimg"
          rounded="xl"
          height="200"
          width="350"
        >
          <v-container>
            <v-row class="mx-auto mt-10">
              <v-col cols="5">
                <v-img contain src="../assets/orders.svg" aspect-ratio="1.6">
                </v-img>
              </v-col>
              <v-col class="mt-4"> Les commandes clients </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          hover
          to="/new-product"
          id="accountimg"
          rounded="xl"
          height="200"
          width="350"
        >
          <v-container>
            <v-row class="mx-auto mt-10">
              <v-col cols="5">
                <v-img
                  contain
                  src="../assets/add-product.svg"
                  aspect-ratio="1.6"
                >
                </v-img>
              </v-col>
              <v-col class="mt-4"> Ajouter un produits </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          hover
          to="/account"
          id="accountimg"
          rounded="xl"
          height="200"
          width="350"
        >
          <v-container>
            <v-row class="mx-auto mt-11">
              <v-col cols="5">
                <v-img
                  contain
                  src="../assets/user.svg"
                  aspect-ratio="1.6"
                >
                </v-img>
              </v-col>
              <v-col class="mt-4"> Mon Compte </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>