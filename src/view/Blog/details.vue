<template>
	<div class="blog-details">
		details
	</div>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    console.log('666666666')
    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      }
    )
  }
}
</script>
