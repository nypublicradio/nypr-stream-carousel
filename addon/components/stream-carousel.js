import Component from 'ember-component';
import layout from '../templates/components/stream-carousel';
import computed from 'ember-computed';
import { htmlSafe } from 'ember-string';
import { scheduleOnce, bind } from 'ember-runloop';

export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['stream-carousel'],
  attributeBindings: ['style'],
  
  style: computed('background', function() {
    return htmlSafe(`background-image: url(${this.get('background')})`);
  }),
  
  doUpdate() {
    this.get('streamCarousel').forceUpdate();
  },
  didRender() {
    this._super(...arguments);
    scheduleOnce('afterRender', bind(this, 'doUpdate'));
  }
});
