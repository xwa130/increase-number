<template>
  <div>
    <v-parallax src="http://modernagriculture.ca/wp-content/uploads/2017/05/Cropsense-an-EIS-system-.jpg" height="630">
      <v-layout column align-center justify-center>
        <h2 class="black--text">Welcome to EIS calculator</h2>
        <v-btn color="primary" dark slot="activator" @click.stop="dialog1=true">Sign Up</v-btn>
        <v-btn color="primary" dark slot="activator" @click.stop="dialog2=true">Sign In</v-btn>
        <v-dialog v-model="dialog1" persistent width="500px">
          <v-card>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="Email" v-model="email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password" v-model="password" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog1 = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.stop="signup">Sign Up</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" persistent width="500px">
          <v-card>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="Email" v-model="email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password" v-model="password" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog2 = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.stop="signin">Sign In</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        dialog1: false,
        dialog2: false,
        email: '',
        password: null,
      }
    },
    methods: {
      signup() {
        axios.post('user', {
          email: this.email,
          password: this.password
        }).then(() => {
          if (document.cookie) {
            this.$router.push({ name: 'calculator' });
          }
        }).catch(e => {
          console.log('browser signup error is', e);
        });

        this.dialog = false;
      },

      signin() {
        axios.get('user', {
          params: {
            email: this.email,
            password: this.password
          }
        }).then(res => {
          if (document.cookie) {
            this.$router.push({ name: 'calculator' });
          }
        }).catch(e => {
          console.log('browser signin error is', e);
        });

        this.dialog = false;
      }
    }
  }
</script>