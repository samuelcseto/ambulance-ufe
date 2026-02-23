import { newSpecPage } from '@stencil/core/testing';
import { ScsAmbulanceWlList } from '../scs-ambulance-wl-list';

describe('scs-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScsAmbulanceWlList],
      html: `<scs-ambulance-wl-list></scs-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as ScsAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
