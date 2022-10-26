<template>
  <el-dialog title="港口变更日志" width="80%" :visible="logOption.show" @close="close">
    <FinanceTableMass :option="option1" />
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import FinanceTableMass from '@/views/finance/components/financeTableMass/financeTableMass'
import { mixin } from '@/views/finance/orderFee/orderFee/mixin'
import { baseDataLog } from '@/api/permission'
export default {
  props: {
    logOption: {
      type: Object,
      default: () => {},
    },
  },
  mixins: [mixin],
  components: {
    FinanceTableMass,
  },
  data() {
    return {
      option1: {},
    }
  },
  created() {
    this.option1 = Object.assign({}, this.option, {
      id: 'option1',
      data: [],
      columns: [
        { prop: 'portCode', label: '港口代码', type: 'text' },
        { prop: 'cname', label: '港口中文名称', type: 'text' },
        { prop: 'ename', label: '港口英文名称', type: 'text' },
        { prop: 'sysLineCname', label: '航线名称', type: 'text' },
        { prop: 'cityCode', label: '城市编码', type: 'text' },
        { prop: 'cityCname', label: '城市中文名称', type: 'text' },
        { prop: 'cityEname', label: '城市英文名称', type: 'text' },
        { prop: 'portType', label: '港口类型', type: 'select', propInDict: 'portCategory' },
        {
          prop: 'portAttribute',
          label: '港口属性',
          type: 'text',
          formatter: ({ cellValue }) => {
            let arr = cellValue.split(',').map((ele) => this.dictMapObj['portAttribute'][ele])
            return arr.join(', ')
          },
        },
        { prop: 'countryCname', label: '国家名称', type: 'text' },
        {
          prop: 'updatedName',
          label: '更新人',
          type: 'text',
        },
        {
          prop: 'updatedTime',
          label: '更新时间',
          type: 'text',
          formatter: ({ cellValue }) => cellValue.replace('T', ' '),
        },
      ],
      tips: {
        text: '',
        show: false,
      },
      operationBtns: false,
      selection: false,
    })
    this.getData()
  },
  computed: {
    ...mapGetters(['dictMapObj']),
  },
  methods: {
    close() {
      this.logOption.show = false
    },
    getData() {
      let data = {
        tableName: 'basePort',
        code: this.logOption.code,
      }
      baseDataLog(data)
        .then((res) => {
          this.option1.data = res.data.map((item) => JSON.parse(item))
        })
        .catch(() => {})
    },
  },
}
</script>
