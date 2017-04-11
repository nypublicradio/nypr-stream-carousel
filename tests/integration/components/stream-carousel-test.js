import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stream-carousel', 'Integration | Component | stream carousel', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stream-carousel}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it yields out the given block', function(assert) {
  this.set('streams', [{name: 'foo'}, {name: 'bar'}]);
  this.render(hbs`
    {{#stream-carousel streams=streams as |stream|}}
      {{stream.name}}
    {{/stream-carousel}}
  `);

  assert.ok(this.$().text().match(/foo|bar/), 'stream names are rendered');
});

test('it renders the given image as the background image', function(assert) {
  this.set('backgroundImage', 'http://loremflickr.com/320/240');
  this.render(hbs`{{stream-carousel background=backgroundImage}}`);
  assert.equal(this.$('section').attr('style'), 'background-image: url(http://loremflickr.com/320/240)');
});

test('it must call forceUpdate because streams are async', function() {
  this.set('doUpdate', this.mock().atLeast(1));
  this.render(hbs`{{stream-carousel doUpdate=doUpdate}}`);
});

test('yielded blocks', function(assert) {
  this.set('streams', [{
    name: 'foo',
    piece: 'famous fugue',
    frequency: '100 fm'
  }, {
    name: 'bar',
    piece: 'low bass',
    frequency: '90 fm'
  }]);
  this.render(hbs`
    {{#stream-carousel streams=streams as |stream slide|}}
      {{#slide.header}}
        {{stream.name}}
      {{/slide.header}}
      
      {{#slide.body}}
        {{stream.piece}}
      {{/slide.body}}
      
      {{#slide.footer}}
        Listen to {{stream.frequency}}
      {{/slide.footer}}
    {{/stream-carousel}}
  `);
  
  let headers = this.$('.slide-header');
  assert.ok(headers.text().includes('foo'));
  assert.ok(headers.text().includes('bar'));
  
  let bodies = this.$('.slide-body__title');
  assert.ok(bodies.text().includes('famous fugue'));
  assert.ok(bodies.text().includes('low bass'));
  
  let footers = this.$('.slide-footer');
  assert.ok(footers.text().includes('100 fm'));
  assert.ok(footers.text().includes('90 fm'));
});
