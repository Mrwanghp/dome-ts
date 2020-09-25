<template>
  <div class="about">
    <div ref="charts" style="height:300px;width:200px"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import echarts from 'echarts';
@Component({
  name: 'demo',
  components: {
    [Button.name]: Button,
  },
})
export default class Demo extends Vue {
  public mounted() {
    const option = {
      title: { text: '在Vue中使用echarts' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        }
      ],
    };
    const charts = echarts.init(this.$refs.charts as HTMLCanvasElement);
    charts.setOption(option);
  }
}
</script>

<style scoped lang="scss">
</style>
