import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'
import { isEmpty } from '@ember/utils'


export default class SelectableTable extends Component {

  @tracked itemsSelected = []
  @tracked isAllSelected = false

  get tableTitles() {
    if (Array.isArray(this.args.model) && this.args.model.length > 0)
    {
      return Object.getOwnPropertyNames(this.args.model[ 0 ])
    }
    return []
  }

  get isIndeterminate() {
    if (!isEmpty(this.itemsSelected) && this.itemsSelected.length < this.getItemSelectable().length) {
      return true
    }
    return false
  }

  getItemSelectable() {
    let selectable = []
    this.args.model.forEach( (element , index) => {
      if(element.status === 'available') {
        selectable.push(index)
      }
    })
    return selectable
  }

  @action
  onClickCheckbox(index) {
    this.itemsSelected = !this.itemsSelected.includes(index)
    ? [ ...this.itemsSelected, index ]
    : this.itemsSelected.filter((i) => index !== i)

    if(this.itemsSelected.length === this.getItemSelectable().length) {
      this.isAllSelected = true
    } else {
      this.isAllSelected = false
    }
  }

  @action
  selectAllItems(event) {
    if (event.target.checked === false) {
      this.itemsSelected = []
      this.isAllSelected = false
    } else if (event.target.checked === true) {
      this.itemsSelected = this.getItemSelectable()
      this.isAllSelected = true
    }
  }
}
