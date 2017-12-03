<template>
  <div class="markdown-body container">

    <h2>Usage</h2>
    <ol>
      <li>Initialize</li>
      <li>Call</li>
    </ol>

    <h2>1. Initialize</h2>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <h3>Options</h3>
          <el-form ref="form" :model="initOptions" label-width="120px">
            <el-form-item label="Type">
              <el-select v-model="initOptions.type" filterable placeholder="Type">
                <el-option
                  v-for="type in typeOptions"
                  :key="type"
                  :label="type"
                  :value="type">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Title">
              <el-input v-model="initOptions.title"></el-input>
            </el-form-item>
            <el-form-item label="Message">
              <el-input v-model="initOptions.message"></el-input>
            </el-form-item>
            <el-form-item label="Duration">
              <el-input-number v-model="initOptions.duration" :step="1000"></el-input-number>
            </el-form-item>
            <el-form-item label="Position">
              <el-select v-model="initOptions.position" filterable placeholder="Position">
                <el-option
                  v-for="position in positionOptions"
                  :key="position"
                  :label="position"
                  :value="position">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Icon Class">
              <el-select v-model="initOptions.iconClass" filterable placeholder="Icon Class">
                <el-option
                  v-for="icon in iconOptions"
                  :key="icon"
                  :label="icon"
                  :value="icon">
                  <i class="fa" :class="icon" aria-hidden="true"></i>
                  <span>{{ icon }}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <h3>Your Code</h3>
          <pre>{{actualSettings}}</pre>
          <el-button type="primary" @click="init">Set defualt options</el-button>
        </div>
      </el-col>
    </el-row>

    <h2>2. Call</h2>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <h3>Argument Type</h3>
          <el-radio-group v-model="argumentType">
            <el-radio-button label="String"></el-radio-button>
            <el-radio-button label="Error"></el-radio-button>
            <el-radio-button label="SyntaxError"></el-radio-button>
            <el-radio-button label="Object"></el-radio-button>
          </el-radio-group>

          <h3>Options</h3>

          <el-form ref="form" :model="callOptions" label-width="120px">
            <template v-if="argumentType === 'String'">
              <el-form-item label="Message">
                <el-input v-model="callOptions.message"></el-input>
              </el-form-item>
            </template>

            <template v-if="argumentType === 'Error'">
              <el-form-item label="Message">
                <el-input v-model="callOptions.message"></el-input>
              </el-form-item>
            </template>

            <template v-if="argumentType === 'SyntaxError'">
              <el-form-item label="Message">
                <el-input v-model="callOptions.message"></el-input>
              </el-form-item>
            </template>

            <template v-if="argumentType === 'Object'">
              <el-form-item label="Type">
                <el-select v-model="callOptions.type" filterable placeholder="Type">
                  <el-option
                    v-for="type in typeOptions"
                    :key="type"
                    :label="type"
                    :value="type">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Title">
                <el-input v-model="callOptions.title"></el-input>
              </el-form-item>
              <el-form-item label="Message">
                <el-input v-model="callOptions.message"></el-input>
              </el-form-item>
              <el-form-item label="Duration">
                <el-input-number v-model="callOptions.duration" :step="1000"></el-input-number>
              </el-form-item>
              <el-form-item label="Position">
                <el-select v-model="callOptions.position" filterable placeholder="Position">
                  <el-option
                    v-for="position in positionOptions"
                    :key="position"
                    :label="position"
                    :value="position">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Icon Class">
                <el-select v-model="callOptions.iconClass" filterable placeholder="Icon Class">
                  <el-option
                    v-for="icon in iconOptions"
                    :key="icon"
                    :label="icon"
                    :value="icon">
                    <i class="fa" :class="icon" aria-hidden="true"></i>
                    <span>{{ icon }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
            </template>

          </el-form>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <h3>Your Code</h3>
          <pre>{{actualCode}}</pre>
          <el-button type="primary" @click="execute">Execute</el-button>
        </div>
      </el-col>
    </el-row>

    <h2>Coming soon options</h2>
    <ul>
      <li>type log</li>
      <li>htmlMessage</li>
      <li>icon</li>
      <li>iconPosition</li>
      <li>onClose</li>
      <li>theme</li>
    </ul>
  </div>
</div>

</template>

<script>
import _ from 'lodash'
import { icons } from '../modules/icons'

export default {

  name: 'TellerHeader',

  data () {
    return {
      initOptions: {
        type: 'error',
        title: 'Error',
        message: 'error message',
        duration: 3000,
        position: 'top-right',
        iconClass: null
      },
      argumentType: 'Object',
      callOptions: {
        type: 'error',
        title: 'title',
        message: 'message',
        duration: 1000,
        position: 'top-right',
        iconClass: null
      },
      typeOptions: [
        null,
        'success',
        'warn',
        'error'
      ],
      positionOptions: [
        null,
        'top-right',
        'top-center',
        'top-left',
        'middle-right',
        'middle-center',
        'middle-left',
        'bottom-right',
        'bottom-center',
        'bottom-left'
      ],
      iconOptions: [null].concat(icons)
    }
  },

  computed: {
    actualSettings () {
      const options = _.omitBy(this.initOptions, option => {
        if (!option) return true
        else if (option.length === 0) return true
        return false
      })
      return `this.$teller.init(${JSON.stringify(options, null, 2)})`
    },
    actualCode () {
      switch (this.argumentType) {
        case 'String':
          return `this.$teller(${JSON.stringify(this.callOptions.message)})`
        case 'Error':
          return `this.$teller(new Error(${JSON.stringify(this.callOptions.message)}))`
        case 'SyntaxError':
          return `this.$teller(new SyntaxError(${JSON.stringify(this.callOptions.message)}))`
        case 'Object':
          return `this.$teller(${JSON.stringify(this.callOptions, null, 2)})`
        default:
          return `something wrong!`
      }
    }
  },

  methods: {
    /*
    * Warning!!
    * You shouldn't use eavl() at your production code.
    * It's just a demo code.
    */
    /* eslint-disable no-eval */
    init () {
      eval(this.actualSettings)
    },
    execute () {
      eval(this.actualCode)
    }
  }
}
</script>

<style lang="stylus">
.el-input-group
  margin: 5px 0
  .el-input-group__prepend
    min-width: 100px
    text-align: right
.el-select-dropdown__item
  .fa
    padding-right: 1rem
</style>
