<!--  -->
<template>
  <div>
    <van-cell-group>
      <van-checkbox
        style="margin-left: 15px; padding-top: 10px; margin-bottom: 20px"
        @click="allChecked"
        v-model="checked"
        >全选</van-checkbox
      >
      <van-cell v-for="(v, i) of list" :key="i" :value="v.value" :label="v.num">
        <template #title>
          <van-checkbox @click="checkedClick(i)" v-model="v.checked">{{
            v.name
          }}</van-checkbox>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import { Cell, CellGroup, Checkbox } from 'vant';
export interface ListType {
  name: string;
  value: string;
  num: number;
  checked: boolean;
}
@Component({
  name: 'index',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,
  },
})
export default class DemoTab extends Vue {
  @Prop({ required: true, default: [] }) private list!: any[];
  private checked!: boolean;
  // 监听函数
  @Watch('list')
  public changeIndex(data: ListType[]) {
    // 索引变化讲内容赋予给当前编辑的内容
    if (data.length === 0) this.checked = false;
  }
  private data() {
    return {
      checked: false,
    };
  }
  // 子组件传值
  @Emit('allChecked')
  private allChecked() {
    return this.checked;
  }
  // 单选
  @Emit('checkedClick')
  private checkedClick(index: number) {
    const unCompletedCount: number = this.list.reduce(
      (pre, cur) => pre + (cur.checked ? 0 : 1),
      0
    );
    this.checked = unCompletedCount === 0 ? true : false;
    return index;
  }
}
</script>
<style scoped></style>
