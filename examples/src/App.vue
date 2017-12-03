<template>
  <div>
    <TellerHeader/>
    <TellerNavi/>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TellerHeader from './components/TellerHeader'
import TellerNavi from './components/TellerNavi'

export default {

  name: 'App',

  components: {
    TellerHeader,
    TellerNavi
  }

}
</script>
