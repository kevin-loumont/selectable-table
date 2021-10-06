import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, click } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | selectable-table/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it display the right amount of items selected', async function(assert) {
    assert.expect(3)

    this.set('displayAlert', () => {
      assert.ok('displayAlert is called')
    })
    this.set('selectAllItems', () => {})


    await render(hbs`<SelectableTable::Header
      @nbItemSelected={{this.nbItemSelected}}
      @displayAlert={{this.displayAlert}}
      @selectAllItems={{this.selectAllItems}}
    />`)

    this.set('nbItemSelected' , 0)

    assert.dom('[data-test-item-selected]').hasText('None Selected')

    this.set('nbItemSelected' , 4)
    assert.dom('[data-test-item-selected]').hasText('Selected 4')

    await click('button')
  })
})
