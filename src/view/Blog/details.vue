<template>
	<div class="blog-details">
    <div @click="getUserInfo">info</div>
    <div @click="getEvent">Event</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    console.log('666666666')
  },
  methods: {
    getUserInfo () {
      axios.get('users/wikelgc')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        }
      )
    },
    getEvent () {
      axios.get('event')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        }
      )
    }
  }
}
</script>
