import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object';

export default class SelectableTable extends Component {
  @tracked itemsSelected = []

  get tableTitles() {
    if (Array.isArray(this.args.model) && this.args.model.length > 0)
    {
      return Object.getOwnPropertyNames(this.args.model[ 0 ])
    }
    return []
  }

  @action
  onClickCheckbox(index) {
    this.itemsSelected = !this.itemsSelected.includes(index)
    ? [ ...this.itemsSelected, index ]
    : this.itemsSelected.filter((i) => index !== i)

  }
}
