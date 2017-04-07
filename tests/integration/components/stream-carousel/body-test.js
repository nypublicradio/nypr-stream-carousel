import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stream-carousel/body', 'Integration | Component | stream carousel/body', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stream-carousel/body}}`);

  assert.equal(this.$().text().trim(), 'On Air Now');

  // Template block usage:
  this.render(hbs`
    {{#stream-carousel/body}}
      template block text
    {{/stream-carousel/body}}
  `);

  assert.equal(this.$('.slide-body__title').length, 1);
});
