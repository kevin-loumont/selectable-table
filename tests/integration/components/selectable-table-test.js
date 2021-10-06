import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, click } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | selectable-table', function(hooks) {
  setupRenderingTest(hooks);

  test('A row is selectable', async function(assert) {

    this.set('model', [
      {name: 'sms', device: 'Stark', path: 'path', status: 'available'}
    ])

    await render(hbs`<SelectableTable @model={{this.model}}/>`);

    assert.dom('th').exists( {count: 5} )
    assert.dom('td').exists( {count: 5} )

    await click('[data-test-checkbox]')

    assert.dom('[data-test-item-selected]').hasText('Selected 1')


  })

  test('A row is not selectable', async function(assert) {

    this.set('model', [
      {name: 'sms', device: 'Stark', path: 'path', status: 'scheduled'}
    ])

    await render(hbs`<SelectableTable @model={{this.model}}/>`);

    assert.dom('[data-test-checkbox]').isDisabled()
    assert.dom('[data-test-item-selected]').hasText('None Selected')
  })
})
