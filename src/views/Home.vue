<template>
  <v-container fluid>
    <v-row dense class="mx-10 mt-10">
      <v-col class="col-12">
        <v-card color="#1F7087" outlined rounded="xl">
          <v-card-text>
            <v-container fluid>
              <v-row class="mx-auto">
                <v-col class="d-flex justify-center ">
                  <p class="text-h5 white--text">
                    Commandes livrées
                    <br />
                    <strong class="d-flex justify-center">500</strong>
                  </p>
                </v-col>
                <v-col class="d-flex justify-center">
                  <p class="text-h5 white--text">
                    Commandes en attente
                    <br />
                    <strong class="d-flex justify-center">50</strong>
                  </p>
                </v-col>
                <v-col class="d-flex justify-center">
                  <p class="text-h5 white--text">
                    Chiffre d'affaires
                    <br />
                    <strong class="d-flex justify-center">1.000.000 CDF</strong>
                  </p>
                </v-col>
                <v-col class="d-flex justify-center">
                  <p class="text-h5 white--text">
                    Réclamations
                    <br />
                    <strong class="d-flex justify-center">34</strong>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense class="mx-auto ml-lg-9 mt-10">
      <v-col>
        <v-card hover to="/catalog" id="accountimg" rounded="xl" height="200" width="350">
          <v-container>
            <v-row class="mx-auto mt-10">
              <v-col cols="5">
                <v-img contain src="../assets/catalog.svg" aspect-ratio="1.6"></v-img>
              </v-col>
              <v-col class="mt-4">Votre catalogue</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card hover to="/orders" id="accountimg" rounded="xl" height="200" width="350">
          <v-container>
            <v-row class="mx-auto mt-10">
              <v-col cols="5">
                <v-img contain src="../assets/orders.svg" aspect-ratio="1.6"></v-img>
              </v-col>
              <v-col class="mt-4">Les commandes clients</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card hover to="/new-product" id="accountimg" rounded="xl" height="200" width="350">
          <v-container>
            <v-row class="mx-auto mt-10">
              <v-col cols="5">
                <v-img contain src="../assets/add-product.svg" aspect-ratio="1.6"></v-img>
              </v-col>
              <v-col class="mt-4">Ajouter un produits</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card hover to="/account" id="accountimg" rounded="xl" height="200" width="350">
          <v-container>
            <v-row class="mx-auto mt-11">
              <v-col cols="5">
                <v-img contain src="../assets/user.svg" aspect-ratio="1.6"></v-img>
              </v-col>
              <v-col class="mt-4">Mon Compte</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "../store/index"
import router from "../router/index"
export default {
  computed: {
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.isLogin === false) {
      router.push('/login')
    } else {
      next()
    }
  }
};
</script>

<style lang="scss" scoped>
</style>