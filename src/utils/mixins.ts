import { Component, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    Test(arg: string) {
      return arg + '  我来刷点存在感';
    }
  }
})
export class Minxins extends Vue {
  public mixinTitle!: string;
  public data() {
    return {
      mixinTitle: '我是一个测试的mixin'
    };
  }
  public save() {
    console.log('保存'); //
  }
  public beforeCreate() {
    console.log('beforeCreate 调用'); // 前期混合注入 比如你想要的方法调用， vue-router也是在此注册
  }

  public getMixinTitle(): void {
    console.log(this.mixinTitle);
  }
}
