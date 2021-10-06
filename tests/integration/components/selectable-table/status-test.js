import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | crowd-table/status', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('model', 'available')

    await render(hbs`<SelectableTable::Status @model={{this.model}}/>`);

    assert.dom('[data-test-badge]').isVisible({ count: 1 })
    assert.dom().hasText('Available')
    assert.dom('span')
      .hasClass('green-badge')
      .exists( { count: 1 })


    this.set('model', 'test')
    assert.dom('[data-test-badge]').isNotVisible()
    assert.dom().hasText('Test')
    assert.dom('span').doesNotExist()

  })
})
