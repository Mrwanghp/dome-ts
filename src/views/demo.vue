<!--  -->
<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-button type="info" @click="search">查询</van-button>
    <van-button type="primary" @click="add">增加</van-button>
    <van-button type="danger" @click="del">删除</van-button>
    <list :list="list" @checkedClick="checkedClick" @allChecked="allChecked" />
    <div style="margin-top:10px;">
      <van-field label="得分" :value="total" readonly />
    </div>
  </div>
</template>

<script lang="ts">
import list from '@/components/demoTab/index.vue';
import { Component, Vue } from 'vue-property-decorator';
import { Button, Search, Field } from 'vant';
import _ from 'lodash';
import { Minxins } from '@/utils/mixins';
export interface ListType {
  name: string;
  value: string;
  num: number;
  checked: boolean;
}
@Component({
  name: 'demo',
  components: {
    [Search.name]: Search,
    [Field.name]: Field,
    list,
  },
  mixins: [Minxins],
})
export default class Demo extends Vue {
  // [x: string]: any;
  public list!: ListType[];
  public value!: string;
  public cloneList!: ListType[];
  public mixinTitle!: string;
  public data() {
    return {
      list: [
        { name: '李白', value: '大哥', num: 10, checked: false },
        { name: '李黑', value: '二弟', num: 20, checked: true },
      ],
      value: '',
    };
  }
  // 计算属性
  private get total(): number {
    const arr = this.list.map((v: ListType) => v.num);
    return arr.length > 0 ? arr.reduce((pre, nex) => pre + nex) : 0;
  }
  // 搜索
  public search(): void {
    this.list = _.cloneDeep(this.cloneList).filter((v: ListType) =>
      v.name.includes(this.value)
    );
  }
  // 增加
  public add(): void {
    this.cloneList.push({
      name: '李红',
      value: '三弟',
      num: 15,
      checked: false,
    });
    this.list = this.cloneList;
  }
  // 删除
  public del(): void {
    const checkedData: ListType[] = this.list.filter(
      (v: ListType) => v.checked
    );
    if (checkedData.length) {
      this.list = this.list.filter((v: ListType) => !v.checked);
      this.cloneList = this.list;
    } else {
      console.log('请勾选删除的数据');
    }
  }
  // 子组件抛出事件
  public checkedClick<T>(index: T): void {
    console.log(index);
  }
  // 全选
  public allChecked(checked: boolean): void {
    this.list.forEach((v: ListType) => {
      v.checked = checked;
    });
    console.log(checked);
  }
  public mounted() {
    console.log(this);
  }
  private created() {
    this.cloneList = this.list;
  }
}
</script>

<style scoped lang="scss"></style>
