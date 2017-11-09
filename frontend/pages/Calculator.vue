<template>
  <div>
    <h4>
      Your current number is: <span class="green">{{ crtnum }}</span>
    </h4>
    <h4>
      Your next number is: <span class="green">{{ Number(crtnum) + 1 }}</span>
    </h4>
    <h4>
      You can increase your next number:
      <v-btn primary @click='increase'>Increase</v-btn>
    </h4>
    <h4>
      You can reset your current number
      <v-btn primary @click.stop="dialog=true">Reset</v-btn>
    </h4>
    <v-dialog v-model="dialog" persistent width="500px">
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Current Number" v-model="crtnum" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.stop="reset">Reset</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        crtnum: null,
        dialog: false
      }
    },
    mounted () {
      axios.get('crtnum')
      .then(res => {
        this.crtnum = res.data.crtnum;
      }).catch(e => {
        console.log('browser get crtnum error is', e);
      });
    },
    methods: {
      increase() {
        axios.get('nxtnum')
        .then(res => {
          this.crtnum = res.data.crtnum;
        }).catch(e => {
          console.log('browser get nxtnum error is', e);
        });
      },
      reset() {
        axios.post('crtnum', {
          crtnum: this.crtnum
        });
        this.dialog = false;
      }
    }
  }
</script>