import Component from '@glimmer/component'


export default class SelectableTable extends Component {

  get tableTitles() {
    if (Array.isArray(this.args.model) && this.args.model.length > 0)
    {
      return Object.getOwnPropertyNames(this.args.model[ 0 ])
    }
    return []
  }
}
