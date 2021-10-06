import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Helper | object-pick', function(hooks) {
  setupRenderingTest(hooks)

  test('it works', async function(assert) {
    this.set('object', { tacos: 'burritos', burger: 'frites' })

    await render(hbs`{{object-pick this.object 'burger'}}`)

    assert.dom().hasText('frites')

  })
})
