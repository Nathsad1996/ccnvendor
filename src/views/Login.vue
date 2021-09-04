<template>
  <v-container>
    <v-row class="mx-auto mt-10">
      <v-col class="d-flex justify-center">
        <v-card hover rounded="xl" width="400">
          <v-card-title class="d-flex justify-center text-center mb-5 text-h5"
            >Veuillez vous connecter
          </v-card-title>
          <v-card-text class="mb-0 pb-0">
            <v-text-field
              placeholder="Login"
              dense
              rounded
              outlined
              append-icon="mdi-account"
              v-model="login"
            ></v-text-field>
            <v-text-field
              placeholder="Mot de passe"
              dense
              rounded
              outlined
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="mt-0 pt-0">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-btn rounded block color="success" @click="loginSupplier"
                    >Se connecter</v-btn
                  >
                </v-col>
                <v-col>
                  <span @click="NewSupplier">Créer un compte ?</span>
                  <span class="float-right" @click="AccountReset"
                    >Mot de passe oublier ?</span
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    password: "",
    show: false,
    login: "",
  }),
  methods: {
    ...mapActions(["setLoginAction"]),
    NewSupplier() {
      this.$router.push("/new-supplier");
    },
    AccountReset() {},
    loginSupplier() {
        this.setLoginAction(true);
        this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
}

span :hover {
  color: red;
}
</style>