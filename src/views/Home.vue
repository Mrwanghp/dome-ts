<template>
<div class="home">
    1515
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import {
    Minxins
} from '@/utils/mixins';
@Component({
    name: 'demo',
    components: {},
    mixins: [Minxins]
})
export default class Demo extends Vue {
    public mounted() {
        const a = 1;
        console.log('11');
    }
}
</script>

<style scoped lang="scss">
</style>
