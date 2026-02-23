import { newSpecPage } from '@stencil/core/testing';
import { ScsAmbulanceWlList } from '../scs-ambulance-wl-list';

describe('scs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScsAmbulanceWlList],
      html: `<scs-ambulance-wl-list></scs-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <scs-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </scs-ambulance-wl-list>
    `);
  });
});
